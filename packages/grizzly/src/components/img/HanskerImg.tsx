import React from "react";

type Props = {
  className: string;
};

function HanskeImg(props: Props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M13.5743 17.8189C13.7589 17.6493 13.8993 17.4467 13.9859 17.2248C14.0725 17.003 14.1032 16.7673 14.0758 16.5341C14.059 14.7806 14.2337 13.0298 14.5974 11.3056C14.9185 9.84469 17.8899 4.3987 19.0182 3.38973C20.5246 1.96907 22.4665 0.960681 24.6104 0.485872C27.8656 -0.172424 31.2217 -0.309292 34.3079 1.01973C36.4208 1.9296 38.6506 2.86448 39.644 5.02605C39.9575 5.62632 40.3723 6.18167 40.8744 6.67338C42.559 8.46378 42.7728 10.5797 42.703 12.7647C42.7118 14.2149 42.5984 15.6636 42.3638 17.099C42.1919 18.4549 42.2241 19.8248 42.4596 21.1732C42.6495 23.068 42.2224 24.9379 42.2433 26.8236C40.8796 28.6143 41.4841 30.6062 41.4948 32.5345C41.5024 33.9016 41.1915 35.2414 41.0891 36.5988C41.0532 37.0764 41.0675 37.5643 40.9949 38.0264C40.9395 38.2103 40.9572 38.4053 41.0451 38.5791C41.133 38.7529 41.286 38.8952 41.4786 38.9824C42.5874 39.6619 42.6194 40.3978 41.6554 41.2183C40.9278 41.8375 40.8032 42.1705 41.3906 42.8848C42.2604 43.9424 42.1541 44.7724 41.2464 45.831C40.7828 46.4566 40.1475 46.9699 39.3987 47.3235C38.65 47.6772 37.812 47.8599 36.9617 47.8548C36.8114 47.8547 36.6091 47.9142 36.5188 47.8504C35.483 47.1179 34.3586 47.6665 33.2758 47.6576C32.3375 47.6676 31.4011 47.5798 30.4863 47.3961C29.1027 47.1841 27.6875 47.186 26.3046 47.4019C25.3113 47.5016 24.3301 47.7483 23.337 47.7819C22.3395 47.8156 21.2341 48.4247 20.3327 47.4462C20.1786 47.2789 19.6665 47.3451 19.3191 47.3395C18.5176 47.3267 17.7156 47.3425 16.914 47.3347C16.1923 47.3276 15.5003 47.4352 15.2337 46.5015C15.0998 46.0326 14.3579 45.6946 13.8843 45.3037C12.8833 44.4775 12.7151 43.8519 13.5457 42.8922C13.7736 42.6645 13.911 42.378 13.9372 42.0758C13.9633 41.7736 13.8769 41.4721 13.6909 41.2168C13.5135 40.9022 13.3686 40.5731 13.2181 40.2474C13.123 40.0905 13.0668 39.9177 13.0532 39.7404C13.0395 39.563 13.0687 39.3852 13.1389 39.2185C13.9819 37.7866 13.3863 36.5696 12.5078 35.3608C11.9166 34.547 11.4036 33.6896 10.8158 32.8739C9.16183 30.5786 5.63168 25.8462 5.17944 22.8258C4.92281 21.8602 4.94171 20.8539 5.23445 19.8962C5.52718 18.9385 6.08471 18.0591 6.85757 17.3359C8.18807 16.0105 11.2422 16.0219 12.8964 17.3072C13.1145 17.4766 13.2116 17.7678 13.5743 17.8189ZM36.7394 4.49979C37.448 3.82545 37.4436 3.83138 36.7038 3.40915C35.9373 2.99751 35.1211 2.66186 34.2701 2.40835C33.3949 2.2293 32.5439 1.9687 31.7318 1.63098C30.2566 0.806364 28.546 1.1663 26.9636 0.885355C26.8883 0.876509 26.8118 0.88131 26.7388 0.899461C26.6657 0.917613 26.5977 0.948728 26.5389 0.990881C25.5441 1.80755 24.146 1.6056 23.0087 2.07356C22.5865 2.20182 22.1889 2.38554 21.8295 2.61843C19.5691 4.34039 17.7854 6.49174 16.6139 8.90913C16.3683 9.43605 16.1427 9.97019 15.9067 10.5006C15.234 11.8803 14.9295 13.3767 15.0162 14.8756C15.1096 15.9293 15.7481 16.9329 15.0292 18.0487C14.8188 18.5966 14.8447 19.1931 15.1019 19.7253C15.1387 19.8319 15.13 19.9466 15.0773 20.0478C15.0246 20.1491 14.9316 20.23 14.8157 20.2754C14.7069 20.3337 14.5767 20.3531 14.452 20.3293C14.3274 20.3056 14.218 20.2406 14.1466 20.1479C13.6741 19.6344 13.0048 19.3265 12.5152 18.8098C10.7993 16.999 10.3212 16.9809 8.10172 18.3922C8.0658 18.4229 8.02355 18.4472 7.97725 18.4639C6.95205 18.6596 6.78097 19.4166 6.52327 20.1332C6.26477 20.9369 6.19433 21.7783 6.31619 22.6066C6.60046 25.2018 7.76297 27.6631 9.65417 29.6738C11.3633 31.3887 12.7978 33.3003 13.9181 35.3557C13.9456 35.4141 13.9966 35.4617 14.0613 35.4893C14.1261 35.5169 14.2002 35.5227 14.2696 35.5056C14.3561 35.1863 14.3488 34.8531 14.2483 34.537C14.1478 34.221 13.9573 33.9325 13.6949 33.6988C13.3175 33.3453 13.0247 32.9289 12.8339 32.4742C12.638 31.7608 12.8778 31.4959 14.2127 31.3313C12.9883 32.0532 13.5491 32.5422 14.0977 33.0566C14.5881 33.5041 14.9323 34.0592 15.0942 34.6637C15.2338 35.2245 15.5347 35.8589 14.6768 36.2992C14.3403 36.4719 14.4998 37.463 14.851 37.5123C15.805 37.6463 16.4945 38.3835 17.4932 38.3572C19.3614 38.3081 21.155 38.7911 22.9688 39.0454C24.1919 39.1969 25.4277 39.2547 26.6622 39.2181C29.2611 39.1903 31.8426 38.8362 34.4556 39.0018C35.7071 39.0552 36.9604 38.937 38.1703 38.6512C38.6488 38.5293 39.1012 38.3392 39.5094 38.0884C39.6703 38.0189 39.7996 37.9037 39.8764 37.7615C39.9531 37.6193 39.9727 37.4585 39.9321 37.3052C39.653 36.5319 39.6251 35.7056 39.8517 34.9192C39.8789 34.8573 39.8898 34.7908 39.8837 34.7247C39.8776 34.6586 39.8547 34.5945 39.8165 34.5372C39.7784 34.4799 39.7261 34.4309 39.6634 34.3938C39.6008 34.3567 39.5294 34.3324 39.4546 34.3228C39.2487 33.6234 39.1704 32.8998 39.2226 32.1789C39.2813 32.1227 39.4088 32.0577 39.4705 32.0779C40.1677 32.3067 40.0852 31.845 40.1026 31.5172C40.1203 30.5504 40.2458 29.5874 40.4773 28.642C40.6296 28.1003 40.1034 27.8792 39.9846 27.5368C39.8395 27.1183 40.3938 26.5727 40.1139 26.0315C40.0357 25.8805 39.9603 25.7074 39.7052 25.7349C38.8825 26.0956 39.3175 27.2269 38.1147 27.6394C38.7156 26.3617 38.7818 24.9386 38.3019 23.6222C39.265 23.8999 39.0948 24.6093 39.4473 24.9328C39.7445 25.2054 40.4633 25.0979 41.0061 25.3756C41.1521 24.4221 41.281 23.6026 41.4005 22.7821C41.4252 22.6125 41.4969 22.3645 41.2955 22.2979C40.4706 22.0247 40.8467 21.4544 40.8284 20.9813C40.7216 18.2243 41.1911 15.4701 40.8589 12.7102C40.644 11.7623 40.5417 10.7975 40.5535 9.83109C40.5663 9.03859 40.3889 8.25261 40.0327 7.5243C39.8719 7.08587 39.7422 6.41816 38.8186 6.73398C38.5855 6.8137 38.3992 6.58144 38.3446 6.32981C38.1027 5.55906 37.5265 4.90212 36.7394 4.49979ZM37.0548 44.9091C37.2157 44.7849 37.3462 44.6333 37.4382 44.4634C37.5303 44.2936 37.5821 44.1091 37.5904 43.9212C37.5987 43.7333 37.5634 43.5458 37.4866 43.3702C37.4098 43.1946 37.2931 43.0346 37.1437 42.8998C36.837 42.4398 36.7373 41.8959 36.8641 41.3747C36.8805 40.8875 37.3695 40.5192 37.2977 39.9384C33.5366 40.0521 29.7852 39.7017 26.0432 40.127C25.3483 40.2147 24.6427 40.2164 23.9473 40.132C22.5039 39.9408 21.0554 40.3355 19.56 39.8238C18.7459 39.5453 17.5997 39.7905 16.6021 39.6868C15.4433 39.5662 15.3047 39.6785 15.2057 40.6935C15.1089 41.6866 15.2569 42.6867 14.7184 43.6545C14.5876 43.9221 14.5662 44.2212 14.6579 44.5011C14.7497 44.781 14.9489 45.0244 15.2217 45.1901C15.5205 45.4232 15.7992 45.6755 16.0556 45.9447C16.4118 46.2828 16.7579 46.5252 17.3579 46.3124C17.5825 46.2108 17.8372 46.1721 18.0877 46.2016C18.3382 46.2311 18.5723 46.3274 18.7584 46.4774C19.1765 46.7306 19.6899 46.8322 20.1913 46.761C22.2411 46.7452 24.2864 46.8899 26.3417 46.7745C28.9341 46.5974 31.535 46.5351 34.1345 46.5876C35.4221 46.6024 36.7064 46.4686 37.9543 46.1897C38.3443 46.1475 38.7019 45.9781 38.956 45.715C39.2101 45.4519 39.3421 45.1146 39.3257 44.77C39.3651 44.4214 39.3467 44.0675 39.349 43.716C39.3559 42.6797 39.0589 41.5894 40.0463 40.7284C40.0787 40.694 40.0967 40.651 40.0975 40.6064C40.1142 40.2787 40.3524 39.8108 39.8327 39.7165C39.3664 39.632 38.7943 39.7334 38.9818 40.4176C39.0601 40.703 38.9133 40.8701 38.6094 41.0408C37.4389 41.6982 37.4518 41.7159 38.15 42.8279C38.728 43.7486 38.4031 44.4732 37.0548 44.9091Z"
          fill="currentcolor"
        />
        <path
          d="M33.546 4.98489C33.6354 6.03635 34.038 7.04873 34.7137 7.92052C33.4951 7.88582 33.5658 6.77207 32.8956 6.29145C32.2116 5.80092 31.6026 5.22982 30.863 4.61238C31.7009 4.52497 31.9658 5.16057 32.5981 5.35345C32.5129 4.39638 31.5366 4.18214 30.7881 3.69416C31.0393 3.55171 31.3405 3.49329 31.6368 3.52956C31.933 3.56584 32.2045 3.69439 32.4017 3.89177C32.9352 4.33316 33.4084 4.71119 34.2027 4.5135C34.3528 4.48932 34.5078 4.51508 34.6374 4.58576C35.6505 5.13563 36.1776 6.06987 36.8568 6.8676C37.0952 7.15646 37.2372 7.49797 37.2667 7.85375C37.2961 8.20953 37.212 8.56547 37.0236 8.88157C36.4997 8.09629 36.4434 7.22531 35.7974 6.65326C35.1527 6.08237 34.7997 5.21052 33.546 4.98489Z"
          fill="currentcolor"
        />
        <path
          d="M36.3721 19.692C35.7367 19.1421 35.7517 18.3225 34.9611 18.0995C34.7028 18.1577 34.7684 18.3607 34.7436 18.5125C34.7102 18.7164 34.5932 18.8488 34.3654 18.816C34.295 18.8035 34.2288 18.7768 34.1721 18.7381C34.1154 18.6994 34.0696 18.6497 34.0384 18.5929C33.8013 17.743 33.5748 16.8899 33.3866 16.0308C33.3788 15.9755 33.3843 15.9193 33.4028 15.8659C33.4213 15.8125 33.4524 15.7632 33.4941 15.7211C33.5358 15.6789 33.5871 15.645 33.6447 15.6214C33.7023 15.5978 33.7649 15.5852 33.8285 15.5842C34.1411 15.5556 34.5233 15.652 34.4821 15.9665C34.3631 16.8768 35.0298 17.1952 35.805 17.456C36.0563 17.5405 36.2898 17.6568 36.2844 17.8978C36.2726 18.4354 36.5842 18.9656 36.3721 19.692Z"
          fill="currentcolor"
        />
        <path
          d="M38.8385 21.1011C39.539 19.2957 39.1223 17.4818 39.0487 15.6694C39.038 15.4067 39.0176 15.1442 38.9977 14.8819C38.9784 14.6255 38.5374 14.2511 39.1378 14.1639C39.5206 14.1083 39.7601 14.4926 39.7901 14.7758C39.8637 15.4726 39.8481 16.1776 39.8476 16.8794C39.8467 18.1874 40.061 19.5166 39.3778 20.7622C39.2963 20.9107 39.2928 21.1121 38.8385 21.1011Z"
          fill="currentcolor"
        />
        <path
          d="M9.47838 20.6937C10.4803 20.2031 11.1663 20.2965 11.3427 20.8182C11.6031 21.5879 12.2538 21.8093 12.8691 22.2147C13.4279 22.6912 13.9101 23.2323 14.3024 23.8232C13.8295 24.2261 13.7086 23.8807 13.5341 23.7041C13.1748 23.3403 12.8334 22.9624 12.4657 22.6054C12.2674 22.4128 12.1068 22.245 11.7991 22.5979C11.4903 22.9523 11.1513 22.7545 11.1002 22.3613C11.1215 21.9546 10.9658 21.556 10.6646 21.2463C10.3634 20.9366 9.93936 20.7391 9.47838 20.6937Z"
          fill="currentcolor"
        />
        <path
          d="M35.2719 14.3521C34.4772 14.305 34.1833 14.0132 34.1303 13.528C34.0912 13.222 34.1029 12.9127 34.1648 12.6096C34.2612 12.2664 34.2509 11.9069 34.1353 11.5684C34.0196 11.2299 33.8026 10.9248 33.507 10.6849C33.0713 10.2928 32.7922 9.78734 32.7114 9.24426C34.1544 10.1999 35.2141 11.0817 34.7614 12.6113C34.7085 12.9167 34.7265 13.2283 34.8142 13.5274C34.902 13.8265 35.0577 14.107 35.2719 14.3521Z"
          fill="currentcolor"
        />
        <path
          d="M31.2276 33.5637C31.0604 31.8646 31.1635 30.1535 31.5338 28.4794C31.6206 28.4755 31.7072 28.49 31.7862 28.5217C31.8652 28.5534 31.9343 28.6014 31.9877 28.6616C32.0411 28.7218 32.0771 28.7924 32.0927 28.8674C32.1084 28.9424 32.1032 29.0196 32.0775 29.0925C31.7218 30.4678 31.8757 31.8733 31.7005 33.2574C31.6938 33.3104 31.5623 33.3512 31.2276 33.5637Z"
          fill="currentcolor"
        />
        <path
          d="M36.9152 25.504C36.7056 25.3092 36.5482 25.0758 36.4544 24.8208C36.3606 24.5658 36.3328 24.2956 36.3731 24.03C36.4444 23.4217 36.8186 22.878 36.9418 22.2647C37.0682 21.6354 36.4169 21.1753 36.4962 20.5025C37.9468 21.5543 37.9555 21.5831 37.4433 22.9248C37.2846 23.3405 37.1615 23.7676 36.9829 24.1763C36.8077 24.5776 37.3372 24.9917 36.9152 25.504Z"
          fill="currentcolor"
        />
        <path
          d="M35.4957 35.0182C35.1912 33.1495 36.1991 31.3761 36.017 29.5159C35.9997 29.3392 36.2453 29.2547 36.4596 29.203C36.8659 31.2343 35.9268 33.0931 35.4957 35.0182Z"
          fill="currentcolor"
        />
        <path
          d="M38.7253 12.0815C38.6479 12.2873 39.1928 12.8025 38.6184 12.8748C37.9703 12.9564 38.1491 12.3225 38.1145 11.9921C38.0304 11.2078 37.781 10.444 37.379 9.73961C37.2932 9.5866 37.1678 9.40828 37.4017 9.29177C37.4566 9.26499 37.5172 9.24851 37.5798 9.24339C37.6423 9.23827 37.7054 9.2446 37.765 9.262C37.8246 9.2794 37.8795 9.30747 37.9261 9.34445C37.9726 9.38143 38.01 9.4265 38.0357 9.47681C38.5857 10.2548 38.8281 11.1703 38.7253 12.0815Z"
          fill="currentcolor"
        />
        <path
          d="M37.1073 16.3543C37.3506 15.0923 36.387 14.0574 36.2665 12.8056C36.5896 12.9883 36.8681 13.2256 37.0856 13.5037C37.3032 13.7818 37.4556 14.0951 37.5338 14.4254C37.6121 14.7557 37.6147 15.0963 37.5415 15.4275C37.4682 15.7586 37.3206 16.0737 37.1073 16.3543Z"
          fill="currentcolor"
        />
        <path
          d="M33.6875 27.2062C34.6322 28.3913 34.6731 29.681 33.9165 31.5927C33.6865 30.0379 34.1402 28.611 33.6875 27.2062Z"
          fill="currentcolor"
        />
        <path
          d="M37.3994 35.3131C37.0018 34.4184 37.4589 33.5937 37.4641 32.7391C37.4655 32.512 37.5678 32.2918 37.8918 32.3448C38.1137 32.3811 38.1479 32.5868 38.1442 32.7556C38.0577 33.6383 37.8061 34.5023 37.3994 35.3131Z"
          fill="currentcolor"
        />
        <path
          d="M10.7266 18.8054C11.6176 18.9344 11.8363 19.5409 12.2802 19.9056C12.5034 20.089 12.9631 20.3076 12.5138 20.6119C12.1437 20.8626 11.8824 20.5139 11.6616 20.2968C11.1893 19.8914 10.864 19.3725 10.7266 18.8054Z"
          fill="currentcolor"
        />
        <path
          d="M29.6541 7.1568C29.2419 6.34372 28.503 5.6923 27.5785 5.32684C29.1418 5.13041 29.845 5.83777 29.6541 7.1568Z"
          fill="currentcolor"
        />
        <path
          d="M32.1801 36.7062C32.365 35.9251 32.5499 35.1439 32.7348 34.3628C33.2831 35.2732 32.8929 36.0391 32.5451 36.8113L32.1801 36.7062Z"
          fill="currentcolor"
        />
        <path
          d="M34.5259 25.8717C34.2573 25.4147 34.0907 24.9681 33.8356 24.5505C33.8062 24.5153 33.7864 24.4746 33.7779 24.4316C33.7693 24.3885 33.7723 24.3444 33.7865 24.3025C33.8007 24.2607 33.8257 24.2223 33.8597 24.1903C33.8936 24.1584 33.9355 24.1338 33.9821 24.1185C34.0767 24.0879 34.1805 24.0876 34.2753 24.1176C34.3701 24.1476 34.4498 24.206 34.5003 24.2825C34.6786 24.5171 34.7758 24.7918 34.7804 25.0738C34.7849 25.3557 34.6965 25.6328 34.5259 25.8717Z"
          fill="currentcolor"
        />
        <path
          d="M30.3794 10.3143C29.9205 9.82968 30.0082 9.15237 29.306 8.6359C30.685 8.93079 30.685 8.93079 30.3794 10.3143Z"
          fill="currentcolor"
        />
        <path
          d="M14.5716 31.807C15.5411 32.1505 15.5843 32.9422 15.7314 33.6914C15.1518 33.1707 14.75 32.5179 14.5716 31.807Z"
          fill="currentcolor"
        />
        <path
          d="M31.05 2.80955C31.1784 2.65119 31.3425 2.51764 31.5321 2.41713C31.7216 2.31663 31.9327 2.25131 32.1521 2.22521C32.213 2.21849 32.2748 2.2224 32.334 2.23671C32.3932 2.25101 32.4486 2.27544 32.497 2.30858C32.5454 2.34172 32.5858 2.38292 32.616 2.42982C32.6462 2.47671 32.6656 2.52839 32.673 2.58187C32.755 2.86067 32.5574 2.96911 32.2752 2.9617C31.8587 3.00268 31.4372 2.95033 31.05 2.80955Z"
          fill="currentcolor"
        />
        <path
          d="M35.3209 36.9165C35.75 36.7222 35.971 36.8201 36.1242 36.9998C36.3579 37.2738 36.6951 37.6534 36.2514 37.8928C35.8102 38.1307 35.768 37.6304 35.6125 37.397C35.5154 37.2512 35.431 37.099 35.3209 36.9165Z"
          fill="currentcolor"
        />
        <path
          d="M24.6975 42.1905C23.5381 42.1905 22.3782 42.2053 21.2196 42.1778C21.1566 42.1782 21.0943 42.1661 21.0373 42.1423C20.9804 42.1186 20.9304 42.0839 20.891 42.0407C20.8515 41.9976 20.8237 41.9472 20.8097 41.8933C20.7956 41.8394 20.7956 41.7834 20.8097 41.7295C20.8579 41.509 21.0727 41.4842 21.2703 41.4992C22.4346 41.5878 23.6787 41.2599 24.6975 42.1905Z"
          fill="currentcolor"
        />
        <path
          d="M17.6494 43.3711C17.5664 43.5769 17.5376 43.7965 17.565 44.0135C17.5925 44.2304 17.6754 44.4391 17.8078 44.624C17.9169 44.8144 17.9215 45.0682 17.5804 45.1326C17.3253 45.1807 17.2152 44.9761 17.1761 44.8302C16.9172 43.8626 17.0033 42.8391 16.5629 41.896C16.5316 41.829 16.6673 41.6412 16.7721 41.5989C16.8653 41.5686 16.9675 41.5672 17.0618 41.5949C17.156 41.6226 17.2366 41.6778 17.2902 41.7512C17.7566 42.2344 17.6331 42.8139 17.6494 43.3711Z"
          fill="currentcolor"
        />
        <path
          d="M25.1356 43.8237C24.4278 43.9441 23.7217 44.0731 23.0112 44.1794C22.9154 44.2038 22.8128 44.1965 22.7228 44.1589C22.6328 44.1213 22.5616 44.056 22.5228 43.9754C22.4507 43.7715 22.6226 43.6619 22.8367 43.6248C23.5848 43.4955 24.3294 43.1446 25.1356 43.8237Z"
          fill="currentcolor"
        />
        <path
          d="M32.6383 43.9064C33.2253 44.1244 33.1766 44.502 33.1954 44.8312C33.2152 45.1775 33.1943 45.6697 32.7344 45.663C32.1301 45.6543 32.4702 45.1405 32.4393 44.8479C32.3705 44.5233 32.4414 44.1878 32.6383 43.9064Z"
          fill="currentcolor"
        />
        <path
          d="M35.7247 41.7308C35.2813 42.3584 35.5843 43.1933 34.9675 43.9033C34.8626 43.5148 34.8774 43.1088 35.0105 42.727C35.1436 42.3452 35.3901 42.0013 35.7247 41.7308Z"
          fill="currentcolor"
        />
        <path
          d="M31.278 43.8726C31.1435 43.4048 31.1052 42.9196 31.165 42.44C32.0083 43.023 32.0101 43.047 31.278 43.8726Z"
          fill="currentcolor"
        />
        <path
          d="M34.2119 42.4489C34.203 42.6367 34.1706 42.8128 33.9118 42.8023C33.4824 42.7849 33.3778 42.4902 33.2995 42.194C33.2539 42.0213 33.2787 41.8025 33.5004 41.7884C34.0136 41.7556 34.0738 42.1516 34.2119 42.4489Z"
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

export default HanskeImg;
