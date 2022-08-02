export const dateFormat = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const months = Number(month >= 10) ? month : `0${month}`;
  const days = Number(date.getDate() >= 10) ? day : `0${day}`;
  return `${date.getFullYear()}-${months}-${days}`;
};

export const afterMonthFormat = (month:number) => {
  const today = new Date();
  const addMonth = today.getMonth() + month;
  const day = today.getDate();

  const months = Number(month >= 10) ? addMonth : `0${addMonth}`;
  const days = Number(today.getDate() >= 10) ? day : `0${day}`;
  return `${today.getFullYear()}-${months}-${days}`;
};
export const addMonths = (months:number) => {
  const today = new Date();
  today.setMonth(today.getMonth() + months);
  return today;
};
export default {
  dateFormat: (date: Date) => dateFormat(date),
  afterMonthFormat: (month: number) => afterMonthFormat(month),
  addMonths: (month: number) => addMonths(month),
};
