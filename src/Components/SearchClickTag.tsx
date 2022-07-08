export default function SearchClickTag({ tag }: {tag:string}) {
  return <div className="box-border whitespace-nowrap rounded-full text-[10px] py-1.5 px-2 mx-1 font-semibold bg-tag-bg my-1">{tag}</div>;
}
