/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { IProfileFormData, auth } from '../../../TypeInterface/userType';
import TagInput from '../../../Components/TagInput';
import userAPi from '../../../Api/userAPi';

export default function Profile({
  profileData,
  tagList,
  Auth,
}: {
  profileData: IProfileFormData;
  tagList: Array<string>;
  Auth:auth
}) {
  const workdayOptions = ['주 1일', '주 2일', '주 3일', '주 4일', '주 5일'];
  const timeOptions = ['오전', '오후', '저녁', '야간'];
  const careerOptions = ['1년 미만', '1-2년', '2-3년', '3-4년', '4-5년', '5년 이상', '10년 이상'];
  const meetingoptions = [{ value: 'true', label: '대면' }, { value: 'flase', label: '비대면' }];
  const positionOptions = ['개발자', '디자이너', '기획자'];
  const residenceOptions = ['서울', '부산', '대구', '제주'];
  const fieldsOptions = ['프론트', '백', '웹디자인'];

  function dateFormat(date: Date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = Number(month >= 10 ? month : `0${month}`);
    day = Number(day >= 10 ? day : `0${day}`);
    return `${date.getFullYear()}-${month}-${day}`;
  }
  const Today = dateFormat(new Date());
  const selected = profileData.skills ? profileData.skills : [''];
  const {
    username, email, phone_number, position, residence,
    career_period, portfolio_url, face_to_face, skills, test,
  } = profileData;
  const [workDay, time] = profileData.available_period ? profileData.available_period.split(',') : ['', ''];
  const [startDate, endDate] = profileData.available_time ? profileData.available_time.split(',') : [Today, Today];

  const methods = useForm<IProfileFormData>({
    defaultValues: {
      username,
      email,
      skills,
      test,
      phone_number,
      startDate,
      endDate,
      workDay,
      residence,
      time,
      face_to_face,
      career_period,
      portfolio_url,
      position,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const { register } = methods;

  const profileRecruit = useMutation(
    (data: IProfileFormData) => userAPi.putUserProfile(data, Auth),
    {
      onSuccess: (res) => {
        console.log('응답', res);
      },
    },
  );

  const onSubmit: SubmitHandler<IProfileFormData> = (data) => {
    const singleValue = methods.getValues('test');
    console.log('form data singleValue', singleValue);
    console.log('form data set', data);
    profileRecruit.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <fieldset>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="profile max-w-[736px] pl-[10px] pb-[63px] border-2 border-[#EEEEEE] rounded-2xl">
            <h2 className="prorileTitle pt-[40px] font-pre font-bold text-[28px] leading-[33px] ">
              안녕하세요
              <br />
              {!profileData.fields[0] && (
                profileData.fields[0]
              )}
              {!profileData.position && (
                profileData.position
              )}
              {` ${profileData.username}입니다.`}
            </h2>
            <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
            <div className="flex pt-[40px]">
              <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[21px]">
                직군
              </h2>
              <select
                className="border-2 mr-[8px] border-[#EEEEEE] rounded-md "
                {...register('position')}
              >
                {positionOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex pt-[28px]">
              <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[21px]">
                직무
              </h2>
              <select
                className="border-2 mr-[8px] border-[#EEEEEE] rounded-md "
                {...register('fields')}
              >
                {fieldsOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex pt-[28px]">
              <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[21px]">
                경력
              </h2>
              <select
                className="border-2 border-[#EEEEEE] rounded-md "
                {...register('career_period')}
              >
                {careerOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex pt-[28px] mr-[64px]">
              <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[50px]">
                스킬
              </h2>
              <TagInput tags={tagList} selected={selected} placeholder="보유 스킬을 검색 해 주세요." />
            </div>
            <div className="flex pt-[28px]">
              <h2 className="min-w-fit pr-[22px] font-pre font-bold text-[18px] leading-[50px]">
                포트폴리오
              </h2>
              <input
                className="h-[50px] w-full mr-[64px] pl-[10px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px]  text-black placeholder:text-[#CCCCCC]"
                type="text"
                placeholder="https://.."
                defaultValue={profileData.portfolio_url}
                {...register('portfolio_url')}
              />
            </div>
            <div className="flex pl-[60px] pt-[12px]">
              <p className="w-full font-pre font-normal text-[12px] leading-[14.32px]">
                깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 본인을 보여줄 수 있는 링크를
                추가해주세요.
              </p>
            </div>
            <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
            <div className="flex flex-col pt-[40px] mr-[64px]">
              <h2 className="font-pre font-bold text-[24px] leading-[29px]  text-black placeholder:text-[#CCCCCC]">연락처</h2>
              <input
                className="w-full h-[50px] mt-[20px] pl-[20px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px] text-black placeholder:text-[#CCCCCC]"
                type="text"
                placeholder="이메일"
                {...register('email')}
              />
              <input
                className="w-full h-[50px] mt-[20px] pl-[20px] border-2 border-[#EEEEEE] rounded-2xl font-pre font-normal text-[18px] leading-[21px]  text-black placeholder:text-[#CCCCCC]"
                type="text"
                placeholder="연락처"
                {...register('phone_number')}
              />
            </div>
            <hr className="mt-[40px] mr-[64px]  border-1 border-[#CCCCCC]" />
            <div className="flex pt-[40px]">
              <h2 className="flex-none w-full font-pre font-bold text-[24px] leading-[29px]">
                협업 사항
              </h2>
            </div>
            <div className="flex pt-[40px]">
              <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
                거주지역
              </h2>
              <select
                className="border-2 mr-[8px] border-[#EEEEEE] rounded-md "
                {...register('residence')}
              >
                {residenceOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex pt-[40px]">
              <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
                미팅방식
              </h2>
              <select
                className="border-2 border-[#EEEEEE] rounded-md "
                {...register('face_to_face')}
              >
                {meetingoptions.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex pt-[40px]">
              <h2 className="min-w-[102px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
                작업 가능 기간
              </h2>
              {/* <CustomCalinder start={startDate} end={endDate}
           isRange  {...register("startDate")} /> */}
            </div>
            <div className="flex pt-[40px]">
              <h2 className="min-w-[102px] pr-[20px] font-pre font-bold text-[18px] leading-[21px]">
                작업 가능 시간
              </h2>

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
              {timeOptions.map((item) => (
                <label key={item} htmlFor={item} className="peer border-2 border-[#6457FA] bg-[#CCCCC] rounded-[24px] text-#6457FA px-[12px] py-[6px] mr-[8px] mb-[8px] font-pre text-[14px] leading-[16.9x]">
                  <input {...register('time')} type="radio" value={item} id={item} className="bg-[#ccccc] peer-checked:bg-#6457fA" />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-[67px] rounded-[15px] mt-[40px]font-pre font-normal
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
