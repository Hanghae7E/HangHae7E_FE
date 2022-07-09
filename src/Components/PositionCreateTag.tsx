export default function PositionCreateTag({ userPosition }: {userPosition:string}) {
  const position = (pos: string) => {
    switch (pos) {
      case '디자이너':
        return 'flex bg-designer whitespace-nowrap px-3 py-1.5 text-sm sm:text-lg font-extrabold rounded-full max-h-[40px] self-center';
      case '개발자':
        return 'flex bg-developer whitespace-nowrap text-white px-3 py-1.5 text-sm sm:text-lg font-extrabold rounded-full max-h-[40px] self-center';
      case '기획자':
        return 'flex bg-pmaster whitespace-nowrap px-3 py-1.5 text-sm sm:text-lg font-extrabold rounded-full max-h-[40px] self-center';
      default:
        return 'flex bg-designer whitespace-nowrap px-3 py-1.5 text-sm sm:text-lg font-extrabold rounded-full max-h-[40px] self-center';
    }
  };
  return <div className={`${position(userPosition)} mr-5`}>{userPosition}</div>;
}
