/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { IRecruitPost, ITag } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function PostCard({ data }: { data: IRecruitPost }) {
  const nav = useNavigate();
  const goCardDetail = () => {
    nav(`/detail/${data.postId}`);
  };
  // console.log(data);
  return (
    <div className="min-w-full relative md:min-w-min min-h-min h-[442px] w-[410px] mb-[37px] box-border cursor-pointer" onClick={goCardDetail} onKeyPress={goCardDetail}>
      <div className="box-border ">
        <div className="bg-card-bg rounded-[24px] border-[2px] border-[#EEEEEE] h-[344px] overflow-hidden box-border">
          <img className="w-full bg-white h-[240px] max-h-[240px] object-fit m-0" src={data.projectImage ? data.projectImage : '/defaulimg.svg'} alt="project" />
          <div className="flex absolute flex-1 font-bold h-[46px] top-[16px] right-[16px]">

            {data.requiredDevelopers > -1 && <TagBox tag="2" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
            {data.requiredDesigners > 0 && <TagBox tag="1" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
            {data.requiredProjectManagers > 0 && <TagBox tag="3" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
          </div>
          <div className="h-[245px]">
            <div className="flex py-3">
              <div className="flex items-center mb-1 py-2">
                <img className="ml-5 w-[64px] h-[64px] rounded-full object-fill" src={data.authorImage ? data.authorImage : '/profiledefault.svg'} alt="project" />
                <div className="ml-[16px]">
                  <div className="justify-start">
                    <p className="font-bold text-[20px]">{data.username}</p>
                  </div>
                  <div>
                    <p className="font-normal text-[16px] text-black">{`test${data.introduce}`}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <h4 className="my-[16px] text-2xl md:text-[24px] font-bold">{data.title}</h4>
        <div className="flex flex-nowrap box-border mt-[20px] font-medium">
          {data.tags && data.tags.map((pos:ITag, i:number) => i < 3 && <TagBox key={pos.tagId} tag={pos.body} padding="text-[14px] px-[12px] py-[8px]" margin="mr-[8px]" />)}
        </div>
      </div>
    </div>
  );
}
