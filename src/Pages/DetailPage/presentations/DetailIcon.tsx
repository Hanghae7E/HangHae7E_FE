/* eslint-disable react/require-default-props */
interface Props {
  onClick?: () => void
}
const DetailIcon = {
  Check: ({ onClick }: Props) => (
    <svg
      onClick={onClick}
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.00039 11.1996L1.80039 6.99961L0.400391 8.39961L6.00039 13.9996L18.0004 1.99961L16.6004 0.599609L6.00039 11.1996Z" fill="#323232" />
    </svg>
  ),
  Cancel: ({ onClick }: Props) => (
    <svg
      onClick={onClick}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.2426 13.6569L7 8.41429L1.75736 13.6569L0.343145 12.2427L5.58579 7.00008L0.343146 1.75744L1.75736 0.343226L7 5.58587L12.2426 0.343226L13.6569 1.75744L8.41421 7.00008L13.6569 12.2427L12.2426 13.6569Z" fill="#323232" />
    </svg>
  ),
  Project: () => (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM4 10H9V15H4V10Z" fill="#323232" />
    </svg>
  ),
  User: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 12C10.7 12 13.8 13.29 14 14H2C2.23 13.28 5.31 12 8 12ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="#323232" />
    </svg>
  ),

};

export default DetailIcon;
