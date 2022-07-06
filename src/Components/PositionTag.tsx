export default function PositionTag({ userPosition }: {userPosition:string}) {
  const position = (pos: string) => {
    switch (pos) {
      case '디자이너':
        return 'bg-designer px-4 py-2 text-xs font-semibold rounded-full';
      case '개발자':
        return 'bg-developer text-white px-4 py-2 text-xs font-semibold rounded-full';
      case '기획자':
        return 'bg-pmaster px-4 py-2 text-xs font-semibold rounded-full';
      default:
        return 'bg-designer px-4 py-2 text-xs font-semibold rounded-full';
    }
  };
  return <div className={`${position(userPosition)} mb-4 mx-0.5`}>{userPosition}</div>;
}
