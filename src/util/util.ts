import React, { SetStateAction } from 'react';

export const dateFormat = (date: Date, type = 1) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const months = Number(month >= 10) ? month : `0${month}`;
  const days = Number(date.getDate() >= 10) ? day : `0${day}`;
  const hour = Number(date.getHours() >= 10) ? hours : `0${hours}`;
  const minute = Number(date.getMinutes() >= 10) ? minutes : `0${minutes}`;
  if (type === 1) { return `${date.getFullYear()}-${months}-${days}`; }
  return `${date.getFullYear()}-${months}-${days} ${hour}:${minute}`;
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
