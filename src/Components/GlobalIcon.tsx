/* eslint-disable react/require-default-props */
interface Props {
  onClick?: () => void
}
const GlobalIcon = {
  Logo: ({ width = '139', height = '39' }:{width?:string, height?:string}) => (
    <svg width={width} height={height} viewBox="0 0 451 89" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1 -1.90735e-06H35.3L28.7 25C30.6333 23.2667 32.8 21.7333 35.2 20.4C37.6 19.0667 40.3 18.4 43.3 18.4C48.1 18.4 51.9333 19.8 54.8 22.6C57.6667 25.3333 59.1 29.1333 59.1 34C59.1 35.5333 58.9 37.2 58.5 39C58.1667 40.7333 57.7667 42.4667 57.3 44.2L49.6 73H34.4L42.3 43.6C42.5 42.8667 42.6667 42.0667 42.8 41.2C42.9333 40.2667 43 39.4667 43 38.8C43 36.6667 42.3333 35.0333 41 33.9C39.7333 32.7667 37.9333 32.2 35.6 32.2C32.6 32.2 30.1333 33.2 28.2 35.2C26.2667 37.1333 24.8667 39.7 24 42.9L15.9 73H0.7L20.1 -1.90735e-06ZM76.107 74C71.307 74 67.4737 72.6333 64.607 69.9C61.7404 67.1 60.307 63.2667 60.307 58.4C60.307 56.8667 60.4737 55.2333 60.807 53.5C61.207 51.7 61.6404 49.9333 62.107 48.2L69.807 19.4H85.007L77.107 48.8C76.907 49.5333 76.7404 50.3667 76.607 51.3C76.4737 52.1667 76.407 52.9333 76.407 53.6C76.407 55.7333 77.0404 57.3667 78.307 58.5C79.6404 59.6333 81.4737 60.2 83.807 60.2C86.807 60.2 89.2737 59.2333 91.207 57.3C93.1404 55.3 94.5404 52.7 95.407 49.5L103.507 19.4H118.707L104.407 73H89.207L90.707 67.4C88.7737 69.1333 86.607 70.6667 84.207 72C81.807 73.3333 79.107 74 76.107 74ZM142.314 61.2C144.381 61.2 146.381 60.7333 148.314 59.8C150.314 58.8 152.047 57.4667 153.514 55.8C155.047 54.0667 156.247 52.0667 157.114 49.8C158.047 47.5333 158.514 45.1333 158.514 42.6C158.514 39.2 157.447 36.4667 155.314 34.4C153.181 32.2667 150.414 31.2 147.014 31.2C144.947 31.2 142.947 31.6667 141.014 32.6C139.147 33.5333 137.481 34.8667 136.014 36.6C134.547 38.2667 133.347 40.2667 132.414 42.6C131.547 44.8667 131.114 47.3333 131.114 50C131.114 53.5333 132.114 56.3 134.114 58.3C136.181 60.2333 138.914 61.2 142.314 61.2ZM136.014 74C133.081 74 130.347 73.5 127.814 72.5C125.347 71.4333 123.181 69.9333 121.314 68C119.447 66 117.981 63.5667 116.914 60.7C115.914 57.8333 115.414 54.6 115.414 51C115.414 46.2667 116.247 41.9 117.914 37.9C119.581 33.9 121.781 30.4667 124.514 27.6C127.314 24.6667 130.481 22.4 134.014 20.8C137.547 19.2 141.214 18.4 145.014 18.4C149.214 18.4 152.614 19.2 155.214 20.8C157.881 22.4 160.081 24.5333 161.814 27.2L169.014 -1.90735e-06H184.214L164.714 73H149.514L151.114 67.2C148.781 69.3333 146.414 71 144.014 72.2C141.681 73.4 139.014 74 136.014 74ZM202.697 61.2C204.764 61.2 206.764 60.7333 208.697 59.8C210.697 58.8 212.43 57.4667 213.897 55.8C215.43 54.0667 216.63 52.0667 217.497 49.8C218.43 47.5333 218.897 45.1333 218.897 42.6C218.897 39.2 217.83 36.4667 215.697 34.4C213.564 32.2667 210.797 31.2 207.397 31.2C205.33 31.2 203.33 31.6667 201.397 32.6C199.53 33.5333 197.864 34.8667 196.397 36.6C194.93 38.2667 193.73 40.2667 192.797 42.6C191.93 44.8667 191.497 47.3333 191.497 50C191.497 53.5333 192.497 56.3 194.497 58.3C196.564 60.2333 199.297 61.2 202.697 61.2ZM196.397 74C193.464 74 190.73 73.5 188.197 72.5C185.73 71.4333 183.564 69.9333 181.697 68C179.83 66 178.364 63.5667 177.297 60.7C176.297 57.8333 175.797 54.6 175.797 51C175.797 46.2667 176.63 41.9 178.297 37.9C179.964 33.9 182.164 30.4667 184.897 27.6C187.697 24.6667 190.864 22.4 194.397 20.8C197.93 19.2 201.597 18.4 205.397 18.4C209.597 18.4 212.997 19.2 215.597 20.8C218.264 22.4 220.464 24.5333 222.197 27.2L229.397 -1.90735e-06H244.597L225.097 73H209.897L211.497 67.2C209.164 69.3333 206.797 71 204.397 72.2C202.064 73.4 199.397 74 196.397 74ZM252.08 -1.90735e-06H267.28L247.68 73H232.48L252.08 -1.90735e-06ZM298.355 42C298.689 40.8667 298.855 39.7 298.855 38.5C298.855 36.3 298.155 34.4333 296.755 32.9C295.422 31.3667 293.189 30.6 290.055 30.6C286.589 30.6 283.522 31.6667 280.855 33.8C278.255 35.8667 276.322 38.6 275.055 42H298.355ZM273.755 51.5C274.022 54.7 275.122 57.2667 277.055 59.2C278.989 61.0667 281.955 62 285.955 62C287.955 62 289.889 61.6667 291.755 61C293.622 60.3333 295.655 59.2333 297.855 57.7L304.855 67.1C302.455 69.1 299.555 70.8 296.155 72.2C292.822 73.5333 288.855 74.2 284.255 74.2C280.389 74.2 276.922 73.6667 273.855 72.6C270.789 71.4667 268.189 69.9 266.055 67.9C263.922 65.8333 262.289 63.3333 261.155 60.4C260.022 57.4667 259.455 54.1333 259.455 50.4C259.455 46.5333 260.189 42.7 261.655 38.9C263.189 35.0333 265.355 31.6 268.155 28.6C270.955 25.5333 274.289 23.0667 278.155 21.2C282.089 19.3333 286.455 18.4 291.255 18.4C294.722 18.4 297.822 18.9333 300.555 20C303.289 21.0667 305.589 22.5333 307.455 24.4C309.322 26.2667 310.722 28.4667 311.655 31C312.655 33.5333 313.155 36.3 313.155 39.3C313.155 41.2333 312.922 43.2333 312.455 45.3C311.989 47.3667 311.322 49.4333 310.455 51.5H273.755ZM351.978 74C347.178 74 343.345 72.6333 340.478 69.9C337.611 67.1 336.178 63.2667 336.178 58.4C336.178 56.8667 336.345 55.2333 336.678 53.5C337.078 51.7 337.511 49.9333 337.978 48.2L345.678 19.4H360.878L352.978 48.8C352.778 49.5333 352.611 50.3667 352.478 51.3C352.345 52.1667 352.278 52.9333 352.278 53.6C352.278 55.7333 352.911 57.3667 354.178 58.5C355.511 59.6333 357.345 60.2 359.678 60.2C362.678 60.2 365.145 59.2333 367.078 57.3C369.011 55.3 370.411 52.7 371.278 49.5L379.378 19.4H394.578L380.278 73H365.078L366.578 67.4C364.645 69.1333 362.478 70.6667 360.078 72C357.678 73.3333 354.978 74 351.978 74ZM418.985 61.2C421.052 61.2 423.018 60.7333 424.885 59.8C426.818 58.8667 428.518 57.5667 429.985 55.9C431.452 54.1667 432.618 52.1667 433.485 49.9C434.418 47.6333 434.885 45.1333 434.885 42.4C434.885 38.8667 433.852 36.1333 431.785 34.2C429.785 32.2 427.085 31.2 423.685 31.2C421.552 31.2 419.518 31.7 417.585 32.7C415.652 33.6333 413.918 34.9667 412.385 36.7C410.918 38.3667 409.718 40.3333 408.785 42.6C407.918 44.8667 407.485 47.2667 407.485 49.8C407.485 53.2 408.552 55.9667 410.685 58.1C412.818 60.1667 415.585 61.2 418.985 61.2ZM401.285 19.4H416.485L414.885 25.2C417.218 23.0667 419.552 21.4 421.885 20.2C424.285 19 426.985 18.4 429.985 18.4C432.918 18.4 435.618 18.9333 438.085 20C440.618 21 442.818 22.5 444.685 24.5C446.552 26.4333 447.985 28.8333 448.985 31.7C450.052 34.5667 450.585 37.8 450.585 41.4C450.585 46.1333 449.752 50.5 448.085 54.5C446.418 58.5 444.185 61.9667 441.385 64.9C438.652 67.7667 435.518 70 431.985 71.6C428.452 73.2 424.785 74 420.985 74C416.785 74 413.352 73.2 410.685 71.6C408.085 70 405.918 67.8667 404.185 65.2L397.885 89H382.685L401.285 19.4Z" fill="black" />
    </svg>

  ),
  Search: ({ onClick }: Props) => (
    <svg onClick={onClick} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="#9AA0A6" strokeWidth="2" />
      <path d="M17 18L21 22" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  DropDown: ({ onClick }: Props) => (
    <svg onClick={onClick} className="cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="30" height="30" rx="7" fill="white" stroke="#DFE1E5" strokeWidth="2" />
      <path d="M11 14L16 19L21 14" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Calendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7ZM7 11H12V16H7V11Z" fill="#323232" />
    </svg>
  ),
  FileIcon: () => (
    <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 10H6C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2H18.5C19.88 2 21 3.12 21 4.5C21 5.88 19.88 7 18.5 7H8C7.45 7 7 6.55 7 6C7 5.45 7.45 5 8 5H17.5V3.5H8C6.62 3.5 5.5 4.62 5.5 6C5.5 7.38 6.62 8.5 8 8.5H18.5C20.71 8.5 22.5 6.71 22.5 4.5C22.5 2.29 20.71 0.5 18.5 0.5H6C2.96 0.5 0.5 2.96 0.5 6C0.5 9.04 2.96 11.5 6 11.5H17.5V10Z" fill="#6457FA" />
    </svg>

  ),
};

export default GlobalIcon;