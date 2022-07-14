export const dateFormat = (date: Date) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = Number(month >= 10 ? month : `0${month}`);
  day = Number(day >= 10 ? day : `0${day}`);

  return `${date.getFullYear()}-${month}-${day}`;
};

export default {
  dateFormat: (date: Date) => dateFormat(date),

};
