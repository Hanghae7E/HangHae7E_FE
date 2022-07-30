/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import React from 'react';
import ApplyCancelModal from './ApplyCancelModal';
import useModalState from '../hooks/useModalState';
import DetailIcon from './DetailIcon';
import PositionTag from './PositionTag';
import { Applicant } from '../../../TypeInterface/detailType';

interface Props {
  applicantsAccept?: Applicant[];
  onClickCancle: (userId?: number) => void;
}
function ConfirmedApplicants({ applicantsAccept, onClickCancle }: Props) {
  const {
    open: openModal,
    close: closeModal,
    text: propsUsername,
    userId: propsUserId,
    userImg: propsImg,
    isOpen: isOpenedModal,
  } = useModalState();
  return (
    <div className="w-[300px] border-2 border-solid border-[#EEEEEE] py-[32px] rounded-xl mb-6">
      <h2 className="pl-6 font-bold text-[26px] ">
        확정된 팀원
      </h2>
      <ul className="w-[300px] mt-5">
        {applicantsAccept?.map(({
          userId, username, position, profileImageUrl,
        }) => (
          <li
            key={userId}
            className="flex items-center w-[255px] border-b-[1px] border-b-solid border-b-[#EEEEEE] mx-auto pb-3"
          >
            <img alt="신청자이미지" className="w-[44px] h-[44px] rounded-full " src={profileImageUrl || '/profiledefault.svg'} />
            <h5 className="ml-[8px] w-[94px] text-[18px] font-bold whitespace-nowrap">{username}</h5>
            <div className="flex flex-1 items-center justify-between">
              <PositionTag
                position={position}
                propsClassname="ml-[8px]  text-[10px] py-1 px-3 rounded-3xl"
              />
              <button
                className="grid place-items-center rounded-full w-[36px] h-[36px] bg-[#EEEEEE]"
                type="button"
                onClick={openModal({ text: username, userId, userImg: profileImageUrl })}
              >

                <DetailIcon.AngleRight />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ApplyCancelModal
        close={closeModal}
        onClickCancle={onClickCancle}
        isOpen={isOpenedModal}
        text={propsUsername}
        userId={propsUserId}
        userImg={propsImg}
      />
    </div>
  );
}

export default React.memo(ConfirmedApplicants);
