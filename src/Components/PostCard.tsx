/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { IRecruitPost } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function PostCard({ data }: { data: IRecruitPost }) {
  const nav = useNavigate();

  const goCardDetail = () => {
    nav('/detail');
  };

  return (

    <div className=" min-w-full md:min-w-min min-h-min w-[410px] text box-border cursor-pointer" onClick={goCardDetail} onKeyPress={goCardDetail}>
      <div className="p-3 hover:p-1 box-border ">
        <div className="flex items-center font-bold">
          {/* <span className="text-xs text-gray-400">
            {`${data.projectStartTime} `}
            ~
            {` ${data.projectEndTime}`}
          </span> */}
          <TagBox tag={data.userPosition} text={12} py={6} px={12} mb={16} mx={4} />
          <TagBox tag={data.userPosition} text={12} py={6} px={12} mb={16} mx={4} />
          <TagBox tag={data.userPosition} text={12} py={6} px={12} mb={16} mx={4} />
        </div>

        <div className="bg-card-bg rounded-3xl overflow-hidden">
          <img className="w-full h-4/6 object-fill m-0" src="/defaulimg.svg" alt="project" />
          <div className="flex py-3">
            <div className="flex items-center mb-1 py-2">
              <img className="ml-5 w-16 h-26 rounded-full object-fill" src="/profiledefault.svg" alt="project" />
              <div className="ml-3">
                <div className="justify-start">
                  <p className="font-black text-base">{data.username}</p>
                </div>
                <div>
                  <p className="font-black text-[10px] text-black">{data.introduce}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray mx-8" />
          <div className=" m-0 p-2">
            <h4 className="mt-4 mb-3 ml-4 text-2xl md:text-sm font-extrabold">{data.title}</h4>
            <div className="mx-3 md:mr-7 flex flex-nowrap box-border my-[20px] font-medium">
              {data.tagList.map((pos, i) => i < 3 && <TagBox key={`${pos + i}`} tag={pos} text={14} py={8} px={12} mx={4} />)}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
