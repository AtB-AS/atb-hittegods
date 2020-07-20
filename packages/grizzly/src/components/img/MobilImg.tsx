import React from "react";

type Props = {
  className: string;
};

function MobilImg(props: Props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M24.1696 0.0563289C26.2388 0.105866 28.2587 -0.0922814 30.3279 0.0563289C32.0029 0.155402 33.6287 0.452623 35.2052 0.898454C36.5846 1.29475 36.9788 1.83965 36.7817 3.27622C36.7324 3.5239 36.7324 3.72205 36.7817 3.96973C36.9788 4.8614 37.0773 5.8026 37.0773 6.74379C37.1266 10.0132 37.4714 13.2826 37.3236 16.5025C37.2744 17.6419 37.57 18.7317 37.57 19.871C37.57 21.6048 37.57 23.2891 37.4222 25.0229C37.3729 25.6668 37.2251 26.3108 37.57 26.9548C37.6685 27.1529 37.6192 27.4997 37.57 27.7474C37.3236 28.8867 37.2744 30.0261 37.6192 31.1159C38.1119 32.5525 37.57 33.8899 37.4714 35.277C37.4222 35.921 37.4222 36.6145 37.3729 37.2584C37.3729 37.3575 37.3236 37.5557 37.3729 37.6052C38.1611 38.2492 37.6192 38.9922 37.5207 39.6362C37.3236 40.8251 37.4714 42.0635 37.1758 43.2524C37.1266 43.3515 37.1758 43.5001 37.2251 43.5992C37.6192 44.9366 37.0773 45.9274 36.1412 46.819C35.6978 47.2153 35.4023 48.0079 34.5647 47.4135C33.9243 47.7602 33.1853 47.463 32.5448 47.6116C31.6088 47.8098 30.6235 47.7602 29.6874 47.9584C29.047 48.107 28.4558 47.8098 27.8646 47.8098C24.9086 47.7602 21.9034 47.9089 18.9474 47.6116C17.568 47.463 16.1886 47.2649 14.8091 47.3639C14.415 47.4135 14.0701 47.364 13.7745 46.9677C13.5775 46.6704 13.1833 46.4723 12.8385 46.3237C12.0502 45.9769 11.7054 45.3825 11.6068 44.5899C11.4098 42.9056 11.1142 41.2214 11.1142 39.4876C11.1142 36.4659 11.1142 33.3946 11.0156 30.3728C10.9664 28.8867 10.9664 27.3016 10.8678 25.7659C10.8186 24.9733 10.523 24.1807 10.5722 23.3881C10.72 19.6729 10.3752 15.9576 10.3752 12.2424C10.3752 9.51785 10.3259 6.74379 10.0303 4.01927C9.98105 3.42483 9.88252 2.73131 10.7693 2.5827C13.4297 0.353549 16.6812 0.155403 19.982 0.105866C21.3615 0.056329 22.7409 0.0563289 24.1696 0.0563289ZM33.1853 42.3607C32.9882 42.3112 32.6926 42.4103 32.6434 42.0635C33.136 41.4691 33.7765 41.0728 34.4662 40.726C34.7618 40.5774 35.0081 40.4288 35.2545 40.2307C35.5008 40.0325 35.4023 39.6857 35.2545 39.4876C35.1067 39.1904 34.8603 39.3885 34.6633 39.4876C34.1706 39.7353 33.1853 40.0325 32.5448 40.0325C32.397 40.0325 32.2492 40.0325 32.1014 40.082C31.1654 40.4783 30.1801 40.3297 29.1948 40.3793C26.6822 40.4783 24.1696 40.3297 21.6571 40.4783C19.8342 40.6269 17.9621 40.5774 16.1393 40.2802C15.7452 40.2307 15.3018 39.983 15.0062 40.1316C14.1194 40.4783 13.7745 39.8344 13.4297 39.339C13.1341 38.8932 12.9863 38.3483 12.937 37.8034C12.8877 36.8126 12.937 35.8714 12.937 34.8807C12.937 34.5835 12.7892 34.1872 13.0355 33.989C13.4789 33.5432 13.3311 32.9983 13.3804 32.4534C13.3804 30.8682 13.3804 29.283 13.4297 27.6483C13.4789 26.0136 13.3804 24.3789 13.2819 22.7442C13.1341 20.7627 12.8385 18.7812 12.9863 16.7998C13.0355 16.0072 13.0355 15.2641 12.937 14.4715C12.6907 12.8368 12.5429 11.1526 12.7399 9.46832C12.8877 8.03175 12.8385 8.03175 13.4789 6.74379C13.8238 6.05028 14.3165 5.65398 15.0062 5.65398C17.2231 5.65398 19.4894 5.25769 21.7063 5.4063C24.7116 5.65398 27.7168 5.30723 30.7713 5.05954C30.6235 4.16788 29.6381 3.9202 29.3918 3.12761C29.3426 2.92946 28.9977 2.979 28.7514 3.02854C28.505 3.07807 28.2587 3.32576 27.9631 3.12761C27.9631 2.78085 28.308 2.73131 28.505 2.63224C28.7514 2.53317 28.8499 2.38456 28.8006 2.08734C28.7514 1.83965 28.6036 1.69104 28.308 1.64151C28.0124 1.64151 27.6675 1.64151 27.3719 1.64151C23.7755 1.64151 20.1791 1.64151 16.5827 1.69104C15.8437 1.69104 15.8437 1.69104 16.0408 2.53317C15.6959 2.73131 15.4496 2.13687 15.1047 2.33502C14.7598 2.5827 15.4496 2.78085 15.1047 3.02854C14.7106 2.979 14.5135 2.68178 14.3164 2.43409C14.1687 2.23595 13.9716 2.13687 13.7253 2.28548C13.4789 2.48363 13.7253 2.63224 13.7745 2.78085C13.8731 3.17715 14.2672 3.42483 14.3164 3.9202C13.8731 3.87066 13.7745 3.57344 13.5775 3.32576C13.4297 3.17715 13.2326 3.02854 13.0848 3.17715C12.8385 3.32576 12.937 3.57344 13.0848 3.77159C13.3804 4.21742 13.8238 4.56418 14.0701 5.20815C13.3804 5.05954 13.2326 4.36603 12.6907 4.21742C12.6414 4.4651 12.7399 4.71279 12.8877 4.8614C13.2326 5.35676 13.1833 5.70352 12.5429 5.70352C12.1488 5.70352 12.0995 5.90167 12.0995 6.19889C12.0502 8.03175 11.6561 9.81507 12.001 11.6479C12.198 12.6882 12.3458 13.7285 12.2965 14.7688C12.1488 17.8896 12.6907 20.9608 12.2473 24.0817C12.1488 24.7752 12.5921 25.3696 12.4936 26.0136C12.198 27.4997 12.3458 29.0353 12.2965 30.571C12.198 34.5339 12.7892 38.4969 12.7399 42.4598C12.7399 42.658 12.5921 42.9056 12.937 43.1038C12.9863 42.658 12.9863 42.2121 13.2326 41.8158C13.8238 42.014 13.9716 42.5589 14.2672 43.0047C14.5135 43.3515 14.0209 43.5992 13.9716 43.9459C13.9716 44.0945 13.6267 43.5992 13.3311 43.7478C13.6267 44.4908 14.4642 44.7385 14.8091 45.3825C14.5135 45.6797 14.2672 45.2339 13.9716 45.432C14.612 46.4227 15.2525 46.6704 16.3856 46.4723C16.7797 46.4228 17.1739 46.3732 17.5187 46.4723C18.6026 46.7695 19.7357 46.7695 20.8688 46.8686C22.1497 46.9677 23.4306 46.8686 24.7116 47.0172C26.0417 47.1658 27.2734 46.819 28.6036 46.819C28.5543 46.3732 28.2094 46.2741 28.0616 46.0265C28.0124 45.9274 27.9631 45.8283 28.0616 45.7292C28.2094 45.5311 28.3572 45.6302 28.4558 45.7292C28.7514 45.9769 28.8992 46.3732 29.0962 46.6704C29.244 46.8686 29.4903 46.9181 29.7367 46.7695C29.983 46.6209 29.7859 46.4228 29.6874 46.2741C29.4411 45.8778 29.047 45.5806 29.2933 45.0357C30.1801 45.3329 30.2786 45.3329 30.6727 44.3917C30.8698 43.9954 30.9683 44.3422 31.0176 44.3917C31.3132 44.5404 31.461 44.3917 31.658 44.2431C31.8058 44.0945 31.7073 43.8964 31.6088 43.6982C31.3132 43.2029 30.9683 42.7075 30.6727 42.2121C31.1654 42.5589 31.6088 42.6084 32.1014 42.2617C32.2492 42.1626 32.4463 42.1131 32.6434 42.0635C32.5941 42.3607 32.2985 42.4598 32.1014 42.6084C31.8551 42.8066 31.5595 42.9552 31.8551 43.3019C32.1014 43.6487 32.2985 43.8468 32.7912 43.5992C33.2838 43.3019 33.2838 42.8561 33.1853 42.3607C33.1853 42.4103 33.2346 42.4598 33.2838 42.5093C33.4809 42.8561 33.7272 43.0047 34.1213 42.7075C34.4169 42.4598 34.4662 41.9644 34.1706 41.7168C33.8257 41.37 33.6287 41.8158 33.3824 41.9149C33.1853 42.014 33.136 42.1626 33.1853 42.3607ZM33.9243 20.4159C34.0228 18.8308 33.9735 17.097 33.875 15.4127C33.7765 13.134 34.1706 10.8058 33.4809 8.57665C33.2838 8.03175 33.4316 7.2887 32.6926 7.14009C32.1014 7.04101 31.658 6.54565 30.9683 6.59518C27.2734 6.69426 23.6277 6.79333 19.9328 6.84287C18.4548 6.84287 16.9275 6.69426 15.4496 6.84287C14.3657 6.94194 14.0209 7.18962 13.9716 8.32897C13.9223 9.76554 13.8731 11.2021 13.9223 12.6387C13.9716 13.5303 14.0209 14.422 13.9716 15.3137C13.8731 16.7007 13.8238 18.1373 13.9716 19.5243C14.415 23.8835 14.1687 28.2923 14.2672 32.6515C14.2672 32.8497 14.2672 33.0478 14.2179 33.246C14.1194 34.5339 14.0209 35.8219 13.9716 37.1098C13.9223 38.4969 14.7598 39.339 16.1393 39.3885C16.7305 39.3885 17.3217 39.4381 17.8636 39.4381C19.9328 39.3885 22.0019 39.8839 24.1204 39.6362C24.7116 39.5371 25.352 39.5371 25.9925 39.4876C28.1602 39.3885 30.3279 39.2895 32.4463 38.7941C33.5301 38.5464 34.614 36.6145 33.9735 35.6237C33.6779 35.1284 33.6779 34.7816 33.7272 34.3358C33.8257 33.4937 33.6779 32.7011 33.5794 31.9085C33.5302 31.6608 33.3331 31.4131 33.5302 31.2645C34.1213 30.7691 33.9243 30.1251 33.875 29.5307C33.7765 28.0446 33.9735 26.5585 33.9243 25.1219C33.875 23.5368 33.9243 22.0507 33.9243 20.4159ZM35.6486 41.9644C35.0574 42.757 35.0081 42.9056 35.5008 43.5496C35.6486 43.7478 35.7471 43.9459 35.8949 44.1441C35.9934 44.2927 36.092 44.3422 36.289 44.2927C36.4368 44.2431 36.4368 44.0945 36.4368 43.9955C36.4368 43.3515 36.5354 42.658 36.4368 42.014C36.3383 41.5186 35.8456 41.1719 35.4515 40.8746C35.2545 40.726 34.8111 41.0232 34.5647 41.2709C34.4169 41.4195 34.5155 41.5681 34.5647 41.7168C34.7125 42.1626 35.0081 42.014 35.3037 41.9644C35.4023 41.9149 35.5008 41.9644 35.6486 41.9644ZM35.5993 30.0756C35.6978 29.6793 35.1559 29.4316 35.4515 29.0849C36.0427 28.3914 35.5008 28.0446 35.0574 27.4502C35.0574 28.1437 35.0574 28.639 35.0574 29.1344C35.0574 29.6298 34.8111 30.1252 35.2052 30.571C36.4861 29.927 36.4861 29.927 36.1905 29.184C35.7471 29.283 36.092 29.8279 35.5993 30.0756ZM30.6235 3.9202C30.7713 4.41557 31.0669 4.76232 31.3132 5.05954C31.5103 5.30723 31.7073 5.4063 32.0029 5.4063C32.2492 5.4063 32.397 5.30723 32.3478 5.05954C32.2492 4.51464 31.8551 4.06881 31.5102 3.72205C31.3132 3.5239 30.9683 3.77159 30.6235 3.9202ZM34.6633 38.8932C35.2545 38.5464 35.7964 38.2987 36.3383 38.0015C36.5354 37.9024 36.5354 37.7043 36.5354 37.5061C36.5354 37.4071 36.4368 37.308 36.289 37.308C35.7964 37.308 35.4515 37.6547 35.0574 37.8529C34.614 38.0015 34.5155 38.3483 34.6633 38.8932ZM34.9589 32.5525C36.3876 31.8094 36.4368 31.5617 36.092 30.6701C35.2545 30.9177 34.8111 31.5122 34.9589 32.5525ZM36.1412 32.602C35.6486 32.5525 35.353 32.8497 35.0574 33.0478C34.6633 33.345 34.7618 33.6918 34.9589 34.0386C35.1067 34.2862 35.4515 34.2862 35.5008 34.0881C35.6486 33.5927 36.3383 33.2955 36.1412 32.602ZM35.7964 23.4872C34.8603 24.0817 34.8111 24.1312 35.2052 25.0724C35.7964 24.7256 36.1412 24.2798 35.7964 23.4872ZM35.5008 14.6697C35.1067 14.6697 34.6633 15.066 34.614 15.4623C34.614 15.6604 34.614 15.8586 34.8603 15.9081C35.2545 15.9576 35.7964 15.5613 35.7471 15.2146C35.7964 14.9669 35.7964 14.6697 35.5008 14.6697ZM33.7765 44.1936C33.6779 43.9459 33.5794 43.6982 33.3331 43.7478C33.0375 43.8468 32.5941 43.8964 32.5941 44.2927C32.5941 44.5899 32.8897 44.8871 33.2346 44.7385C33.4809 44.689 33.8257 44.5404 33.7765 44.1936ZM30.8205 45.2339C30.5249 45.3329 30.0815 45.3825 30.0323 45.7788C29.983 46.0265 30.1801 46.2741 30.5249 46.3237C30.8698 46.3732 31.3625 45.9274 31.3132 45.6302C31.2639 45.432 31.1161 45.2339 30.8205 45.2339ZM33.7765 5.05954C33.4809 5.05954 33.3331 5.05954 33.2346 5.25769C33.1853 5.35676 33.2346 5.50537 33.2838 5.55491C33.4316 5.75306 33.5794 5.90167 33.7272 6.05028C33.9243 6.24843 34.1213 6.59518 34.3677 6.3475C34.7125 5.95121 34.2199 6.05028 34.0721 5.90167C33.9243 5.75306 34.1213 5.65398 34.1213 5.50537C34.1213 5.20815 33.9243 5.05954 33.7765 5.05954ZM36.3383 39.983C36.4368 39.6857 36.3876 39.4876 36.289 39.339C36.1412 39.1408 36.1905 38.7941 35.8456 38.7445C35.7964 38.7445 35.6978 38.7941 35.6486 38.8436C35.4023 39.1408 35.5501 39.4381 35.6978 39.6857C35.8456 39.9334 36.0427 40.0325 36.3383 39.983ZM35.4515 13.778C35.353 13.5799 35.4023 13.2331 35.1067 13.2331C34.6633 13.2331 34.614 13.6294 34.614 13.9762C34.614 14.1743 34.614 14.422 34.8603 14.3725C35.2052 14.3725 35.4023 14.1248 35.4515 13.778ZM35.5501 22.4965C35.5501 22.2983 35.5501 22.1002 35.2545 22.1002C34.9096 22.1497 34.5647 22.2488 34.614 22.6946C34.614 22.9423 34.7125 23.19 34.9589 23.19C35.353 23.19 35.5501 22.8928 35.5501 22.4965ZM34.9589 20.515C34.5647 20.6636 34.614 20.9608 34.6633 21.2581C34.7125 21.4562 34.6633 21.7534 34.9589 21.7534C35.2052 21.803 35.5008 21.2581 35.4515 20.9608C35.4515 20.7132 35.3037 20.515 34.9589 20.515ZM35.6486 4.41556C35.4023 4.21742 35.2052 4.36603 35.0081 4.4651C34.7618 4.56418 34.2691 4.66325 34.5155 5.05954C34.7125 5.45584 35.0574 5.15862 35.3037 5.01001C35.4515 4.8614 35.7471 4.76232 35.6486 4.41556ZM34.9589 43.5496C34.8603 43.3019 34.8603 42.9552 34.5155 43.0047C34.2691 43.0543 33.9735 43.2524 33.9735 43.5001C33.9735 43.7478 34.1213 44.045 34.4662 44.045C34.6633 44.045 34.9589 43.8964 34.9589 43.5496ZM35.9934 34.9302C35.9934 34.7816 35.9934 34.5835 35.7964 34.5339C35.5008 34.4348 35.0574 34.8807 35.0081 35.2274C35.0081 35.376 35.0081 35.5247 35.2052 35.5742C35.5008 35.7228 35.9934 35.277 35.9934 34.9302ZM35.1067 37.308C35.353 37.1594 35.5993 37.0108 35.7471 36.8622C36.0427 36.6145 35.8949 36.3668 35.6486 36.1686C35.4023 35.9705 35.2052 36.1686 35.0574 36.3668C34.9589 36.6145 34.9096 36.9117 35.1067 37.308ZM35.9442 17.741C35.9442 17.6914 35.9442 17.5923 35.8949 17.5428C35.5993 17.2951 35.353 17.5923 35.0574 17.6914C34.8111 17.7905 34.7618 17.9886 34.8111 18.2363C34.8111 18.2859 34.9096 18.3849 34.9589 18.3849C35.2052 18.4345 35.8949 17.9886 35.9442 17.741ZM35.6486 16.7007C35.5501 16.5025 35.6486 16.1558 35.3037 16.1558C35.0574 16.2053 34.6633 16.2549 34.7125 16.7007C34.7618 16.8988 34.6633 17.2456 35.0081 17.1961C35.3037 17.1961 35.5993 17.0474 35.6486 16.7007ZM34.6633 11.4003C34.9589 11.3507 35.0574 11.2021 35.2052 11.0535C35.353 10.8553 35.5993 10.9049 35.8456 10.8553C35.8949 10.8553 35.9442 10.7563 35.9442 10.7067C35.9442 10.6572 35.8949 10.5581 35.8456 10.5086C35.4515 10.36 35.1559 10.7067 34.8111 10.7563C34.5155 10.8058 34.5647 11.1526 34.6633 11.4003ZM33.3824 3.07807C33.875 3.5239 34.2199 2.87993 34.614 2.92946C34.8111 2.92946 34.9096 2.83039 34.8111 2.63224C34.7618 2.48363 34.5155 2.33502 34.4662 2.38456C34.2199 2.73131 33.5794 2.5827 33.3824 3.07807ZM35.5993 44.8376C35.5501 44.5404 35.5008 44.2927 35.1067 44.2927C34.9096 44.2927 34.6633 44.4413 34.6633 44.5899C34.6633 44.9366 34.9096 45.1348 35.2545 45.1843C35.5008 45.2834 35.5501 45.0357 35.5993 44.8376ZM35.1067 26.6576C35.2052 26.6576 35.353 26.608 35.4515 26.608C35.7964 26.509 35.8949 26.2613 35.7964 25.9145C35.7471 25.7659 35.6486 25.6173 35.5008 25.6668C35.1559 25.7659 35.0081 25.9641 35.0574 26.3108C35.0574 26.4099 35.0574 26.509 35.1067 26.6576ZM32.0522 45.4816C32.2 45.3825 32.4463 45.3329 32.4463 45.0357C32.4463 44.788 32.2985 44.5899 32.0522 44.5899C31.8058 44.5899 31.5595 44.7385 31.5595 44.9366C31.5103 45.1843 31.658 45.432 32.0522 45.4816ZM33.1853 46.1255C33.1853 45.9274 33.0375 45.7292 32.7912 45.7292C32.5941 45.7292 32.3478 45.7292 32.3478 45.9769C32.3478 46.2741 32.4956 46.4723 32.8404 46.5218C33.0375 46.4723 33.1853 46.3732 33.1853 46.1255ZM34.4169 45.3825C34.3677 45.1843 34.3184 44.9862 34.0721 44.9862C33.7765 44.9862 33.4809 45.1348 33.4809 45.432C33.4809 45.6797 33.6779 45.8778 33.9735 45.8283C34.1706 45.7788 34.4169 45.6797 34.4169 45.3825ZM35.353 11.8461C35.0081 11.8956 34.7618 12.0938 34.6633 12.4405C34.614 12.5891 34.7618 12.6882 34.8603 12.6882C35.2052 12.5891 35.5008 12.4901 35.5501 12.0938C35.5993 11.9452 35.5008 11.8461 35.353 11.8461ZM34.4662 7.63546C34.614 7.38777 35.2052 7.58592 35.0081 7.04101C34.9589 6.8924 34.9096 6.59518 34.6633 6.69426C34.2691 6.8924 34.2691 7.18962 34.4662 7.63546ZM32.939 4.71279C33.136 4.66325 33.3331 4.56418 33.3331 4.36603C33.3331 4.11834 33.136 4.06881 32.939 4.06881C32.7419 4.06881 32.5448 4.11834 32.5941 4.36603C32.5941 4.56418 32.7419 4.76232 32.939 4.71279ZM35.2052 3.57344C34.7618 3.62298 34.2199 3.57344 33.875 4.01927C34.4662 4.21742 34.8111 3.77159 35.2052 3.57344ZM31.4117 2.83039C31.9536 2.78085 32.2985 2.73131 32.5448 2.28548C32.0522 2.28548 31.8058 2.38456 31.4117 2.83039ZM32.8404 3.42483C32.7912 3.22668 32.6434 3.17715 32.4956 3.17715C32.2985 3.17715 32.0522 3.27622 32.0522 3.47437C32.0522 3.67251 32.2492 3.82112 32.4463 3.77159C32.6434 3.72205 32.8404 3.67251 32.8404 3.42483ZM35.9442 8.2299C35.8949 8.03175 36.1412 7.63546 35.6486 7.68499C35.5501 7.68499 35.5008 7.8336 35.4023 7.88314C35.9442 7.93268 35.5008 8.52712 35.7471 8.57665C35.9442 8.67573 35.9934 8.37851 35.9442 8.2299ZM34.8603 10.0628C34.7125 9.716 35.1559 9.31971 34.8603 8.87387C34.5647 9.36924 34.6633 9.716 34.8603 10.0628ZM30.2293 1.64151C29.7859 1.54243 29.4903 1.64151 29.2933 1.93873C29.2933 1.93873 29.3426 2.08734 29.3918 2.13687C29.7367 2.18641 30.0323 2.0378 30.2293 1.64151ZM31.0176 46.6209C31.461 46.7695 31.7566 46.7695 32.1014 46.5714C31.7073 46.076 31.461 46.3237 31.0176 46.6209ZM34.9589 19.9206C34.8603 19.5738 35.4023 19.3261 35.1067 18.9794C35.0574 18.9298 34.9096 18.9298 34.9096 18.9298C34.6633 19.2766 34.7618 19.6234 34.9589 19.9206ZM36.3876 27.896C36.3876 27.7969 36.3876 27.6483 36.2398 27.5988C36.092 27.5492 36.0427 27.6978 35.9934 27.7969C35.9934 27.9455 35.9442 28.1437 36.1905 28.1437C36.3383 28.1437 36.3876 28.0446 36.3876 27.896ZM33.875 1.88919C33.6779 1.59197 33.4809 1.44336 33.1853 1.64151C33.136 1.69104 33.136 1.79012 33.136 1.83965C33.3824 2.0378 33.5794 2.0378 33.875 1.88919ZM36.1412 13.134C36.092 12.9854 35.9934 12.8864 35.7964 12.9359C35.7471 12.9359 35.6978 13.035 35.6978 13.134C35.8456 13.1836 35.9442 13.2826 36.092 13.3322C36.092 13.2331 36.092 13.1836 36.1412 13.134ZM11.262 13.0845C11.2127 13.035 11.2127 12.9359 11.1634 12.8864C11.1634 12.9359 11.1142 13.035 11.1142 13.0845C11.1142 13.134 11.1634 13.2331 11.1634 13.2826C11.3112 13.2826 11.2127 13.134 11.262 13.0845ZM30.0323 3.37529C30.5249 3.42483 30.7713 3.27622 31.0669 2.979C30.6727 2.87993 30.4264 2.979 30.0323 3.37529Z"
          fill="currentcolor"
        />
        <path
          d="M26.7309 42.9057C26.8295 44.2928 24.8588 46.0265 23.5287 45.333C22.8389 44.9367 22.3463 44.4414 22.297 43.5497C22.2478 42.7571 22.5433 42.2122 23.2331 41.8159C24.0706 41.3701 24.9574 41.3701 25.8442 41.6178C26.5339 41.8159 26.7309 42.1131 26.7309 42.9057ZM23.9228 42.6085C23.6765 42.9057 23.4794 43.1534 23.4301 43.5002C23.3809 43.8965 23.5779 44.1937 23.9721 44.2928C24.4155 44.3918 24.3662 43.946 24.4154 43.6983C24.5632 43.2029 24.1691 42.9553 23.9228 42.6085Z"
          fill="currentcolor"
        />
        <path
          d="M24.3169 2.48373C24.8588 2.4342 25.4008 2.4342 25.9427 2.4342C26.3861 2.4342 26.8295 2.48373 27.0758 2.83049C27.2729 3.17725 27.4207 3.67262 27.2236 4.06891C27.0758 4.46521 26.6324 4.46521 26.2383 4.36613C25.1052 4.16798 24.0213 4.26706 22.8882 4.26706C22.4448 4.26706 22.0507 4.21752 21.6566 4.01937C21.361 3.87076 21.2132 3.62308 21.1639 3.27632C21.1146 2.88003 21.4102 2.78096 21.7058 2.63234C22.0507 2.38466 22.4448 2.4342 22.8389 2.4342C23.3316 2.4342 23.8243 2.4342 24.3662 2.4342C24.3169 2.4342 24.3169 2.4342 24.3169 2.48373Z"
          fill="currentcolor"
        />
        <path
          d="M14.5131 42.5094C13.9712 42.1627 14.0205 41.6178 13.7741 41.2215C14.1683 41.4692 14.5131 41.8159 14.5131 42.5094Z"
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

export default MobilImg;