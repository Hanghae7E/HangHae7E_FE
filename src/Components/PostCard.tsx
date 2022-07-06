/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { IRecruitPost } from '../TypeInterface/postType';
import PositionTag from './PositionTag';

export default function PostCard({ data }: { data: IRecruitPost }) {
  const nav = useNavigate();

  const goCardDetail = () => {
    nav('/detail');
  };
  return (
    <div className=" min-w-full md:min-w-min w-1/3 h-min min-h-min my-3 text box-border cursor-pointer" onClick={goCardDetail} onKeyPress={goCardDetail}>
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
              <img className="ml-5 w-20 h-20 rounded-full object-fill" src="/profiledefault.svg" alt="project" />
              <div className="ml-5">
                <div className="justify-start mb-2">
                  <p className="font-extrabold text-lg">{data.username}</p>

                </div>
                <div>
                  <p className="font-semibold text-xs text-black">{data.introduce}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray mx-8" />
          <div className=" m-0 p-2">
            <h4 className="mt-4 mb-3 ml-4 text-2xl md:text-base font-extrabold">{data.title}</h4>
            <div className="mx-3 md:mr-7 flex flex-wrap box-border my-1 mb-3">
              {data.tagList.map((pos, i) => <div key={pos + String(i)} className="px-2 py-1 box-border bg-tag-bg text-xl md:text-xs font-semibold rounded-full mx-2 md:mx-1 my-1">{pos}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
