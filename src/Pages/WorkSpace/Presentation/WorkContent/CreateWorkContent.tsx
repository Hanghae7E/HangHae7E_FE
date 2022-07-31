/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { SetStateAction, useEffect, useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import CustomCalinder from '../../../../Components/CustomCalinder';
import { dateFormat, doubleSubmitCheck } from '../../../../util/util';

export default function CreateWorkContent({
  setPage,
} : {
    setPage :React.Dispatch<SetStateAction<string>>
  }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const Today = new Date();
  const [dueDate, setDueDate] = useState<string>(dateFormat(Today));
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [doubleSubmitFlag, setDoubleSubmitFlag] = useState(false);
  const onSubmit = (datas: FieldValues) => {
    if (doubleSubmitCheck({ doubleSubmitFlag, setDoubleSubmitFlag })) return;
    console.log(datas);
    // if (hashTag.length > 0) {

    // } else {
    //   modalClose2();
    // }
  };

  return (
    <article className="relative max-w-[1162px] px-12 flex justify-center w-full pt-20 min-h-fit mx-auto">
      {/* <button type="button" className="px-[12px] py-[8px]
       bg-slate-400 rounded-[8px] text-white absolute top-5 right-6"
       onClick={() => setPage('main')}>메인으로</button> */}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-extrabold text-[36px] mb-[60px]">해야 할일 작성하기</h2>
        <div className="flex items-center h-[60px] w-full">
          <h4 className="w-full max-w-[206px] text-[20px] font-bold">제목</h4>
          <input {...register('title')} className="w-full max-w-[600px] h-[60px] border-[2px] border-[#DFE1E5] rounded-[8px] pl-[16px] text-[18px] font-normal" placeholder="제목을 입력해 주세요" />
        </div>
        <div className="flex items-center h-[60px] w-full my-6">
          <h4 className="w-full max-w-[206px] text-[20px] font-bold">완료예정일</h4>
          <CustomCalinder
            start={dueDate}
            setStart={setDueDate}
          />
        </div>
        <div className="flex items-center h-[60px] w-full mb-[24px]">
          <h4 className="w-full max-w-[206px] text-[20px] font-bold">담당자</h4>
          <div
            className="border-2 mr-[8px] w-[272px] h-12 border-[#DFE1E5] rounded-md pl-3 font-pre font-normal text-[18px] leading-[21px]"
            style={{ backgroundImage: 'url(./dropdown.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: '92% 50%' }}
          >
            <select {...register('Responsibility')} name="ageGroup" className="border-0 bg-transparent appearance-none w-full h-full outline-none ">
              <option value="0">룰루랄라조로</option>
              <option value="1">닉네임</option>
              <option value="2">닉네임</option>
              <option value="3">닉네임</option>
            </select>
          </div>
        </div>
        <p className="font-bold text-[18px] sm:text-[20px]">프로젝트 상세내용</p>
        <div className="pt-5 ">
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
        <div className="m-auto max-w-2xl pl-16 pt-16 flex justify-center mb-40">
          <button type="button" onClick={() => setPage('main')} className="flex w-60 border-[2px] text-[#6457FA] border-[#6457FA] py-3 rounded-xl justify-center bg-white font-semibold cursor-pointer  mr-2">취소하기</button>
          <input type="submit" className={`flex w-60 border-[2px] py-3 rounded-xl justify-center  text-white font-semibold ${doubleSubmitFlag ? 'bg-[#cccccc] border-[#cccccc]' : 'bg-[#6457FA] border-[#6457FA]  cursor-pointer'} ml-2"`} value={`${doubleSubmitFlag ? '프로젝트 생성중..' : '프로젝트 생성하기'}`} disabled={doubleSubmitFlag} />
        </div>
      </form>
    </article>
  );
}
