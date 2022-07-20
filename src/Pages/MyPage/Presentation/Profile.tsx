/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import React, { SetStateAction, useState } from 'react';
import { IProfileFormData } from '../../../TypeInterface/userType';
import TagInput from '../../../Components/TagInput';
import userAPi from '../../../Api/userAPi';
import CustomCalinder from '../../../Components/CustomCalinder';
import { dateFormat } from '../../../util/util';
import jwtUtils from '../../../util/JwtUtil';

export default function Profile({
  profileData,
  tagList,
  modify,
  setModify,
}: {
  profileData: IProfileFormData;
  tagList: string[];
  modify:boolean;
  setModify :React.Dispatch<SetStateAction<boolean>>;
}) {
  const workdayOptions = ['주 1일', '주 2일', '주 3일', '주 4일', '주 5일'];
  const timeOptions = ['오전', '오후', '저녁', '야간'];
  const careerOptions = ['1년 미만', '1-2년', '2-3년', '3-4년', '4-5년', '5년 이상', '10년 이상'];
  const meetingoptions = [{ value: 'true', label: '대면' }, { value: 'false', label: '비대면' }];
  const positionOptions = ['개발자', '디자이너', '기획자'];
  const residenceOptions = ['서울', '부산', '대구', '제주'];
  const fieldsOptions = ['프론트엔드', '백엔드', '모바일개발', '웹개발', '데스크탑개발'];
  const {
    username, email, phone_number, position, residence,
    career_period, portfolio_url, face_to_face, fields,
  } = profileData;

  const [workDay, time] = profileData.available_time ? profileData.available_time.split(',') : ['', ''];

  const Today = dateFormat(new Date());
  const [start, end] = profileData.available_period ? profileData.available_period.split(',') : [Today, Today];
  const [startDate, setStartDate] = useState<string>(start);
  const [endDate, setEndDate] = useState<string>(end);

  const Myskils = profileData.skills ? profileData.skills : [''];
  const [selected, setSelected] = useState<string[]>(Myskils);
  // useEffect(() => {
  //   if (profileData.available_period) {
  //     console.log(profileData.available_period);

  //     setStartDate(start);
  //     setEndDate(end);
  //   }
  // }, []);
  const tokenget = localStorage.getItem('token');
  const token = tokenget || '';
  const UserId = jwtUtils.getId(token);

  // TODO 쓰는 데이터만 인터페이스 쪼개기
  console.log('profiledata: ', profileData);
  const methods = useForm<IProfileFormData>({
    defaultValues: {
      username,
      email,
      phone_number,
      startDate,
      endDate,
      workDay,
      residence,
      fields,
      time,
      face_to_face,
      career_period,
      portfolio_url,
      position,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldUnregister: true,
  });
  const { register, formState: { errors } } = methods;

  const profileRecruit = useMutation(
    (data: IProfileFormData) => userAPi.putUserProfile(
      data,
      selected,
      startDate,
      endDate,
      UserId,
      token,
    ),
    {
      onSuccess: (res) => {
        setModify(!modify);
        console.log('응답 :', res);
      },
    },
  );

  const onSubmit: SubmitHandler<IProfileFormData> = (data) => {
    // 1. methods.setValue로 데이터 바꾸기 시도 ->실패
    // methods.setValue('startDate', start);
    // console.log('getData:', start, end);
    // console.log('data:', data);
    // 2. methods.getValues 데이터 넘겨주는지 확인. 배열이라 안되나 해서 스트링으로 테스트
    // const singleValue = methods.getValues('test');
    // console.log('form data singleValue', singleValue);

    profileRecruit.mutate(data);
  };
  const fixInputCSS = 'font-pre font-normal text-[18px] leading-[21px]';
  const titleCSS = 'min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[40px] align-middle ';
  // TODO : form privider 를 쓰는 이유가 뭐지..?어짜피 스타일로 보여주고 말고 할거면...
  return (
    <FormProvider {...methods}>
      <fieldset>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="profile max-w-[736px] pl-[30px] pb-[63px] border-2 border-[#EEEEEE] rounded-2xl">
            <h2 className="prorileTitle pt-[40px] font-pre font-bold text-[28px] leading-[33px] ">
              안녕하세요
              <br />
              {profileData.fields.length > 0 && (
                `${profileData.fields[0]} `
              ) }
              {profileData.position && (
                `${profileData.position} `
              )}
              {`${profileData.username} 입니다.`}
            </h2>
            <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
            <div className="flex pt-[40px] text-center ">
              <h2 className={titleCSS}>
                직군
              </h2>
              {modify
                ? (
                  <select
                    className="border-2 mr-[8px] w-[198px] h-[36px] border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                    {...register('position')}
                  >
                    {positionOptions.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )
                : (<input className={fixInputCSS} defaultValue={profileData.position} readOnly />)}
            </div>
            <div className="flex pt-[28px]">
              <h2 className={titleCSS}>
                직무
              </h2>
              {modify
                ? (
                  <select
                    className="border-2 mr-[8px] w-[198px] h-[36px] border-[#EEEEEE] rounded-md pl-[10px]  font-pre font-normal text-[18px] leading-[21px]"
                    {...register('fields')}
                  >
                    {fieldsOptions.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                ) : (<input className={fixInputCSS} defaultValue={profileData.fields} readOnly />)}
            </div>
            <div className="flex pt-[28px]">
              <h2 className={titleCSS}>
                경력
              </h2>
              {modify
                ? (
                  <select
                    className="border-2 mr-[8px] w-[198px] h-[36px] border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                    {...register('career_period')}
                  >
                    {careerOptions.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className={fixInputCSS}
                    defaultValue={profileData.career_period}
                    readOnly
                  />
                )}

            </div>
            <div className="flex pt-[28px] mr-[64px] ">
              <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[50px] ">
                스킬
              </h2>
              {modify
                ? (<TagInput tags={tagList} selected={selected} setSelected={setSelected} placeholder="보유 스킬을 검색 해 주세요." />)
                : (
                  <div className="flex items-center">
                    {selected.map((skil) => (
                      <span className="bg-[#CCCCCC] h-[30px]  rounded-2xl text-black px-[12px] py-[2px] mr-[8px] font-pre text-[14px] leading-[15x] " key={skil}>{skil}</span>
                    ))}
                  </div>
                )}
            </div>
            <div className="flex pt-[28px]  mr-[64px]">
              <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[50px]">
                링크
              </h2>
              <input
                className="w-full h-[50px] pl-[10px] read-only:border-none  border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px]  text-black placeholder:text-[#CCCCCC]"
                type="text"
                readOnly={!modify}
                placeholder="https://.."
                defaultValue={profileData.portfolio_url}
                {...register('portfolio_url')}
              />
            </div>
            <div className="flex pl-[60px] pt-[12px]">
              <p>{errors.email?.type === 'pattern' && '유효한 이메일 주소를 입력 해 주세요'}</p>
              <p className="w-full font-pre font-normal text-[12px] leading-[14.32px]">
                깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 본인을 보여줄 수 있는 링크를
                추가해주세요.
              </p>
            </div>
            <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
            <div className="flex flex-col pt-[40px] mr-[64px]">
              <h2 className="font-pre font-bold text-[24px] leading-[29px]  text-black placeholder:text-[#CCCCCC]">연락처</h2>
              <p className="pt-[10px]">{errors.email?.type === 'pattern' && '유효한 이메일 주소를 입력 해 주세요'}</p>
              <input
                className="w-full h-[50px] mt-[20px] pl-[20px] read-only:border-none border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-black placeholder:text-[#CCCCCC] "
                type="text"
                readOnly={!modify}
                placeholder="이메일"
                {...register('email', ({ pattern: /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ }))}
              />
              <p>{errors.phone_number?.type === 'pattern' && '유효한 핸드폰 번호를 입력 해 주세요'}</p>
              <input
                className="w-full h-[50px] mt-[20px] pl-[20px] read-only:border-none  border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px]  text-black placeholder:text-[#CCCCCC]"
                type="text"
                placeholder="연락처"
                readOnly={!modify}
                {...register('phone_number', ({ pattern: /^\d{3}-\d{3,4}-\d{4}$/ }))}
              />
            </div>
            <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
            <div className="flex pt-[40px]">
              <h2 className="flex-none w-full font-pre font-bold text-[24px] leading-[29px]">
                협업 사항
              </h2>
            </div>
            <div className="flex pt-[40px]">
              <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px]  leading-[40px] align-middle ">
                거주지역
              </h2>
              {modify
                ? (
                  <select
                    className="border-2 mr-[8px] w-[198px] h-[36px] border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                    {...register('residence')}
                  >
                    {residenceOptions.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input className={fixInputCSS} defaultValue={profileData.residence} readOnly />)}

            </div>
            <div className="flex pt-[28px]">
              <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px] leading-[40px] align-middle">
                미팅방식
              </h2>
              {modify
                ? (
                  <select
                    className="border-2 mr-[8px] w-[198px] h-[36px] border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                    {...register('face_to_face')}
                  >
                    {meetingoptions.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>

                ) : (<input className={fixInputCSS} defaultValue={profileData.face_to_face ? '대면' : '비대면'} readOnly />)}

            </div>
            <div className="flex pt-[28px]">
              <h2 className="min-w-[102px] pr-[20px] font-pre font-bold text-[18px]  leading-[75px] align-middle ">
                작업 가능 기간
              </h2>
              {modify ? (
                <CustomCalinder
                  start={startDate}
                  end={endDate}
                  setStart={setStartDate}
                  setEnd={setEndDate}
                  isRange
                />
              )
                : (
                  <input className={fixInputCSS} defaultValue={`${startDate} ~ ${endDate}`} readOnly />
                )}
            </div>
            <div className="flex pt-[28px]">
              <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px] leading-[40px] align-middle">
                작업 가능 시간
              </h2>
              {modify
                ? (
                  <select
                    className="border-2 mr-[8px] border-[#EEEEEE] rounded-md "
                    {...register('workDay')}
                  >
                    {workdayOptions.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className={fixInputCSS}
                    defaultValue={profileData.available_time}
                    readOnly
                  />
                )}

              {/* <select
                className="border-2 mr-[8px] border-[#EEEEEE] rounded-md "
                {...register('time')}
              >
                {timeOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select> */}
              {modify && (
                <div>
                  {timeOptions.map((item) => (
                    <label key={item} htmlFor={item} className="mt-[20px] peer border-2 border-[#CCCCC] bg-[#CCCCC] rounded-[24px] text-#6457FA px-[12px] py-[6px] mr-[8px] mb-[8px] font-pre text-[14px] leading-[16.9x]">
                      <input {...register('time')} type="radio" value={item} id={item} className="checked:bg-[#6457FA] peer-checked:bg-#6457fA" />
                      {item}
                    </label>
                  ))}
                </div>
              ) }

            </div>
          </div>
          <button
            type="submit"
            className="w-full h-[67px] rounded-[15px] mt-[40px] font-pre font-normal
        text-[16px] leading-[19px] bg-[#6457FA] text-white
       hover:bg-white hover:text-[#6457FA]  hover:border-2 hover:border-[#6457FA]"
          >
            내 정보 수정하기
          </button>
        </form>
      </fieldset>
    </FormProvider>
  );
}
