/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import postApi from '@/Api/postApi';

import CustomCalinder from '@/Components/CustomCalinder';
import GlobalIcon from '@/Components/GlobalIcon';
import TagBox from '@/Components/TagBox';
import TagSearch from '@/Components/TagSearch';
import TextModal from '@/Components/TextModal';

import { ITag } from '@/TypeInterface/postType';

import { dateFormat } from '@/util/util';

import usePostRecruitMutation from './hooks/usePostRecruitMutation';
import CreateHeader from './Presentation/CreateHeader';

export default function ProjectCreateContainer() {
  const [hashTag, setHashTag] = useState<Array<ITag>>([]);
  const [imgName, setImageName] = useState<File>();
  const [doubleSubmitFlag, setDoubleSubmitFlag] = useState(false);
  const Today = new Date();
  const [startDate, setStartDate] = useState<string>(dateFormat(Today));
  const [endDate, setEndDate] = useState<string>(dateFormat(Today));
  const [dueDate, setDueDate] = useState<string>(dateFormat(Today));
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalClose = () => { setModalOpen(!modalOpen); };
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const modalClose2 = () => {
    setModalOpen2(!modalOpen2);
    setDoubleSubmitFlag(false);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const postRecruitMustation = usePostRecruitMutation(
    hashTag,
    startDate,
    endDate,
    dueDate,
    imgName,
    setDoubleSubmitFlag,
    modalClose,
    modalClose2,
    setError,

  );

  const { isSuccess, data: tagList } = useQuery('tagList', postApi.getTag);

  const fileGetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filename = e.target.files;
    if (filename) {
      const abc = filename[0];
      setImageName(abc);
    }
  };

  const hadleCancle = () => {
    window.history.back();
  };
  function doubleSubmitCheck() {
    if (doubleSubmitFlag) {
      return doubleSubmitFlag;
    }
    setDoubleSubmitFlag(true);
    return false;
  }
  const onSubmit = (datas: FieldValues) => {
    if (doubleSubmitCheck()) return;
    postRecruitMustation.mutate(datas);
    // if (hashTag.length > 0) {

    // } else {
    //   modalClose2();
    // }
  };

  return (
    <>
      {modalOpen && <TextModal messages={['게시글 작성이 되었습니다.']} modalClose={modalClose} replace="/" />}
      {modalOpen2 && (
      <TextModal
        messages={[error]}
        modalClose={modalClose2}
      />
      )}
      <div>
        <CreateHeader />
        <div className="max-w-6xl mx-auto px-[20px] sm:px-6 lg:px-8 pt-5 sm:pt-10 bg-white sm:mt-10 mb-[145px]">
          {/* 프로젝트만들기 상단 */}
          <form className="mt-5 sm:mt-15" onSubmit={handleSubmit(onSubmit)}>
            <p className="sm:ml-16 font-extrabold text-xl sm:text-[36px] sm:text-[#6457FA]">
              프로젝트 만들기
            </p>
            <div className="sm:ml-16 pt-[20px] sm:pt-20">
              <div className="sm:flex w-full items-center py-[20px]">
                <p className="font-extrabold text-[13px] sm:text-lg pb-[12px] sm:py-3 w-32 sm:w-56 self-center  min-w-max">제목</p>
                <div className="flex flex-1 w-full border-[2px] h-[45px] sm:h-[60px]  border-[#DFE1E5] my-1 rounded-[8px] sm:rounded-xl overflow-hidden max-w-[600px]">
                  <Controller
                    control={control}
                    name="title"
                    rules={{
                      maxLength: 20,
                      required: true,
                    }}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="flex-1 w-full text-[14px] pl-[16px] py-[14px]
                          sm:text-[20px] sm:pl-3 sm:py-3 rounded-xl outline-none
                          outline-[#DFE1E5] bg-white font-inter
                          box-border resize-none"
                        onChange={(e) => {
                          const { value } = e.target;
                          if (value.length > 20) return;
                          field.onChange(value.substring(0, 20));
                        }}
                        placeholder="000 프로젝트에 함께할 팀원을 모집합니다."
                      />
                    )}
                  />
                </div>
              </div>
              {errors.title && errors.title.type && errors.title?.type.toString() === 'required' && <div className="items-end justify-center flex"><span className="text-[#ff0000]">제목을 입력 해 주세요.</span></div>}
              <div className="sm:flex min-w-min sm:w-3/4  py-[20px]">
                <p className="font-extrabold text-[13px] sm:text-lg pb-[12px] sm:py-3 w-32 sm:w-56 self-center  min-w-max">프로젝트 기간</p>
                <CustomCalinder
                  start={startDate}
                  end={endDate}
                  setStart={setStartDate}
                  setEnd={setEndDate}
                  isRange
                />

              </div>
              <div className="sm:flex min-w-min sm:w-3/4 py-[20px] ">
                <p className=" font-extrabold text-[13px]  sm:text-lg py-3 w-32 sm:w-56 self-center">모집 마감일</p>

                <CustomCalinder
                  start={dueDate}
                  setStart={setDueDate}
                />
              </div>
              <div className="sm:flex min-w-min sm:w-2/3 pb-[20px]">
                <p className=" font-extrabold text-[13px] sm:text-lg py-[20px] sm:py-9 w-32 sm:w-56">모집 포지션 </p>
                <div className="flex-1 w-full sm:py-2 sm:my-2">
                  <div className="flex items-start">
                    <div className="text-[13px] sm:text-[18px] pt-[20px] sm:pt-7 font-bold mr-[22px]">
                      <p className="whitespace-nowrap">직군</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex w-full justify-between box-border min-w-max items-center ">
                        <TagBox tag="2" padding="text-[12px] sm:text-[18px] px-[8px] sm:px-[12px] py-[6px] font-bold" />
                        <div className="flex items-center ">
                          <Controller
                            control={control}
                            name="developer"
                            rules={{
                              maxLength: 2,
                              required: true,
                            }}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="number"
                                min={0}
                                max={10}
                                className="text-right sm:text-[18px] w-[60px] sm:w-[85px] h-[45px] sm:h-[60px] pr-2 py-2 my-2 border-[2px] rounded-xl border-[#DFE1E5] box-border text-[14px]"
                                onChange={(e) => {
                                  const { value } = e.target;
                                  if (value === '/[0-9]/') return;
                                  field.onChange(
                                    Number(value) > 10
                                      ? 10
                                      : Number(value) < 0
                                        ? 0
                                        : Number(value)
                                          ? value
                                          : 0,
                                  );
                                }}
                              />
                            )}
                          />
                          <span className="text-[14px] ml-1 sm:text-[18px] font-normal self-end mb-2 sm:self-center sm:mb-0">명</span>

                        </div>
                      </div>
                      {errors.developer && <span className="text-[#ff0000] pl-24">필수 입력 값 입니다. 모집 인원이 없는 경우 0 을 입력해 주세요.</span>}
                      <div className="flex w-full box-border justify-between min-w-max items-center">
                        <TagBox tag="1" padding="text-[12px] sm:text-[18px] px-[8px] sm:px-[12px] py-[6px] font-bold" />
                        <div className="flex items-center ml-[16px] sm:ml-[40px]">
                          <Controller
                            control={control}
                            name="designer"
                            rules={{
                              maxLength: 2,
                              required: true,
                            }}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="number"
                                min={0}
                                max={10}
                                className="text-right sm:text-[18px] w-[60px] sm:w-[85px] h-[45px] sm:h-[60px] pr-2 py-2 my-2 border-[2px] rounded-xl border-[#DFE1E5] box-border text-[14px]"
                                onChange={(e) => {
                                  const { value } = e.target;
                                  if (value === '/[0-9]/') return;
                                  field.onChange(
                                    Number(value) > 10
                                      ? 10
                                      : Number(value) < 0
                                        ? 0
                                        : Number(value)
                                          ? value
                                          : 0,
                                  );
                                }}
                              />
                            )}
                          />
                          <span className="text-[14px] ml-1 sm:text-[18px] font-normal self-end mb-2 sm:self-center sm:mb-0">명</span>
                        </div>
                      </div>
                      {errors.designer && <div><span className="text-[#ff0000] pl-24">필수 입력 값 입니다. 모집 인원이 없는 경우 0 을 입력해 주세요.</span></div>}
                      <div className="flex w-full box-border justify-between min-w-max items-center">
                        <TagBox tag="3" padding="text-[12px] sm:text-[18px] px-[8px] sm:px-[12px] py-[6px] font-bold" />
                        <div className="flex items-center">
                          <Controller
                            control={control}
                            name="pmanager"
                            rules={{
                              maxLength: 2,
                              required: true,
                            }}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="number"
                                min={0}
                                max={10}
                                className="text-right sm:text-[18px] w-[60px] sm:w-[85px] h-[45px] sm:h-[60px] pr-2 py-2 my-2 border-[2px] rounded-xl border-[#DFE1E5] box-border text-[14px]"
                                onChange={(e) => {
                                  const { value } = e.target;
                                  if (value === '/[0-9]/') return;
                                  field.onChange(
                                    Number(value) > 10
                                      ? 10
                                      : Number(value) < 0
                                        ? 0
                                        : Number(value)
                                          ? value
                                          : 0,
                                  );
                                }}
                              />
                            )}
                          />
                          <span className="text-[14px] ml-1 sm:text-[18px] font-normal self-end mb-2 sm:self-center sm:mb-0">명</span>

                        </div>
                      </div>
                      {errors.pmanager && <span className="text-[#ff0000] pl-24">필수 입력 값 입니다. 모집 인원이 없는 경우 0 을 입력해 주세요.</span>}
                    </div>
                  </div>
                  {/* 경력 */}

                </div>
              </div>
              <div className="sm:flex min-w-min sm:w-3/4 py-[20px]">
                <p className=" font-extrabold text-[13px] sm:text-lg py-3 w-32 sm:w-56 self-center">참고이미지</p>
                {imgName?.name && (
                <div className="flex px-[21.5px] items-center max-w-min text-[13px] sm:text-base py-[13px] my-2  border-[2px] rounded-[8px] sm:rounded-2xl border-[#DFE1E5] bg-[#F2F2F2] font-normal mr-3">
                  <div className="text-[18px] whitespace-nowrap">{imgName?.name.length > 20 ? `${imgName?.name.substring(0, 20)}...${imgName?.name.substring(Number(imgName?.name.length) - 3, imgName?.name.length)}` : imgName?.name}</div>
                </div>
                )}
                <div className="flex pl-[21.5px] pr-[20px] flex-1 w-[183px] sm:w-full items-center max-w-[235px] min-w-max text-xs sm:text-base py-[13px] my-2  border-[2px] rounded-[8px] sm:rounded-2xl border-[#6457FA]">
                  <label className="sm:whitespace-nowrap flex items-center cursor-pointer" htmlFor="imageFile">
                    <GlobalIcon.FileIcon
                      width={
                    window.innerWidth > 768
                      ? 23 : 18
                    }
                      height={
                      window.innerWidth > 768
                        ? 12 : 9
                    }
                    />
                    <span className="flex font-inter text-[#6457FA] text-[14px] sm:text-[18px] ml-[8.5px] ">

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
              <p className="font-bold text-[18px] sm:text-[20px] sm:ml-16">프로젝트 상세내용</p>
              <div className="sm:pl-16 pt-5 ">
                <Controller
                  control={control}
                  name="body"
                  rules={{
                    required: true,
                    maxLength: 200,
                  }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      onChange={(e) => {
                        const { value } = e.target;
                        if (value.length > 200) return;
                        field.onChange(value.substring(0, 200));
                      }}
                      className="w-full h-52 text-[18px] sm:h-96 p-4 border-[2px] bg-white border-[#DFE1E5]  resize-none rounded-lg"
                    />
                  )}
                />

              </div>
              {errors.body && errors.body.type && errors.body.type.toString() === 'maxLength' && <span className="text-[#ff0000] pl-16 pt-5">글자수는 200글자 미만으로 해주세요.</span>}
              {errors.body && errors.body.type && errors.body.type.toString() === 'required' && <span className="text-[#ff0000] pl-16 pt-5">상세내용을 입력 해 주세요.</span>}
              <div className="sm:pl-16 pt-[8px]">
                {window.innerWidth <= 768 && <p className=" font-extrabold text-[13px] sm:text-lg py-[20px] sm:py-9 w-32 sm:w-56">해시태그 </p>}

                {isSuccess && <TagSearch tagData={tagList.data.slice(49)} selected={hashTag} setHashTag={setHashTag} placeholder="해시태그를 입력해 주세요" />}

              </div>

            </div>
            <div className="m-auto max-w-2xl pl-16 pt-5 flex justify-center mt-32  mb-10">
              <button type="button" onClick={hadleCancle} className="flex w-60 border-[2px] text-[#6457FA] border-[#6457FA] py-3 rounded-xl justify-center bg-white font-semibold cursor-pointer  mr-2">취소하기</button>
              <input type="submit" className={`flex w-60 border-[2px] py-3 rounded-xl justify-center  text-white font-semibold ${doubleSubmitFlag ? 'bg-[#cccccc] border-[#cccccc]' : 'bg-[#6457FA] border-[#6457FA]  cursor-pointer'} ml-2"`} value={`${doubleSubmitFlag ? '프로젝트 생성중..' : '프로젝트 생성하기'}`} disabled={doubleSubmitFlag} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
