/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
interface Props {
  onClick?: () => void
}
const GlobalIcon = {
  Search: ({ onClick }: Props) => (
    <svg onClick={onClick} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="#9AA0A6" strokeWidth="2" />
      <path d="M17 18L21 22" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  DropDown: ({ onClick }: Props) => (
    <svg onClick={onClick} className="cursor-pointer " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="30" height="30" rx="7" fill="white" stroke="#DFE1E5" strokeWidth="2" />
      <path d="M11 14L16 19L21 14" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  DropUp: ({ onClick }: Props) => (
    <svg onClick={onClick} className="cursor-pointer " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="31" y="31" width="30" height="30" rx="7" transform="rotate(-180 31 31)" fill="white" stroke="#DFE1E5" strokeWidth="2" />
      <path d="M21 18L16 13L11 18" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
    </svg>

  ),
  Calendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7ZM7 11H12V16H7V11Z" fill="#323232" />
    </svg>
  ),
  ActCalendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7ZM7 11H12V16H7V11Z" fill="#6457FA" />
    </svg>

  ),
  FileIcon: () => (
    <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 10H6C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2H18.5C19.88 2 21 3.12 21 4.5C21 5.88 19.88 7 18.5 7H8C7.45 7 7 6.55 7 6C7 5.45 7.45 5 8 5H17.5V3.5H8C6.62 3.5 5.5 4.62 5.5 6C5.5 7.38 6.62 8.5 8 8.5H18.5C20.71 8.5 22.5 6.71 22.5 4.5C22.5 2.29 20.71 0.5 18.5 0.5H6C2.96 0.5 0.5 2.96 0.5 6C0.5 9.04 2.96 11.5 6 11.5H17.5V10Z" fill="#6457FA" />
    </svg>

  ),
  Refresh: ({ onClick }: Props) => (
    <svg onClick={onClick} width="16" height="16" className="cursor-pointer " viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6498 2.35C12.1998 0.9 10.2098 0 7.99977 0C3.57977 0 0.00976562 3.58 0.00976562 8C0.00976562 12.42 3.57977 16 7.99977 16C11.7298 16 14.8398 13.45 15.7298 10H13.6498C12.8298 12.33 10.6098 14 7.99977 14C4.68977 14 1.99977 11.31 1.99977 8C1.99977 4.69 4.68977 2 7.99977 2C9.65977 2 11.1398 2.69 12.2198 3.78L8.99977 7H15.9998V0L13.6498 2.35Z" fill="#323232" />
    </svg>

  ),
  Closed: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M7 7L17 17" stroke="black" />
    </svg>

  ),
};

export default GlobalIcon;
