/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { SetStateAction, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import userApi from '../../../Api/userApi';
import CustomCalinder from '../../../Components/CustomCalinder';
import Portal from '../../../Components/Portal';
import TagBox from '../../../Components/TagBox';
import TagSearch from '../../../Components/TagSearch';
import TextModal from '../../../Components/TextModal';
import { ITag } from '../../../TypeInterface/postType';
import { IProfileFormData } from '../../../TypeInterface/userType';
import { dateFormat } from '../../../util/util';

export default function Profile({
  profileData,
  tagList,
  currentUser,
  modifyState,
  setModifyState,
}: {
  profileData: IProfileFormData;
  tagList: Array<ITag>;
  currentUser:boolean;
  modifyState:boolean;
  setModifyState :React.Dispatch<SetStateAction<boolean>>;
}) {
  const [modalOpen, setModalOpen] = useState<boolean |number>(true);
  const [updateErrMessage, setUpdateErrMessage] = useState('');

  const workdayOptions = ['주 1일', '주 2일', '주 3일', '주 4일', '주 5일'];
  // const timeOptions = ['오전', '오후', '저녁', '야간'];
  const careerOptions = ['1년 미만', '1-2년', '2-3년', '3-4년', '4-5년', '5년 이상', '10년 이상'];
  const meetingoptions = [{ value: 'true', label: '대면' }, { value: 'false', label: '비대면' }];
  const positionOptions = tagList.slice(0, 3);
  const [selectPosition, setSelectPositionOptions] = useState<string>(
    profileData.position ? profileData.position : positionOptions[0].body,
  );
  const residenceOptions = ['서울', '경기', '강원', '부산', '경상', '충청', '전라', '제주'];
  const [fieldsOptions, setFieldsOptions] = useState<Array<ITag>>(
    selectPosition === '개발자'
      ? tagList.slice(3, 8)
      : selectPosition === '디자이너'
        ? tagList.slice(8, 30)
        : [],
  );
  const {
    username, email, phone_number, position, residence,
    available_time,
    career_period, portfolio_url, face_to_face, fields,
  } = profileData;
  const queryClient = useQueryClient();

  const [w, t] = profileData.available_time ? profileData.available_time.split(',') : ['', ''];
  const [workDay, setWorkDay] = useState<string>(w);
  const [time, setTime] = useState<string>(t);
  const Today = dateFormat(new Date());
  const [start, end] = profileData.available_period ? profileData.available_period.split(',') : [Today, Today];
  const [startDate, setStartDate] = useState<string>(start);
  const [endDate, setEndDate] = useState<string>(end);

  const [selected, setSelected] = useState<Array<ITag>>(
    tagList.filter((v) => profileData.skills.includes(v.body)),
  );
  const methods = useForm<IProfileFormData>({
    defaultValues: {
      username,
      email,
      available_time,
      phone_number,
      startDate,
      endDate,
      workDay,
      time,
      test: w,
      residence,
      fields,
      face_to_face,
      career_period,
      portfolio_url,
      position,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldUnregister: true,
  });
  const {
    register, formState: { errors }, reset, handleSubmit,
  } = methods;

  useEffect(() => {
    if (profileData) {
      reset(profileData);
    }
  }, [profileData]);

  const profileRecruit = useMutation(
    (data: IProfileFormData) => userApi.putUserProfile(
      data,
      selected,
      startDate,
      endDate,
    ),

    {
      onSuccess: () => {
        queryClient.invalidateQueries('get_userInfo');
        queryClient.invalidateQueries('get_profile_info');
        setUpdateErrMessage('');
        setModifyState(!modifyState);
      },
      onError: () => {
        queryClient.invalidateQueries('get_userInfo');
        queryClient.invalidateQueries('get_profile_info');
        setUpdateErrMessage('다시 작성해 주세요.');
      },
    },
  );
  const onSubmit = (data: IProfileFormData) => {
    setWorkDay(data.workDay);
    setTime(data.time);
    profileRecruit.mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  const titleCSS = 'min-w-fit pr-[22px] font-pre font-bold text-[18px] align-middle';
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-[160px]">
      { modalOpen && updateErrMessage && (
      <Portal>
        <TextModal messages={['프로필을 변경할 수 없습니다.', updateErrMessage]} modalClose={setModalOpen} />
      </Portal>
      )}
      <div className="profile lg:max-w-[736px] px-5 lg:px-8 mb-[97px] pc:pb-10 pc:border-2 pc:border-[#EEEEEE] pc:rounded-2xl ">
        <div className="profileTitle pt-[40px] ">
          <h3 className="messageHello font-pre font-bold text-base md:text-[28px] md:leading-tight md:inline-block pr-1 ">
            안녕하세요
            {' '}
            {' '}
          </h3>
          <h3 className="prPosition font-pre font-bold text-base md:text-[28px]  md:inline-block pr-1 md:leading-tight">
            {' '}
            {profileData.fields.length > 0 && (
              ` ${profileData.fields[0]} `
            ) }
            {profileData.position && (
              `${profileData.position === '디자이너' ? '' : profileData.position} `
            )}
            {' '}
          </h3>
          <h3 className="prUserName font-pre font-bold text-base md:text-[28px] md:leading-tight ">
            {` ${profileData.username} 입니다.`}
          </h3>
          <h3 className="prDefaultMessage font-pre font-bold text-base md:text-[28px] md:leading-tight ">
            만나서 반갑습니다! 잘 부탁 드려요!
          </h3>
        </div>
        <hr className="mt-[40px]  mr-[34px]  border-1 border-[#CCCCCC]" />
        <div className="flex flex-row pc:flex-col md:flex-row align-middle pc:pt-6 pt-5 items-center pc:items-start md:items-center ">
          <h2 className={titleCSS}>
            직군
          </h2>
          {currentUser && modifyState
            ? (
              <div
                className="border-2 mr-[8px] w-[272px] h-12 border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                style={{ backgroundImage: 'url(./dropdown.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '92% 50%' }}
              >
                <select
                  className="border-0 bg-transparent appearance-none w-full h-full outline-none "
                  {...register('position')}
                  onChange={(e) => {
                    setSelectPositionOptions(e.target.value);
                    if (e.target.value === '개발자') {
                      setFieldsOptions(tagList.slice(3, 8));
                    } else if (e.target.value === '디자이너') {
                      setFieldsOptions(tagList.slice(8, 30));
                    } else {
                      setFieldsOptions([]);
                    }
                  }}
                >
                  {positionOptions.map((item) => (
                    <option value={item.body} key={item.tagId}>
                      {item.body}
                    </option>
                  ))}
                </select>
              </div>
            )
            : (<p className="font-pre font-normal text-[18px] md:leading-[40px]">{profileData.position}</p>)}

        </div>

        {fieldsOptions.length > 0 && (
        <div className="flex flex-row pc:flex-col md:flex-row align-middle pc:pt-6 pt-5 items-center pc:items-start md:items-center">
          <h2 className={titleCSS}>
            직무
          </h2>
          {currentUser && modifyState
            ? (
              <div
                className="border-2 mr-[8px] w-[272px] h-12 border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                style={{ backgroundImage: 'url(./dropdown.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '92% 50%' }}
              >
                <select
                  className="border-0 bg-transparent appearance-none w-full h-full outline-none "
                  {...register('fields')}
                >
                  {fieldsOptions.map((item) => (
                    <option value={item.body} key={item.tagId}>
                      {item.body}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="font-pre font-normal text-[18px] leading-[40px]">{profileData.fields[0]}</p>
            )}
        </div>
        )}
        <div className="flex flex-row pc:flex-col md:flex-row align-middle pc:pt-6 pt-5 items-center pc:items-start md:items-center">
          <h2 className={titleCSS}>
            경력
          </h2>
          {currentUser && modifyState
            ? (
              <div
                className="border-2 mr-[8px] w-[272px] h-12 border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                style={{ backgroundImage: 'url(./dropdown.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '92% 50%' }}
              >
                <select
                  className="border-0 bg-transparent appearance-none w-full h-full outline-none "
                  {...register('career_period')}
                >
                  {careerOptions.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="font-pre font-normal text-[18px] leading-[40px]">{profileData.career_period}</p>
            )}

        </div>
        <div className="flex flex-row pc:flex-col md:flex-row pt-5 pc:pt-6 sm:mr-10 items-start">
          <h2 className={`min-w-fit pr-[22px] font-pre font-bold text-[18px] ${modifyState && 'leading-[50px]'}`}>
            스킬
          </h2>
          {currentUser && modifyState
            ? (<TagSearch tagData={tagList.slice(30, 49)} selected={selected} setHashTag={setSelected} placeholder="보유 스킬을 검색 해 주세요." />)
            : (
              <div className="flex flex-wrap gap-2 items-center">
                {selected.map((skil, i) => (
                  <TagBox
                    tag={`${skil.body}`}
                    padding="text-[12px] py-[8px] px-[12px]"
                    margin="ml-[5px]"
                    key={`${skil.body + i}`}
                  />
                ))}
              </div>
            )}
        </div>
        <div className="flex flex-row pc:flex-col md:flex-row pc:pt-6 pt-5 sm:mr-10 items-center pc:items-start md:items-center">
          <h2 className={titleCSS}>
            링크
          </h2>
          <input
            className="w-full h-[45px] md:h-[50px] outline-none read-only:border-none read-only:pl-0  pl-4 border-2 border-[#EEEEEE] rounded-[8px] font-pre font-normal text-[18px] leading-[21px]  text-black placeholder:text-[#CCCCCC]"
            type="text"
            readOnly={!modifyState}
            placeholder="https://.."
            defaultValue={profileData.portfolio_url}
            {...register('portfolio_url')}
          />
        </div>
        {currentUser && modifyState && (
        <div className="flex  pc:pl-[60px] pt-[12px]">
          <p className="w-full font-pre font-normal text-[12px] leading-[14.32px]">
            깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 본인을 보여줄 수 있는 링크를
            추가해주세요.
          </p>
        </div>
        )}
        <hr className="mt-[40px] mr-[34px]  border-1 border-[#CCCCCC]" />
        <div className="flex flex-col pt-[40px] sm:mr-10 ">
          <h2 className="font-bold text-[24px] leading-[29px]  mb-[12px] text-black placeholder:text-[#CCCCCC]">연락처</h2>
          <input
            className={`w-full ${modifyState ? 'h-[52px] border-2 border-[#EEEEEE] rounded-[8px]' : ' py-[10px] border-none'} mt-5 pl-[56px] outline-none font-normal text-[18px] leading-[21px]  text-black placeholder:text-[#CCCCCC]`}
            type="text"
            readOnly={!modifyState}
            placeholder="이메일"
            style={{
              backgroundImage: 'url(./email.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '20px 50%',
              border: errors.email ? '2px solid #FF1D1D' : '',
            }}
            {...register('email', ({ pattern: /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ }))}
          />
          {errors.email?.type === 'pattern' && (
            <div className="block h-[20px] text-[16px] font-normal  text-[#FF1D1D] mt-[6px] pl-6" style={{ backgroundImage: 'url(./exclamation.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%' }}>
              정확한 메일을 입력해주세요.
            </div>
          )}
          <input
            className={`w-full ${modifyState ? 'h-[52px] border-2 border-[#EEEEEE] rounded-[8px]' : 'py-[10px] border-none'} mt-3 pl-[56px] outline-none font-normal text-[18px] leading-[21px]  text-black placeholder:text-[#CCCCCC]`}
            type="text"
            placeholder="연락처"
            style={{
              backgroundImage: 'url(./call.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '20px 50%',
              border: errors.phone_number ? '2px solid #FF1D1D' : '',
            }}
            readOnly={!modifyState}
            {...register('phone_number', ({ pattern: /^\d{3}-\d{3,4}-\d{4}$/ }))}
          />
        </div>
        {errors.phone_number?.type === 'pattern' && (
        <div className="block h-[20px] text-[16px] font-normal  text-[#FF1D1D] mt-[6px] pl-6" style={{ backgroundImage: 'url(./exclamation.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%' }}>
          숫자만 입력해주세요.
        </div>
        )}

        <hr className="mt-[40px]  mr-[34px]   border-1 border-[#CCCCCC]" />
        <div className="flex pt-[40px]">
          <h2 className="flex w-full font-pre font-bold text-[24px] leading-[29px]">
            협업 사항
          </h2>
        </div>
        <div className="flex flex-row pc:flex-col md:flex-row align-middle pc:pt-6 pt-5 items-center pc:items-start md:items-center ">
          <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px]  leading-[40px] align-middle ">
            거주지역
          </h2>
          {currentUser && modifyState
            ? (
              <div
                className="border-2 mr-[8px] w-[272px] h-12 border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                style={{ backgroundImage: 'url(./dropdown.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '92% 50%' }}
              >
                <select
                  className="border-0 bg-transparent appearance-none w-full h-full outline-none "
                  {...register('residence')}
                >
                  {residenceOptions.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="font-pre font-normal text-[18px] leading-[40px]">{profileData.residence}</p>
            )}

        </div>
        <div className="flex flex-row pc:flex-col md:flex-row align-middle pc:pt-6 pt-5 items-center pc:items-start md:items-center ">
          <h2 className="min-w-[122px] pr-[20px] font-pre font-bold text-[18px] leading-[40px] align-middle">
            미팅방식
          </h2>
          {currentUser && modifyState
            ? (
              <div
                className="border-2 mr-[8px] w-[272px] h-12 border-[#EEEEEE] rounded-md pl-[10px] font-pre font-normal text-[18px] leading-[21px]"
                style={{ backgroundImage: 'url(./dropdown.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '92% 50%' }}
              >
                <select
                  className="border-0 bg-transparent appearance-none w-full h-full outline-none "
                  {...register('face_to_face')}
                >
                  {meetingoptions.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="font-pre font-normal text-[18px] leading-[40px]">{profileData.face_to_face ? '대면' : '비대면'}</p>
            )}

        </div>
        <div className="flex flex-row pc:flex-col md:flex-row align-middle pc:pt-6 pt-5 items-center pc:items-start md:items-center ">
          <h2 className="min-w-[102px] pr-[20px] font-pre font-bold text-[18px] leading-[50px] align-middle ">
            작업 가능 기간
          </h2>
          {currentUser && modifyState ? (
            <CustomCalinder
              start={startDate}
              end={endDate}
              setStart={setStartDate}
              setEnd={setEndDate}
              isRange
              customCss="flex flex-1 min-w-[272px] w-full h-[52px] min-w-max border-[2px] rounded-lg border-[#DFE1E5] items-center pl-[10px] pr-[14px]"
            />
          )
            : (
              <p className="font-pre font-normal text-[18px] leading-[50px] ">{`${startDate} ~ ${endDate}`}</p>
            )}
        </div>
        {/* <div className="flex flex-row pt-10
        pc:flex-col md:flex-row pc:pt-6 sm:mr-10 items-start"> */}
        <div className="flex pt-6  pc:pt-[28px] flex-wrap">
          <h2 className="min-w-[102px] pr-[20px] font-pre font-bold pc:text-[18px] leading-[40px] align-middle">
            작업 가능 시간
          </h2>
          <div>
            {currentUser && modifyState
              ? (
                <div
                  className="border-2 mr-[8px]  min-w-[272px] w-full h-12 border-[#EEEEEE] rounded-md  font-pre font-normal text-[18px] leading-[21px] pl-[10px]"
                  style={{ backgroundImage: 'url(./dropdown.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '92% 50%' }}
                >
                  <select
                    defaultValue={workDay}
                    className="border-0 bg-transparent appearance-none w-full h-full outline-none "
                    {...register('workDay')}
                  >
                    {workdayOptions.map((item) => (
                      <option value={item} key={item}>{item}</option>
                    ))}
                  </select>
                  {/* {timeOptions.map((item) => (
                    <label key={item} htmlFor={item} className="mt-[20px] peer border-2
                    border-[#CCCCC] bg-[#CCCCC] rounded-[24px] text-#6457FA px-[12px]
                    py-[6px] mr-[8px] mb-[8px] font-pre text-[14px] leading-[16.9x]">
                      <input {...register('time')} type="radio" onChange={() => setTime(item)}
                       checked={item === time} value={item} id={time}
                       className="checked:bg-[#6457FA] peer-checked:bg-#6457fA" />
                      {item}
                    </label>
                  ))} */}

                </div>
              ) : (
                <p className="font-pre font-normal text-[18px] leading-[40px]">{`${workDay === 'null' ? '' : workDay}`}</p>
              )}
          </div>
          {/* <div>
            {currentUser && modifyState && (
              <div>
                {timeOptions.map((item) => (
                  <label key={item} htmlFor={item} className="mt-[20px]
                  peer border-2 border-[#CCCCC] bg-[#CCCCC] rounded-[24px]
                  text-#6457FA px-[12px] py-[6px] mr-[8px] mb-[8px] font-pre
                  text-[14px] leading-[16.9x]">
                    <input {...register('time')} type="radio" onChange={
                      () => setTime(item)}
                      checked={item === time}
                      value={item}
                      id={time}
                      className="checked:bg-[#6457FA] peer-checked:bg-#6457fA" />
                    {item}
                  </label>
                ))}
              </div>
            ) }
          </div> */}
        </div>
      </div>
      <div className="flex justify-center">
        {currentUser && modifyState && (
        <button
          type="submit"
          className="w-[290px] h-[72px] rounded-[15px] mt-[40px] font-pre font-normal
      text-[28px] leading-[19px] bg-[#6457FA] text-white
     "
        >
          저장하기
        </button>
        )}
      </div>
    </form>
  );
}
