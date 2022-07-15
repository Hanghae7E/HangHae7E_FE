export const dateFormat = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const months = Number(month >= 10) ? month : `0${month}`;
  const days = Number(date.getDate() >= 10) ? day : `0${day}`;
  return `${date.getFullYear()}-${months}-${days}`;
};

export default {
  dateFormat: (date: Date) => dateFormat(date),

};
