import type { FC } from "react";

import type { StyledSvgProps } from "~/components/styledSvgs/types";

const IcInstagram: FC<StyledSvgProps> = ({ width = 40, height = 40, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4417 1.7765C14.3967 1.6865 15.02 1.6665 20 1.6665C24.98 1.6665 25.6033 1.68817 27.5567 1.7765C29.51 1.86484 30.8433 2.1765 32.01 2.62817C33.2317 3.08984 34.34 3.8115 35.2567 4.74484C36.19 5.65984 36.91 6.76651 37.37 7.98984C37.8233 9.15651 38.1333 10.4898 38.2233 12.4398C38.3133 14.3982 38.3333 15.0215 38.3333 19.9998C38.3333 24.9798 38.3117 25.6032 38.2233 27.5582C38.135 29.5082 37.8233 30.8415 37.37 32.0082C36.91 33.2317 36.1888 34.3402 35.2567 35.2565C34.34 36.1898 33.2317 36.9098 32.01 37.3698C30.8433 37.8232 29.51 38.1332 27.56 38.2232C25.6033 38.3132 24.98 38.3332 20 38.3332C15.02 38.3332 14.3967 38.3115 12.4417 38.2232C10.4917 38.1348 9.15833 37.8232 7.99167 37.3698C6.7682 36.9098 5.6597 36.1886 4.74333 35.2565C3.81063 34.341 3.08886 33.233 2.62833 32.0098C2.17666 30.8432 1.86666 29.5098 1.77666 27.5598C1.68666 25.6015 1.66666 24.9782 1.66666 19.9998C1.66666 15.0198 1.68833 14.3965 1.77666 12.4432C1.865 10.4898 2.17666 9.15651 2.62833 7.98984C3.08954 6.76664 3.81186 5.65869 4.745 4.74317C5.66007 3.81067 6.76745 3.08891 7.99 2.62817C9.15667 2.1765 10.49 1.8665 12.44 1.7765H12.4417ZM27.4083 5.0765C25.475 4.98817 24.895 4.96984 20 4.96984C15.105 4.96984 14.525 4.98817 12.5917 5.0765C10.8033 5.15817 9.83333 5.4565 9.18667 5.70817C8.33167 6.0415 7.72 6.43651 7.07833 7.07817C6.47007 7.66992 6.00197 8.39031 5.70833 9.18651C5.45666 9.83317 5.15833 10.8032 5.07666 12.5915C4.98833 14.5248 4.97 15.1048 4.97 19.9998C4.97 24.8948 4.98833 25.4748 5.07666 27.4082C5.15833 29.1965 5.45666 30.1665 5.70833 30.8132C6.00166 31.6082 6.47 32.3298 7.07833 32.9215C7.67 33.5298 8.39167 33.9982 9.18667 34.2915C9.83333 34.5432 10.8033 34.8415 12.5917 34.9232C14.525 35.0115 15.1033 35.0298 20 35.0298C24.8967 35.0298 25.475 35.0115 27.4083 34.9232C29.1967 34.8415 30.1667 34.5432 30.8133 34.2915C31.6683 33.9582 32.28 33.5632 32.9217 32.9215C33.53 32.3298 33.9983 31.6082 34.2917 30.8132C34.5433 30.1665 34.8417 29.1965 34.9233 27.4082C35.0117 25.4748 35.03 24.8948 35.03 19.9998C35.03 15.1048 35.0117 14.5248 34.9233 12.5915C34.8417 10.8032 34.5433 9.83317 34.2917 9.18651C33.9583 8.33151 33.5633 7.71984 32.9217 7.07817C32.3299 6.46996 31.6095 6.00186 30.8133 5.70817C30.1667 5.4565 29.1967 5.15817 27.4083 5.0765V5.0765ZM17.6583 25.6515C18.9661 26.1959 20.4223 26.2694 21.7782 25.8594C23.1341 25.4494 24.3057 24.5814 25.0927 23.4036C25.8797 22.2258 26.2334 20.8113 26.0934 19.4017C25.9534 17.9921 25.3283 16.6748 24.325 15.6748C23.6854 15.0356 22.912 14.5462 22.0606 14.2418C21.2091 13.9373 20.3007 13.8254 19.4008 13.9142C18.5009 14.003 17.6319 14.2901 16.8563 14.7551C16.0808 15.22 15.4179 15.8511 14.9155 16.6029C14.4131 17.3548 14.0836 18.2087 13.9509 19.1031C13.8181 19.9976 13.8853 20.9103 14.1476 21.7757C14.4099 22.6411 14.8608 23.4375 15.4679 24.1077C16.0749 24.7779 16.823 25.3052 17.6583 25.6515ZM13.3367 13.3365C14.2117 12.4615 15.2505 11.7673 16.3938 11.2938C17.5371 10.8202 18.7625 10.5765 20 10.5765C21.2375 10.5765 22.4629 10.8202 23.6062 11.2938C24.7495 11.7673 25.7883 12.4615 26.6633 13.3365C27.5384 14.2115 28.2325 15.2504 28.7061 16.3937C29.1796 17.537 29.4234 18.7623 29.4234 19.9998C29.4234 21.2373 29.1796 22.4627 28.7061 23.606C28.2325 24.7493 27.5384 25.7881 26.6633 26.6632C24.8961 28.4304 22.4992 29.4232 20 29.4232C17.5008 29.4232 15.1039 28.4304 13.3367 26.6632C11.5694 24.896 10.5766 22.4991 10.5766 19.9998C10.5766 17.5006 11.5694 15.1037 13.3367 13.3365V13.3365ZM31.5133 11.9798C31.7302 11.7753 31.9038 11.5293 32.0238 11.2565C32.1439 10.9836 32.208 10.6895 32.2124 10.3914C32.2167 10.0933 32.1612 9.79742 32.0491 9.52119C31.9371 9.24496 31.7707 8.99402 31.5599 8.78324C31.3491 8.57245 31.0982 8.4061 30.822 8.29404C30.5458 8.18197 30.2498 8.12647 29.9518 8.13081C29.6537 8.13516 29.3596 8.19926 29.0867 8.31933C28.8139 8.4394 28.5679 8.613 28.3633 8.82984C27.9655 9.25155 27.7477 9.81171 27.7562 10.3914C27.7646 10.9711 27.9987 11.5246 28.4086 11.9346C28.8185 12.3445 29.3721 12.5786 29.9518 12.587C30.5315 12.5955 31.0916 12.3777 31.5133 11.9798V11.9798Z"
      />
    </svg>
  );
};

export default IcInstagram;