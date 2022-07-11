import { useState } from 'react';
import CreateBody from './Presentation/CreateBody';
import CreateFooter from './Presentation/CreateFooter';
import CreateHeader from './Presentation/CreateHeader';

export default function ProjectCreateContainer() {
  const [career, setCarrer] = useState('신입/경력(연차)');
  const [hashTag, setHashTag] = useState<Array<string>>([]);
  const [imgName, setImageName] = useState<File>();
  return (
    <>
      <CreateHeader />
      <CreateBody
        career={career}
        setCarrer={setCarrer}
        hashTag={hashTag}
        setHashTag={setHashTag}
        imgName={imgName}
        setImageName={setImageName}
      />
      <div className="m-auto max-w-2xl pl-16 pt-5 flex justify-center mt-10  mb-10">
        <div className="flex w-60 border-[2px] border-developer py-3 rounded-xl justify-center bg-white font-semibold cursor-pointer hover:bg-black hover:text-white mr-2">취소하기</div>
        <div className="flex w-60 border-[2px] border-developer py-3 rounded-xl justify-center bg-developer text-white font-semibold cursor-pointer hover:bg-black hover:text-white ml-2">프로젝트 생성하기</div>
      </div>
      <CreateFooter />
    </>

  );
}
