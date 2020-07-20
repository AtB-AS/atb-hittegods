import React from "react";

type Props = {
  className: string;
};

function VeskeImg(props: Props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M9.93782 26.8319C10.9396 24.17 12.0813 21.5367 12.7981 18.7411C13.1518 17.3617 13.6698 16.0233 14.1381 14.6749C14.3845 13.9653 14.6859 13.2748 14.9591 12.5743C16.0356 9.91436 17.4064 7.38323 19.046 5.0282C19.689 4.07773 20.3591 3.14514 21.0363 2.21872C21.1884 2.01629 21.3819 1.84874 21.6041 1.72735C22.6904 1.1081 23.965 0.905269 25.1899 1.15671C26.4148 1.40816 27.5064 2.0967 28.2609 3.09384C30.049 5.26495 31.1389 7.80516 32.0498 10.4237C32.9377 12.8158 33.6604 15.2659 34.2129 17.7569C34.7209 20.2911 35.2803 22.8151 35.8261 25.3416C35.9383 25.8608 36.0903 26.3715 36.2336 26.9234C36.9251 26.9234 37.535 26.9611 38.1386 26.9154C39.2835 26.8286 40.424 26.6839 41.5681 26.5843C42.0695 26.5301 42.5744 26.5162 43.0779 26.5427C43.574 26.5379 44.0523 26.727 44.4112 27.0695C44.77 27.4121 44.981 27.8811 44.9993 28.3769C45.0487 29.0589 45.4615 29.7848 44.9093 30.4559C44.8716 30.5576 44.8692 30.6692 44.9026 30.7724C45.141 32.2725 45.3252 33.7843 45.6418 35.2679C45.9626 36.7714 46.4303 38.2432 46.8036 39.7363C46.9777 40.4326 47.0823 41.1464 47.2154 41.8527C47.2398 42.1014 47.2837 42.3479 47.3465 42.5897C47.5493 43.0265 47.5924 43.5205 47.4683 43.9858C47.3443 44.4511 47.0609 44.8581 46.6677 45.1359C45.6197 45.9769 44.3246 46.4505 42.9813 46.4837C40.6078 46.4897 38.234 46.4482 35.8609 46.4769C33.8499 46.5012 31.8394 46.6568 29.8293 46.6453C27.2872 46.6917 24.7517 46.9215 22.2426 47.3328C18.7109 47.7978 15.1446 47.9453 11.5865 47.7735C10.2929 47.7455 9.00311 47.6202 7.72822 47.3986C6.23112 47.108 4.66049 47.0186 3.29228 46.2454C2.33084 45.7021 1.36712 45.1648 0.812761 44.1034C0.51009 43.57 0.409103 42.9457 0.528199 42.3442C0.937812 40.2621 1.37639 38.1855 1.75716 36.0982C2.06669 34.4015 2.30256 32.6914 2.58422 30.9894C2.71088 30.224 3.17768 29.5237 2.93894 28.6791C2.94745 28.5391 2.98478 28.4023 3.0486 28.2774C3.11241 28.1525 3.20134 28.0421 3.3098 27.9531C3.60395 27.619 3.97743 27.3643 4.39584 27.2124C4.81426 27.0605 5.26417 27.0164 5.70413 27.084C7.11772 27.2911 8.5588 27.2053 9.93782 26.8319ZM30.1271 10.5479C30.2119 11.3401 30.4594 12.1062 30.854 12.7983C30.7529 12.0038 30.7416 11.1791 30.1131 10.5595C29.6843 8.45273 28.001 5.02427 26.9423 4.26482C27.4321 5.31261 27.8403 6.25305 28.3057 7.16423C28.8883 8.30459 29.5179 9.42092 30.1271 10.5479ZM43.1525 31.4744C41.3654 32.5204 39.6513 33.5235 37.898 34.5497C38.915 34.8828 39.1356 35.7695 39.4475 36.588C39.6901 37.2245 39.8833 37.8845 40.1786 38.4953C40.6253 39.4194 40.4178 40.1774 39.4754 40.38C38.6325 40.5565 37.7715 40.6318 36.9107 40.6044C36.0463 40.5797 35.9898 40.3624 35.8602 39.4685C35.7451 38.675 35.9717 37.7072 34.9091 37.2696C35.7027 36.9576 35.7027 36.9576 35.9975 35.0086C35.7125 35.0085 35.4282 35.0353 35.1482 35.0888C33.8974 35.4201 32.6018 35.5499 31.3101 35.4733C30.9883 35.4898 30.6679 35.5273 30.351 35.5855C30.2425 35.578 30.1336 35.5939 30.0318 35.6322C29.93 35.6704 29.8377 35.7301 29.7609 35.8071C29.6842 35.8841 29.6249 35.9768 29.5871 36.0787C29.5492 36.1807 29.5338 36.2896 29.5417 36.398C29.5381 36.7787 29.4225 37.1499 29.2094 37.4654C28.9963 37.7809 28.695 38.0267 28.3432 38.1721C27.2864 38.7446 26.2236 39.2334 25.0227 38.4765C24.7278 38.3446 24.4736 38.1362 24.2864 37.873C24.0992 37.6097 23.9859 37.3012 23.9581 36.9794C23.9134 36.636 23.836 36.2977 23.7268 35.969C21.2938 35.6889 18.9388 35.4176 16.5837 35.1464L16.5277 35.3282C16.7261 35.4421 16.9244 35.556 17.1658 35.6945C16.8746 35.8877 16.6376 36.045 16.3172 36.2576C17.2145 36.619 17.174 37.4574 17.5543 38.0259C17.9949 38.6845 17.389 39.5078 18.0116 40.0756C18.8066 40.0906 19.5865 40.2944 20.2871 40.6703C20.1773 40.7487 20.0549 40.8078 19.9252 40.845C19.4459 40.8258 18.9581 40.6717 18.5228 41.055C18.3354 40.9711 18.1614 40.8601 18.0062 40.7257C17.3414 41.2967 15.9826 41.8486 15.5854 41.6326C14.7972 41.2038 13.6713 41.7534 13.1121 40.7271L13.5801 40.0858L12.4511 39.0136C12.9218 38.99 13.2538 38.9733 13.7317 38.9493L13.1376 38.0456C13.6928 37.7244 14.1408 37.2465 14.4254 36.6717C14.71 36.0969 14.8186 35.4509 14.7374 34.8146C13.3155 34.3444 11.8208 33.9471 10.4075 33.3554C9.01294 32.7715 7.70067 31.991 6.31895 31.2796C6.0732 31.8617 6.37639 32.4142 6.29254 32.8915C5.95867 34.7919 6.17174 36.688 6.19241 38.5839C6.27286 38.998 6.41488 39.3977 6.61375 39.7697C6.15032 40.5646 6.37462 41.4758 6.66474 42.3484C7.45785 42.7195 8.33206 42.3366 8.99999 43.0135H6.5675L6.929 45.9703C7.43141 46.1073 7.99872 46.3058 8.58288 46.407C9.0482 46.4478 9.51527 46.4651 9.98233 46.4588C11.6997 46.5777 13.4149 46.7818 15.1335 46.814C16.639 46.8423 18.1505 46.7157 19.6547 46.5972C21.1537 46.4791 22.6461 46.2784 24.1428 46.1277C25.9626 45.9446 27.7806 45.719 29.6052 45.6151C31.9342 45.4823 34.2689 45.4429 36.6016 45.3827C37.7874 45.3067 38.9768 45.3065 40.1625 45.3822C41.6512 45.6106 43.1737 45.4461 44.5792 44.9049C45.8463 44.3686 46.1355 44.0785 46.0707 42.6812C46.0315 41.8366 45.9698 41.755 45.1359 41.7144C44.5427 41.6856 43.9469 41.7089 43.1631 41.7089C43.3039 41.5076 43.5067 41.358 43.7404 41.2828C43.9742 41.2077 44.2262 41.2111 44.4579 41.2925C44.7149 41.38 44.9901 41.3996 45.2569 41.3496C45.5237 41.2996 45.7731 41.1816 45.981 41.007C44.5759 38.0171 44.5293 34.5991 43.1525 31.4744ZM34.4646 27.0555C34.4847 26.9051 34.4828 26.7527 34.4588 26.6029C34.0638 25.4927 33.7014 24.3676 33.2398 23.2851C32.4802 21.5038 31.6878 19.7346 30.8442 17.9919C30.2375 16.7386 29.9741 15.3533 29.2084 14.1543C28.7221 13.3944 28.373 12.5551 28.1769 11.6745C27.893 10.2267 27.3397 8.84506 26.5456 7.60156C26.2095 7.09243 25.9332 6.54619 25.7224 5.97369C25.3628 4.99752 24.8322 4.09323 24.1554 3.30321C23.9752 3.36368 23.7858 3.39225 23.5958 3.38764C22.6652 3.16007 22.1677 3.76761 21.8142 4.41479C21.2725 5.38255 20.8171 6.39615 20.4534 7.44384C20.0078 8.76104 19.6537 10.1074 19.3934 11.4733C19.0769 13.1681 18.8675 14.8861 18.685 16.6018C18.5254 18.1024 18.5146 19.619 18.3498 21.1188C18.201 22.4736 17.9199 23.8134 17.7237 25.1638C17.6541 25.6428 17.6629 26.1333 17.6289 26.7445C18.6716 26.7445 19.5659 26.7253 20.459 26.7492C21.6708 26.7816 22.9146 27.0472 24.0862 26.8554C26.3551 26.484 28.6032 26.6737 30.862 26.7352C31.6144 26.6972 32.3675 26.7964 33.0845 27.028C33.5396 27.1158 34.0064 27.1251 34.4646 27.0555ZM16.7855 33.9526C19.261 34.2255 21.6452 34.4884 24.0441 34.7529C24.2225 34.5039 24.3864 34.2448 24.5349 33.9769C24.7618 33.4836 25.1451 33.079 25.6254 32.8259C26.1057 32.5727 26.6561 32.4852 27.1913 32.5768C27.9216 32.6288 28.6442 32.7899 29.4407 32.9129L29.019 33.1948C29.3454 33.2663 29.6589 33.3351 30.0756 33.4265C29.7679 33.7883 29.0576 33.895 29.6238 34.443C33.5163 34.3372 34.8289 34.1381 35.8421 33.4784C35.5686 32.0208 35.3166 30.538 35.0055 29.0676C34.7911 28.0541 34.6858 27.9842 33.622 27.9694C32.8368 27.9585 32.0502 28.0481 31.2649 28.0372C30.1265 28.0213 28.9712 28.3049 27.851 27.8563C27.6772 27.8193 27.4976 27.8191 27.3238 27.8558C25.7541 27.971 24.1848 28.0904 22.6152 28.2057C22.5088 28.2171 22.4012 28.2118 22.2965 28.1898C21.3028 28.0252 20.2892 28.0207 19.2942 28.1767C18.6998 28.2172 18.1004 28.1841 17.422 28.1841C17.1271 30.0523 16.4905 31.8255 16.7855 33.9526ZM15.7559 26.9075C16.5738 21.0645 17.0896 15.2837 18.3229 9.60421C15.4164 15.0556 13.2642 20.8766 11.9252 26.9075H15.7559ZM6.26829 28.329C6.25662 28.6524 6.3188 28.9742 6.45011 29.2699C6.58141 29.5657 6.7784 29.8276 7.02609 30.0358C7.64631 30.5787 8.31838 31.0593 9.0326 31.4707C10.6999 32.3675 12.5485 32.8002 14.3365 33.3841C14.5209 33.4121 14.7084 33.4144 14.8935 33.3908C15.1197 32.2593 15.3595 31.181 15.5313 30.0921C15.4913 29.8697 15.3915 29.6623 15.2427 29.4922C15.4147 29.2552 15.5205 28.9767 15.5494 28.6854C15.364 28.4461 15.1042 28.2752 14.8111 28.1998C14.6031 28.1422 14.3863 28.1235 14.1716 28.1448C11.874 28.1389 9.57632 28.1292 7.2788 28.1433C6.93703 28.1745 6.5988 28.2366 6.26829 28.329ZM40.4871 27.9908L40.4669 27.8663L36.4799 28.1647C36.4199 29.1495 36.9046 29.9067 37.096 30.7306C37.2848 31.5431 37.4412 32.3631 37.6312 33.2724C38.7648 32.6765 39.7992 32.1814 40.7778 31.5932C41.1254 31.306 41.43 30.9704 41.6824 30.5968C41.7656 30.4501 41.8862 30.3282 42.032 30.2434C43.1096 30.0555 43.2477 29.1872 43.5226 28.3536L42.6724 27.8686C42.0736 28.2487 39.3707 28.6939 38.6856 28.3783L40.4871 27.9908ZM3.46858 32.5415C3.3103 33.5638 3.16942 34.5205 3.01246 35.4746C2.85412 36.4374 2.67988 37.3974 2.49388 38.4662C3.59106 37.9676 2.50337 36.6621 3.6441 36.2212V36.9575L4.80512 37.3033C4.88926 37.1791 4.94809 37.0395 4.97826 36.8924C5.00842 36.7454 5.00933 36.5939 4.98092 36.4466C4.95252 36.2992 4.89536 36.1589 4.81272 36.0336C4.73007 35.9084 4.62356 35.8006 4.49926 35.7166L3.84512 36.1948V32.9788C4.03805 33.0246 4.2111 33.1313 4.33864 33.2832C4.46619 33.435 4.54146 33.6239 4.55331 33.8218C4.56617 34.2205 4.54977 34.6195 4.50422 35.0158L4.82073 35.0293C5.15833 34.0476 5.04717 33.0294 4.94361 31.8501L3.46858 32.5415ZM2.26771 43.8494C3.34866 44.9375 4.71216 45.6322 5.65375 45.5527C5.48321 45.1864 4.79235 44.9922 5.24917 44.4355C5.19702 44.2832 5.12103 44.1403 5.02403 44.0119C4.91895 43.875 4.85679 43.7101 4.84543 43.5379C5.27223 42.7572 4.66715 42.3059 4.34529 41.629L3.64208 42.4104C3.58153 41.667 3.0835 41.8911 2.7578 41.8055L2.26771 43.8494ZM4.11999 41.2746C4.50277 40.8862 4.75196 40.6511 4.53714 40.231C4.38817 39.9396 4.26834 39.6334 4.11812 39.2946L3.64092 39.1504C4.21641 38.5096 4.21641 38.5096 3.61604 37.7785C3.13077 38.5335 3.58786 39.6381 2.69663 40.3221L2.40227 39.4521C2.11691 40.4548 1.90151 41.4761 1.75762 42.5085C1.75557 42.6754 1.77697 42.8417 1.82119 43.0025L1.94231 43.0119L2.43003 41.0458C2.707 41.0726 2.98649 41.0521 3.25664 40.9854C3.51006 40.8193 3.73564 40.6141 3.925 40.3776L4.11999 41.2746ZM5.03097 30.8976C5.21106 30.0697 4.91794 29.5104 4.48902 28.7155L3.9909 30.391L5.03097 30.8976ZM4.97111 37.941L4.86363 37.9691L4.91557 38.4437L4.9711 38.4355V37.941H4.97111Z"
          fill="currentcolor"
        />
        <path
          d="M18.3563 45.7702C17.5051 46.1303 13.2946 46.1087 12.4912 45.7358C13.466 45.4348 14.4706 45.6071 15.4636 45.6463C16.4296 45.6008 17.3978 45.6422 18.3563 45.7702Z"
          fill="currentcolor"
        />
        <path
          d="M20.7626 43.8217C18.4851 43.9173 16.2078 44.0147 13.9299 44.0997C13.786 44.0112 13.6596 43.897 13.5571 43.7627C16.0721 43.6277 18.41 43.3303 20.7626 43.8217Z"
          fill="currentcolor"
        />
        <path
          d="M13.5713 42.8796C13.2475 42.8878 12.8125 43.0346 12.6193 42.8798C11.8334 42.2501 10.8893 42.3107 9.99875 42.1392C9.51073 42.0452 9.01297 42.0018 8.52499 41.9076C8.22107 41.8301 7.92147 41.7366 7.62744 41.6275C8.66313 41.3793 12.6309 42.0862 13.5819 42.6313L13.5713 42.8796Z"
          fill="currentcolor"
        />
        <path
          d="M8.72218 45.3783C9.73968 44.9298 10.8842 44.8606 11.9483 45.1834C10.8843 45.5167 9.81757 45.8074 8.71045 45.3622L8.72218 45.3783Z"
          fill="currentcolor"
        />
        <path
          d="M19.4443 45.8252C20.405 45.5565 21.4099 45.4831 22.3994 45.6092C21.459 45.979 20.4285 46.0543 19.4443 45.8252Z"
          fill="currentcolor"
        />
        <path
          d="M33.2878 39.2419L33.1045 40.5655L32.103 39.8799C32.5015 39.6653 32.7914 39.5092 33.2878 39.2419Z"
          fill="currentcolor"
        />
        <path
          d="M43.1798 32.6679C42.9705 32.8621 42.7121 32.9953 42.4326 33.0532C42.153 33.1112 41.8629 33.0915 41.5938 32.9964C42.0471 32.7625 42.4631 32.3581 43.1798 32.6679Z"
          fill="currentcolor"
        />
        <path
          d="M41.7062 41.9996L39.9983 42.2691L39.9531 42.0238L41.7028 41.6752L41.7062 41.9996Z"
          fill="currentcolor"
        />
        <path
          d="M31.3716 42.5665C31.6068 42.3966 31.8897 42.3055 32.1799 42.306C32.47 42.3065 32.7526 42.3987 32.9873 42.5693C32.7503 42.7348 32.468 42.8233 32.179 42.8228C31.8899 42.8222 31.608 42.7328 31.3716 42.5665Z"
          fill="currentcolor"
        />
        <path
          d="M30.772 43.6592L32.2235 43.4802L32.2544 43.7324C31.8123 44.0601 31.2907 43.8479 30.804 43.8732L30.772 43.6592Z"
          fill="currentcolor"
        />
        <path
          d="M44.0484 38.7723C43.491 38.9684 43.1733 39.0802 42.7515 39.2286C43.2229 38.4297 43.2229 38.4297 44.0484 38.7723Z"
          fill="currentcolor"
        />
        <path
          d="M44.0161 34.4598L43.0845 34.7957C43.2637 34.0942 43.2637 34.0942 44.0161 34.4598Z"
          fill="currentcolor"
        />
        <path
          d="M43.0896 43.1728L42.416 43.0879L42.4289 42.8719H43.0961L43.0896 43.1728Z"
          fill="currentcolor"
        />
        <path
          d="M28.2933 45.1789H27.3184C27.7203 44.6569 28.0044 44.7886 28.2933 45.1789Z"
          fill="currentcolor"
        />
        <path
          d="M9.87536 42.8351C10.2779 42.8974 10.6804 42.9598 11.083 43.0221L11.0552 43.2428L9.82178 43.1055L9.87536 42.8351Z"
          fill="currentcolor"
        />
        <path
          d="M31.6083 41.3774C31.4568 40.679 31.8288 40.7879 32.2252 40.931L31.6083 41.3774Z"
          fill="currentcolor"
        />
        <path
          d="M30.3418 42.4753L31.1824 42.325C30.9591 42.9326 30.6304 42.7579 30.3451 42.728L30.3418 42.4753Z"
          fill="currentcolor"
        />
        <path
          d="M44.7397 43.4198C44.9233 43.2678 45.1068 43.1158 45.336 42.926C45.3967 43.036 45.4418 43.154 45.4698 43.2765C45.2945 43.4124 45.1124 43.5391 44.9241 43.6563L44.7397 43.4198Z"
          fill="currentcolor"
        />
        <path
          d="M8.71039 45.3622C8.426 45.7558 8.09525 45.6731 7.64307 45.4723C8.04102 45.0039 8.39728 45.3895 8.72203 45.3783L8.71039 45.3622Z"
          fill="currentcolor"
        />
        <path
          d="M27.1994 44.4942L26.718 44.6552L26.6333 44.3919L27.1588 44.3017L27.1994 44.4942Z"
          fill="currentcolor"
        />
        <path
          d="M11.6935 39.5085L12.3746 39.569L12.3683 39.6786H11.687L11.6935 39.5085Z"
          fill="currentcolor"
        />
        <path
          d="M10.063 37.3573L10.8473 37.4022L10.8529 37.5247L10.0817 37.5757L10.063 37.3573Z"
          fill="currentcolor"
        />
        <path
          d="M43.3338 36.8258L42.6303 36.9794L42.5732 36.7907L43.2566 36.5579L43.3338 36.8258Z"
          fill="currentcolor"
        />
        <path
          d="M25.0105 45.3666H25.6768L25.6918 45.5161L25 45.6009L25.0105 45.3666Z"
          fill="currentcolor"
        />
        <path
          d="M8.51807 37.1679H9.14754L9.15598 37.3448H8.52982L8.51807 37.1679Z"
          fill="currentcolor"
        />
        <path
          d="M33.6861 32.1063C33.8378 33.0684 33.8378 33.0684 33.0926 33.3315L32.8252 32.3882L33.6861 32.1063Z"
          fill="currentcolor"
        />
        <path
          d="M32.0547 28.9508L33.8074 28.8001C33.3151 29.2236 33.3151 29.2236 32.0818 29.1822L32.0547 28.9508Z"
          fill="currentcolor"
        />
        <path
          d="M27.2932 30.6095L25.9844 30.4365C26.1651 30.2737 26.3947 30.1753 26.6373 30.1566C26.8798 30.1379 27.1218 30.2001 27.3253 30.3333L27.2932 30.6095Z"
          fill="currentcolor"
        />
        <path
          d="M22.5676 29.2892C22.0214 29.7555 22.0214 29.7555 21.0029 29.4248L22.5071 29.0484L22.5676 29.2892Z"
          fill="currentcolor"
        />
        <path
          d="M28.9631 29.5685H27.4443C28.4425 29.1382 28.4425 29.1382 28.9631 29.5685Z"
          fill="currentcolor"
        />
        <path
          d="M24.6839 29.1179H23.5744L23.5513 28.9639L24.6789 28.828L24.6839 29.1179Z"
          fill="currentcolor"
        />
        <path
          d="M33.9107 29.5749L34.2355 30.285C34.3131 30.182 34.266 30.2827 34.2364 30.2778C34.0082 30.2576 33.7849 30.2005 33.575 30.1089C33.5694 29.9405 33.594 29.7725 33.6477 29.6128L33.9107 29.5749Z"
          fill="currentcolor"
        />
        <path
          d="M19.4373 29.3407H18.3869L18.3774 29.1746L19.4293 29.0561L19.4373 29.3407Z"
          fill="currentcolor"
        />
        <path
          d="M22.4951 32.4372C22.806 31.9221 23.1128 31.8922 23.4195 32.395L22.4951 32.4372Z"
          fill="currentcolor"
        />
        <path
          d="M30.938 30.2767H31.9313L31.9361 30.3795L30.9476 30.4684L30.938 30.2767Z"
          fill="currentcolor"
        />
        <path
          d="M32.6041 33.3023C32.4583 33.349 32.3096 33.3858 32.1588 33.4124C32.1216 33.3333 32.0931 33.2505 32.0737 33.1652L32.5316 33.0519L32.6041 33.3023Z"
          fill="currentcolor"
        />
        <path
          d="M23.4274 33.6619L22.8169 33.861L22.7275 33.7218C22.8139 33.621 22.9182 33.537 23.0351 33.4739C23.1612 33.4633 23.2882 33.478 23.4086 33.5173L23.4274 33.6619Z"
          fill="currentcolor"
        />
        <path
          d="M26.5085 31.8108L26.021 31.7315L26.0475 31.5556L26.5375 31.6189L26.5085 31.8108Z"
          fill="currentcolor"
        />
        <path
          d="M38.3208 31.8155L39.4719 31.6229C39.434 31.7285 39.3755 31.8256 39.2997 31.9083C39.2239 31.991 39.1324 32.0578 39.0304 32.1047C38.9285 32.1516 38.8182 32.1776 38.706 32.1813C38.5939 32.185 38.4821 32.1663 38.3773 32.1263L38.3208 31.8155Z"
          fill="currentcolor"
        />
        <path
          d="M3.30733 43.8085L3.18604 43.3587L3.45101 43.2965L3.53934 43.756L3.30733 43.8085Z"
          fill="currentcolor"
        />
        <path
          d="M3.99833 43.2865C3.93089 43.2033 3.88381 43.1056 3.86084 43.001C3.9267 42.9126 4.00856 42.8374 4.10217 42.7792C4.14735 42.862 4.17553 42.953 4.18507 43.0469C4.14033 43.139 4.07671 43.2206 3.99833 43.2865Z"
          fill="currentcolor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="48"
            height="46.8837"
            fill="white"
            transform="translate(0 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default VeskeImg;