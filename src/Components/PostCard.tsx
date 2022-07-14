/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { IRecruitPost } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function PostCard({ data }: { data: IRecruitPost }) {
  const nav = useNavigate();

  const goCardDetail = () => {
    nav(`/detail/${data.postId}`);
  };
  return (
    <div className=" min-w-full md:min-w-min min-h-min h-[551px] w-[410px] box-border cursor-pointer" onClick={goCardDetail} onKeyPress={goCardDetail}>
      <div className="box-border ">
        <div className="flex flex-1 font-bold h-[46px]">

          {data.requiredDevelopers > 0 && <TagBox tag="2" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
          {data.requiredDesigners > 0 && <TagBox tag="1" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
          {data.requiredProjectManagers > 0 && <TagBox tag="3" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
        </div>

        <div className="bg-card-bg rounded-[24px] h-[505px] overflow-hidden box-border">
          <img className="w-full bg-white h-[260px] max-h-[260px] object-fit m-0" src={data.projectImage ? data.projectImage : '/defaulimg.svg'} alt="project" />
          <div className="h-[245px]">
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
                {data.tags && data.tags.map((pos, i) => i < 3 && <TagBox key={`${pos + i}`} tag={pos} padding="text-[14px] px-[12px] py-[8px]" margin="mx-[4px]" />)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
