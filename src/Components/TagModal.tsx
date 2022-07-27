// import close from '../img/close.png';
// import GlobalIcon from './GlobalIcon';

// type textModalType={
//     tagList,
//     setSearchTagList,
//     searchTag,
//     modalOpen: React.Dispatch<React.SetStateAction<boolean>>
// }

// export default function TagModal(ModalData: textModalType) {
//   const {
//     tagList, modalOpen, setSearchTagList, searchTag,
//   } = ModalData;
//   const defaultModalCSS = 'w-1/2 h-fit pb-20 bg-white  rounded-[16px]';
//   const tagSelct = 'bg-[#EEEEE]  border-2 border-[#6457FA] rounded-[24px]
// text-black px-[12px] py-[6px] mr-[8px] mt-[8px] font-pre text-[14px] leading-[16.9x] ';
//   const selectedTag = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const clickedValue = e.currentTarget.value;
//   };
//   const savebtn = () => {};
//   return (
//     <div className="modalBackground flex w-full h-full fixed items-center
// justify-center bg-black/30 z-10">
//       <div className={defaultModalCSS}>
//         <button
//           type="button"
//           className="w-[44px]  h-[44px] float-right mr-3 mt-3"
//           onClick={() => (modalOpen(false))}
//         >
//           <img src={close} className="rounded-full" alt="close" />
//         </button>
//         <div className="modalNav flex justify-around items-center py-10" />
//         <div className="modalContents flex-col justify-center text-center">
//           <section className="font-medium w-[1010px] absolute top-16
//  bg-white border-[2px] border-[#DFE1E5] pl-[32px] pt-[32px]">
//             <div className="p-[8px] pb-[12px]">관심 분야를 선택해 주세요. (최대 4개 선택 가능)</div>
//             <div className="flex flex-wrap">
//               {tagList.map((tag) => <TagBox onClick={() => adTag(tag)}
//  key={tag.tagId} hover="hover:border-[#6457FA] hover:box-border"
// selected={searchTagList.includes(tag)} tag={tag.body} padding="text-[14px] py-[8px] px-[12px]"
// margin="ml-[4px] mr-[4px] mb-[16px]" />)}
//             </div>
//             <hr className="text-[#DFE1E5]] h-[2px]" />
//             <div className="flex justify-end">
//               <button onClick={() => setSearchTagList([])} type="button" className=
// "m-[20px] flex justify-center items-center">
//                 <GlobalIcon.Refresh />
//                 <span className="pl-[8px] text-[14px]">초기화</span>

//               </button>
//               <button
//                 onClick={() => {
//                   searchTag(searchTagList).then(async () => {
//                     const data = await refetch();
//                     setOpen(!open);
//                     return data;
//                   });
//                 }}
//                 type="button"
//                 className="flex  border box-border border-developer py-[10px] px-[60px]
// rounded-[16px] justify-center bg-developer text-white text-[20px]
// font-semibold cursor-pointer m-[20px]"
//               >
//                 선택 완료

//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }
export {};
