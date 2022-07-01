import { IRecruitPost } from '../TypeInterface/postType';

export default function PostCard({ data }: { data: IRecruitPost }) {
  const position = (pos: string) => {
    switch (pos) {
      case '디자이너':
        return 'border bg-red-300 p-1.5 text-xs font-semibold';
      case '개발자':
        return 'border bg-gray-300 p-1.5 text-xs font-semibold';
      case '기획자':
        return 'border bg-blue-300 p-1.5 text-xs font-semibold';
      default:
        return 'border bg-red-300 p-1.5 text-xs font-semibold';
    }
  };
  return (
    <div className="min-w-full sm:min-w-min w-1/3 h-min min-h-min p-2 my-3 box-border  cursor-pointer">
      <div className="p-3 hover:p-1 box-border">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">
            {`${data.projectStartTime} `}
            ~
            {` ${data.projectEndTime}`}
          </span>
          <div className={`${position(data.userPosition)}`}>{data.userPosition}</div>
        </div>
        <div className="flex p-2 bg-blue-300">
          <div className="flex items-center mb-1">
            <img className="w-9 h-9 rounded-3xl object-fill" src="https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg" alt="project" />
            <div className="ml-2">
              <p className="my-0 py-0 font-semibold">{data.username}</p>
              <span className="my-0 py-0 font-light text-xs text-gray-500">{data.introduce}</span>
            </div>
          </div>
        </div>
        <img className="w-full h-4/6 object-fill m-0" src="https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg" alt="project" />
        <div className="bg-blue-100 m-0 p-2">
          <h4 className="my-3 font-semibold">{data.title}</h4>
          <div className="flex flex-wrap box-border my-1">
            {data.tagList.map((pos, i) => <div key={pos + String(i)} className="px-2 box-border border-black border rounded mr-2 my-1">{pos}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
