import { ITeam } from '../../../../TypeInterface/workType';
import Member from './Member';

export default function TeamMembers({
  team,
  userStatus,
}:{
  team:Array<ITeam>
  userStatus:Array<number>
}) {
  return (
    <section className="leftSide flex-col w-full min-w-[158px] max-w-[218px] relative">
      <div className="sticky top-0">
        <img alt="프로젝트이미지" className="w-[217px] h-[127px] object-cover rounded-[8px] " src="/defaulimg.svg" />
        <h2 className="TeamMembers mt-10 font-pre font-bold text-[22px]">
          팀원
          {' '}
          {team.length}
        </h2>
        <ul className="mt-6 border-2 rounded-sm border-[#EEEEEE]">
          {team && team.map((info) => (
            <Member
              key={info.userId}
              userInfo={info}
              userStatus={userStatus}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
