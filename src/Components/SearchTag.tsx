export default function SearchTag({ tag }: {tag:string}) {
  return <div className="box-border overflow-x-hidden text-ellipsis hover:relative hover:max-w-max whitespace-nowrap rounded-full max-w-[50px] text-[10px] py-1.5 px-2 mx-1 font-semibold bg-tag-bg my-1">{tag}</div>;
}
