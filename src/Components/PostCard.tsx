/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { IRecruitPost } from '../TypeInterface/postType';
import PositionTag from './PositionTag';
import SearchTag from './SearchTag';

export default function PostCard({ data }: { data: IRecruitPost }) {
  const nav = useNavigate();

  const goCardDetail = () => {
    nav('/detail');
  };

  return (

    <div className=" min-w-full lg:min-w-min w-1/3 h-min min-h-min my-3 text box-border cursor-pointer" onClick={goCardDetail} onKeyPress={goCardDetail}>
      <div className="p-3 hover:p-1 box-border ">
        <div className="flex items-center">
          {/* <span className="text-xs text-gray-400">
            {`${data.projectStartTime} `}
            ~
            {` ${data.projectEndTime}`}
          </span> */}
          <PositionTag userPosition={data.userPosition} />
          <PositionTag userPosition={data.userPosition} />
          <PositionTag userPosition={data.userPosition} />
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
            <div className="mx-3 md:mr-7 flex flex-nowrap box-border my-1 mb-3">
              {data.tagList.map((pos, i) => <SearchTag key={`${pos + i}`} tag={pos} />)}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
