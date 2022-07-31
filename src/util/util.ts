import React, { SetStateAction } from 'react';

export const dateFormat = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const months = Number(month >= 10) ? month : `0${month}`;
  const days = Number(date.getDate() >= 10) ? day : `0${day}`;
  return `${date.getFullYear()}-${months}-${days}`;
};

export function doubleSubmitCheck({
  doubleSubmitFlag,
  setDoubleSubmitFlag,
}:{
  doubleSubmitFlag:boolean,
  setDoubleSubmitFlag:React.Dispatch<SetStateAction<boolean>>
 }) {
  if (doubleSubmitFlag) {
    return doubleSubmitFlag;
  }
  setDoubleSubmitFlag(true);
  setTimeout(() => {
    setDoubleSubmitFlag(false);
  }, 3000);
  return false;
}
export default {
  dateFormat: (date: Date) => dateFormat(date),
  doubleSubmitCheck: ({
    doubleSubmitFlag,
    setDoubleSubmitFlag,
  }:{
    doubleSubmitFlag:boolean,
    setDoubleSubmitFlag:React.Dispatch<SetStateAction<boolean>>
   }) => doubleSubmitCheck({ doubleSubmitFlag, setDoubleSubmitFlag }),
};
