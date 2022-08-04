/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';

import { IRecruitPost, ITag } from '../TypeInterface/postType';
import TagBox from './TagBox';

export default function PostCard({ data }: { data: IRecruitPost }) {
  const nav = useNavigate();
  const goCardDetail = () => {
    nav(`/detail/${data.postId}`);
    // nav(`/projectupdate/${data.postId}`, {
    //   state: {
    //     body: 'adsadasds',
    //     imageUrl: 'https://huddle-up-image.s3.ap-northeast-2.amazonaws.com/images/recruitPosts/1.jpg',
    //     postId: 1,
    //     projectEndTime: '2022-08-25',
    //     projectStartTime: '2022-08-09',
    //     recruitDueTime: '2022-07-20',
    //     requiredDesigners: 2,
    //     requiredDevelopers: 2,
    //     requiredProjectManagers: 2,
    //     tags: [
    //       { tagId: 13, body: 'spring' },
    //       { tagId: 27, body: 'react' },
    //       { tagId: 10, body: 'aws' },
    //     ],
    //     title: 'testestestet',
    //     userId: 3,
    //   },
    // });
  };
  // console.log(data);
  return (
    <div className="relative md:h-[471px] w-[47%] lg:w-[410px] mb-[37px] box-border cursor-pointer" onClick={goCardDetail} onKeyPress={goCardDetail}>
      <div className="box-border ">
        <div className="bg-[#F9FBFF] rounded-[8px] md:rounded-[24px] border-[2px] border-[#EEEEEE] md:h-[254px]  lg:h-[344px] overflow-hidden box-border">
          <img className="w-full bg-white h-[72px] md:h-[150px] lg:h-[240px] max-h-[240px] object-cover m-0" src={data.projectImage ? `${data.projectImage}?${Math.random()}` : '/defaulimg.svg'} alt="project" />
          <div className="hidden md:flex absolute flex-1 font-bold h-[46px] top-[16px] right-[16px]">

            {data.requiredDevelopers > 0 && <TagBox tag="2" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
            {data.requiredDesigners > 0 && <TagBox tag="1" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
            {data.requiredProjectManagers > 0 && <TagBox tag="3" padding="text-[12px] px-[12px] py-[6px]" margin="mx-[4px] h-[30px]" />}
          </div>
          <div className="h-[56px] md:h-[245px]">
            <div className="flex  md:py-3">
              <div className="flex items-center mb-1 py-[10px] md:py-2 ">
                <img className="ml-[12px] md:ml-5 w-[35px] h-[35px] md:w-[64px] md:h-[64px] rounded-full object-fill" src={data.authorImage ? `${data.authorImage}?${Math.random()}` : '/profiledefault.svg'} alt="project" />
                <div className="ml-[8px] py-[2px] md:ml-[16px]">
                  <div className="justify-start py-0">
                    <p className="font-bold text-[14px] md:text-[20px]">{data.username}</p>
                  </div>
                  <div>
                    <p className="font-normal text-[10px] md:text-[16px] text-black">{`${data.authorFields.map((v) => v.body).join(' ')}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-[12px] md:mt-[16px] text-[14px] md:text-[24px] font-bold h-[42px] md:h-[58px]">{data.title}</h4>
        <div className="flex flex-nowrap box-border mt-[16px] font-medium">
          {data.tags && data.tags.map((pos: ITag, i: number) => {
            if (window.innerWidth < 768) {
              if (i < 2) {
                return (
                  <TagBox key={`${pos.tagId + i}`} tag={pos.body} padding="text-[12px] md:text-[14px] px-[8px] md:px-[12px] py-[6px] md:py-[8px]" margin="mr-[8px]" />

                );
              }
              return undefined;
            }
            if (i < 4) {
              return (
                <TagBox key={`${pos.tagId + i}`} tag={pos.body} padding="text-[12px] md:text-[14px] px-[8px] md:px-[12px] py-[6px] md:py-[8px]" margin="mr-[8px]" />

              );
            }
            return undefined;
          })}
          {window.innerWidth < 768 && (
          <TagBox
            tag={`+${data.tags.length - 2}`}
            padding="text-[12px] md:text-[14px] px-[8px] md:px-[12px] py-[6px] md:py-[8px] bg-[#333333] text-white"
            margin="mr-[8px]"
          />
          )}

        </div>
      </div>
    </div>
  );
}
