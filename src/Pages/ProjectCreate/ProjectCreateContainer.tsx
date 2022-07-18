/* eslint-disable react/jsx-props-no-spreading */
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import CreateFooter from './Presentation/CreateFooter';
import CreateHeader from './Presentation/CreateHeader';
import { dateFormat } from '../../util/util';
import postApi from '../../Api/postApi';
import { ITag } from '../../TypeInterface/postType';
import TagBox from '../../Components/TagBox';
import CustomCalinder from '../../Components/CustomCalinder';
import GlobalIcon from '../../Components/GlobalIcon';
import TagSearch from '../../Components/TagSearch';
import userGetUserInfo from '../../Hooks/userGetUserInfo';

export default function ProjectCreateContainer() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [hashTag, setHashTag] = useState<Array<ITag>>([]);
  const [hashTagId, setHashTagId] = useState<string>();
  const [imgName, setImageName] = useState<File>();

  const userInfo = userGetUserInfo();

  const { isSuccess, data } = useQuery('tagList', postApi.getTag);
  const nav = useNavigate();
  const fileGetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filename = e.target.files;
    if (filename) {
      const abc = filename[0];
      setImageName(abc);
    }
  };

  const Today = new Date();
  const [startDate, setStartDate] = useState<string>(dateFormat(Today));
  const [endDate, setEndDate] = useState<string>(dateFormat(Today));
  const [dueDate, setDueDate] = useState<string>(dateFormat(Today));

  const hadleCancle = () => {
    window.history.back();
  };

  const postRecruit = useMutation((form: FieldValues) => postApi.postRecruitPost(
    form,
    hashTagId,
    startDate,
    endDate,
    dueDate,
    imgName,
  ), {
    onSuccess: () => {
      nav('/');
    },
  });
  const onSubmit = (datas: FieldValues) => {
    postRecruit.mutate(datas);
  };
  return (
    <>
      <CreateHeader userInfo={userInfo?.data?.data} />
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-10 bg-white sm:mt-10 mb-8">
        {/* 프로젝트만들기 상단 */}
        <form className="mt-5 sm:mt-15" onSubmit={handleSubmit(onSubmit)}>
          <p className="ml-16 font-extrabold text-xl sm:text-[36px] text-[#6457FA]">
            프로젝트 만들기
          </p>
          <div className="ml-16 pt-5 sm:pt-20">
            <div className="flex w-full items-center">
              <p className="font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center  min-w-max">제목</p>
              <div className="flex flex-1 w-full border-[2px] h-[60px]  border-[#DFE1E5] my-1 rounded-xl overflow-hidden max-w-[600px]">
                <input
                  className="flex-1 w-full
              sm:text-[20px] pl-3 py-3 rounded-xl outline-none
              outline-[#DFE1E5] bg-white font-inter
              box-border resize-none"
                  placeholder="000 프로젝트에 함께할 팀원을 모집합니다."
                  {...register('title', { required: true })}
                />
              </div>
              {errors.title && <span className="text-[#ff0000]">필수 입력 값 입니다.</span>}
            </div>

            <div className="flex min-w-min sm:w-3/4">
              <p className="font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center ">프로젝트 기간</p>
              <CustomCalinder
                start={startDate}
                end={endDate}
                setStart={setStartDate}
                setEnd={setEndDate}
                isRange
              />

            </div>
            <div className="flex min-w-min sm:w-3/4">
              <p className=" font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center">모집 마감일</p>

              <CustomCalinder
                start={dueDate}
                setStart={setDueDate}
              />
            </div>
            <div className="flex min-w-min sm:w-2/3">
              <p className=" font-extrabold text-xs sm:text-lg py-9 w-32 sm:w-56">필요한 포지션 </p>
              <div className="flex-1 w-full py-2 my-2">
                <div className="flex items-start">
                  <div className="text-xs sm:text-[18px] pt-7 font-bold mr-[22px]">
                    <p className="whitespace-nowrap">직군</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex w-full justify-between box-border min-w-max items-center ">
                      <TagBox tag="2" padding="text-[18px] px-[12px] py-[6px] font-bold" />
                      <div className="flex items-center ">
                        <Controller
                          control={control}
                          name="developer"
                          rules={{ maxLength: 2 }}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="number"
                              className="text-right sm:text-[18px] w-[85px] h-[60px] pr-2 py-2 my-2 border-[2px] rounded-xl border-[#DFE1E5] box-border text-xs"
                              onChange={(e) => field.onChange(e.target.value.substring(0, 2))}
                            />
                          )}
                        />
                        <span className="text-xs ml-1 sm:text-[18px] font-normal">명</span>
                      </div>
                    </div>
                    <div className="flex w-full box-border justify-between min-w-max items-center">
                      <TagBox tag="1" padding="text-[18px] px-[12px] py-[6px]  font-bold" />
                      <div className="flex items-center ml-[40px]">
                        <Controller
                          control={control}
                          name="designer"
                          rules={{ maxLength: 2 }}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="number"
                              className="text-right sm:text-[18px] text w-[85px] h-[60px] pr-2 py-2 my-2 border-[2px] rounded-xl border-[#DFE1E5] box-border text-xs "
                              onChange={(e) => field.onChange(e.target.value.substring(0, 2))}
                            />
                          )}
                        />
                        <span className="text-xs ml-1 sm:text-[18px] font-normal">명</span>
                      </div>
                    </div>
                    <div className="flex w-full box-border justify-between min-w-max items-center">
                      <TagBox tag="3" padding="text-[18px] px-[12px] py-[6px]  font-bold" />
                      <div className="flex items-center">
                        <Controller
                          control={control}
                          name="pmaster"
                          rules={{ maxLength: 2 }}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="number"
                              className="text-right sm:text-[18px] w-[85px] h-[60px] pr-2 py-2 my-2 border-[2px] rounded-xl border-[#DFE1E5] box-border text-xs "
                              onChange={(e) => field.onChange(e.target.value.substring(0, 2))}
                            />
                          )}
                        />
                        <span className="text-xs ml-1 sm:text-[18px] font-normal">명</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 경력 */}

              </div>
            </div>
            <div className="flex min-w-min sm:w-3/4">
              <p className=" font-extrabold text-xs sm:text-lg py-3 w-32 sm:w-56 self-center">참고이미지</p>
              {imgName?.name && (
              <div className="flex px-[21.5px] items-center max-w-min text-xs sm:text-base py-[13px] my-2  border-[2px] rounded-2xl border-[#DFE1E5] bg-[#F2F2F2] font-normal mr-3">
                <div className="text-[18px] whitespace-nowrap">{imgName?.name.length > 20 ? `${imgName?.name.substring(0, 20)}...${imgName?.name.substring(Number(imgName?.name.length) - 3, imgName?.name.length)}` : imgName?.name}</div>
              </div>
              )}
              <div className="flex pl-[21.5px] pr-[20px] flex-1 w-full items-center max-w-[235px] min-w-max text-xs sm:text-base py-[13px] my-2  border-[2px] rounded-2xl border-[#6457FA]">
                <label className="sm:whitespace-nowrap flex items-center cursor-pointer" htmlFor="imageFile">
                  <GlobalIcon.FileIcon />
                  <span className="flex font-inter text-[#6457FA] text-[18px] ml-[8.5px] ">

                    {imgName ? '파일변경(최대 2MB)' : '파일첨부(최대 2MB)'}
                  </span>
                </label>
                <input
                  className="hidden"
                  id="imageFile"
                  type="file"
                  accept="image/*"
                  {...register('image')}
                  onChange={fileGetChange}
                />
              </div>

            </div>
          </div>
          <div className="mx-auto w-1/2  overflow-hidden pb-5 sm:pb-20" />

          {/* 프로젝트 상세내용 */}
          <div>
            <p className="font-bold text-sm sm:text-[20px] ml-16">프로젝트 상세내용</p>
            <div className="pl-16 pt-5 ">
              <Controller
                control={control}
                name="body"
                render={({ field }) => (
                  <textarea {...field} className="w-full h-52 text-[18px] sm:h-96 p-4 border-[2px] bg-white border-[#DFE1E5]  resize-none rounded-lg" />
                )}
              />

            </div>
            <div className="pl-16 pt-[8px]">

              {isSuccess && <TagSearch tagData={data.data} selected={hashTag} setHashTagId={setHashTagId} setHashTag={setHashTag} placeholder="해시태그를 입력해 주세요" />}

            </div>

          </div>
          <div className="m-auto max-w-2xl pl-16 pt-5 flex justify-center mt-32  mb-10">
            <button type="button" onClick={hadleCancle} className="flex w-60 border-[2px] text-[#6457FA] border-[#6457FA] py-3 rounded-xl justify-center bg-white font-semibold cursor-pointer  mr-2">취소하기</button>
            <input type="submit" className="flex w-60 border-[2px] border-[#6457FA] py-3 rounded-xl justify-center bg-[#6457FA] text-white font-semibold cursor-pointer ml-2" value="프로젝트 생성하기" />
          </div>
        </form>
      </div>
      <CreateFooter />
    </>
  );
}
