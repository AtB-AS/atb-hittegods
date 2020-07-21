import React from "react";

type Props = {
  className: string;
};

function LueImg(props: Props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M47.8993 41.0977C47.7606 40.5339 47.7086 39.9522 47.7449 39.3726C47.9332 37.7742 47.8713 36.2732 46.9383 34.8937C46.8564 34.7164 46.8132 34.5236 46.8117 34.3283C46.5319 32.2746 46.2228 30.2242 45.9866 28.1655C45.5408 24.2809 44.5994 20.6146 41.9959 17.5178C41.3875 16.794 40.5697 16.0947 40.4329 15.0523C40.3794 14.4825 40.1638 13.9399 39.8115 13.4889C39.4593 13.0379 38.9851 12.6972 38.4453 12.5072C37.7915 12.2374 37.0602 11.8206 36.9337 11.1701C36.6899 9.91715 35.8312 9.91506 34.9421 9.92849C34.4286 9.93626 33.8711 10.0001 33.5579 9.59621C32.7551 8.561 31.3155 8.35247 30.7416 6.87244C30.0629 5.12216 28.4036 3.92375 27.1665 2.48851C27.0695 2.3745 26.9506 2.28103 26.817 2.21357C26.6833 2.14612 26.5375 2.10603 26.3882 2.09568C25.1651 2.0327 23.9394 2.01534 22.7144 2C22.5635 2.0077 22.4215 2.07364 22.3182 2.18394C21.6178 2.99413 20.6007 3.13007 19.668 3.41322C19.117 3.56719 18.6071 3.84169 18.1751 4.21686C17.7431 4.59204 17.3999 5.05851 17.1703 5.58256C16.7498 6.51076 16.1166 7.38224 16.1389 8.47253C16.1479 8.91591 15.823 9.01938 15.5053 9.17794C12.2466 10.8038 10.2915 13.7926 8.05341 16.458C7.91249 16.6259 7.77836 16.7889 7.64303 16.944C7.21288 18.5034 6.59573 20.005 5.80502 21.4162C5.79155 21.4601 5.77929 21.503 5.76464 21.5482C5.70412 21.7294 5.6109 21.8981 5.4896 22.0458C4.92136 24.4917 4.13483 26.8818 3.13947 29.1872C3.15596 29.3991 3.19365 29.6089 3.25197 29.8133C3.46563 30.5336 3.42304 31.3057 3.13144 31.9981C2.99072 32.26 2.94459 32.5624 3.00082 32.8543C3.07529 33.1468 3.03461 33.4567 2.88717 33.7201C2.73973 33.9834 2.4968 34.1801 2.20854 34.2695C1.33484 34.6992 0.764316 35.3252 0.888687 36.3563C1.00081 37.2863 -0.365473 37.697 0.0952555 38.7307C0.150247 38.8691 0.183535 39.0151 0.193943 39.1637C0.313665 39.7457 0.36424 40.3398 0.344616 40.9337C0.0725336 42.893 1.48841 43.626 2.80796 44.3801C3.42003 44.7128 4.09422 44.9154 4.78826 44.9752C6.99144 45.1856 9.22003 45.1321 11.3951 45.6359C11.4932 45.6536 11.594 45.6507 11.691 45.6275C14.0866 45.1423 16.52 45.6161 18.9249 45.3446C19.27 45.2999 19.6204 45.3173 19.9593 45.3961C20.7898 45.5476 21.6438 45.509 22.4573 45.2831C23.9674 44.9949 25.5758 45.5589 27.0265 44.7456C27.1278 44.6888 27.327 44.7536 27.4582 44.8121C28.0664 45.0287 28.7203 45.0837 29.3561 44.9716C29.6987 44.9181 30.0494 44.957 30.3718 45.0844C31.1367 45.4599 32.0191 45.517 32.826 45.2434C33.2483 45.1011 33.7065 45.1073 34.1246 45.2611C34.5031 45.4032 34.9224 45.3898 35.2909 45.2236C37.482 44.2229 39.9643 45.1909 42.1568 44.1935C42.3496 44.1058 42.6408 44.2294 42.8853 44.2621C43.3759 44.3276 43.8658 44.3982 44.4724 44.4829C45.432 44.5315 46.1372 43.8381 46.9912 43.3388C47.3879 43.1381 47.6984 42.8005 47.8654 42.3885C48.0323 41.9765 48.0444 41.5179 47.8993 41.0977ZM45.3595 31.2369C45.2093 30.5688 45.0889 30.0332 44.9376 29.3605C45.5321 30.0406 45.5477 30.0396 45.3595 31.2369ZM43.3113 21.2634C43.4666 21.4587 43.6059 21.6661 43.728 21.8837C43.7979 22.0472 43.9542 22.2762 43.7371 22.407C43.4565 22.5762 43.2992 22.3317 43.1827 22.1212C43.0538 21.8883 43.1072 21.6497 43.3113 21.2634ZM18.8672 10.4931C19.503 9.76334 19.0738 8.94042 18.9745 8.22485C18.7065 6.29462 20.0361 5.33043 21.1724 4.26553C21.6642 3.80465 22.3802 3.95806 23.0064 4.18237C23.3705 4.31276 23.7521 4.69875 24.1106 4.47652C25.7867 3.4375 26.9127 5.08979 28.3451 5.24502C28.0512 5.44981 27.6984 5.55305 27.3404 5.53907C26.9824 5.52509 26.6388 5.39466 26.3617 5.16758C26.2102 5.94278 26.647 6.21341 26.8542 6.58524C27.0408 6.91996 27.2118 7.0172 27.6671 6.80525C28.4873 6.42346 28.7802 6.64023 29.0279 7.48504C29.1397 7.86636 29.1653 8.26776 29.103 8.66021C29.0407 9.05266 28.8919 9.42635 28.6674 9.75425C28.1852 10.4928 27.8339 11.309 27.629 12.1669C27.4274 13.0365 27.1621 13.1674 26.2922 12.8156C25.784 12.61 25.3941 12.8304 25.5209 13.1935C25.8522 14.1418 25.3262 13.5303 25.0383 13.5608C24.1785 13.694 23.299 13.606 22.4826 13.3051C21.1788 12.7309 20.0102 11.8891 19.0526 10.8343C18.9478 10.7299 18.7655 10.6099 18.8672 10.4931ZM17.3218 7.74441C17.4064 7.77909 17.4751 7.84424 17.5141 7.927C17.5532 8.00977 17.5599 8.10416 17.5328 8.19159C17.509 8.33659 17.3952 8.44742 17.2563 8.33777C17.1586 8.24558 17.0957 8.12242 17.0784 7.98916C17.0562 7.84131 17.1446 7.73157 17.3218 7.74441ZM2.80421 42.3874C2.43184 42.2081 2.12506 41.9165 1.92706 41.5537C1.72906 41.1909 1.64981 40.7752 1.70045 40.365C1.84058 39.3372 1.70274 38.3208 1.84039 37.3036C1.98094 36.2654 1.93318 36.2364 3.0245 35.4724C3.53284 36.6892 3.43367 40.1486 2.80421 42.3874ZM5.64661 43.6769C5.62114 43.7452 5.57326 43.8028 5.51079 43.8403C5.44833 43.8778 5.37498 43.893 5.30275 43.8835C4.85818 43.8925 4.41373 43.8605 3.97504 43.7879C3.86613 43.7716 3.76198 43.7321 3.66967 43.6721C3.57735 43.612 3.49901 43.5328 3.43997 43.4399C3.38092 43.3469 3.34254 43.2424 3.32742 43.1333C3.31231 43.0242 3.32082 42.9132 3.35237 42.8077C3.70875 40.6173 3.88593 38.4014 3.88214 36.1822C3.87831 35.9851 3.91631 35.7893 3.99361 35.6079C4.05998 35.4474 4.18435 35.3178 4.34196 35.2448C4.49958 35.1718 4.67889 35.1609 4.84421 35.2142C5.23953 35.2733 5.20256 35.4819 5.25615 35.8053C5.39348 36.5794 5.45695 37.3648 5.44571 38.1508C5.42565 38.9874 5.49871 39.8264 5.53861 40.664C5.55951 41.1022 5.75261 41.5843 5.51129 41.9657C5.21116 42.4399 4.67953 41.9348 4.27293 42.1183C4.18445 42.1463 4.10708 42.2016 4.05188 42.2762C3.99668 42.3509 3.96648 42.441 3.96558 42.5338C4.41147 42.9157 5.01118 42.878 5.47055 43.1679C5.55829 43.2153 5.62506 43.2939 5.65766 43.3881C5.69026 43.4824 5.68631 43.5855 5.64661 43.6769ZM4.4508 32.1531C4.72524 28.8539 5.21651 25.6395 6.65627 22.5548C7.48658 20.7759 8.11769 18.9149 9.22 17.2544C9.75988 16.4897 10.3577 15.7677 11.0083 15.0947C12.5384 13.4118 14.4787 12.2215 16.1439 10.7022C16.8625 10.0464 17.012 10.1101 17.4945 10.8861C18.2676 11.9672 19.2271 12.902 20.3281 13.6466C21.1509 14.2856 22.4233 14.4844 23.5243 14.5925C25.0331 14.7933 26.5637 14.4431 27.8351 13.6063C28.2125 13.347 28.5606 13.115 28.6251 12.606C28.7585 11.5549 29.6024 11.0738 30.3427 10.5038C30.7381 10.1994 30.8952 10.3823 31.1505 10.7098C31.5722 11.2507 31.0401 11.2277 30.8193 11.4087C30.7618 11.4794 30.7175 11.5597 30.6883 11.646C30.8845 11.9684 31.2009 11.8818 31.487 11.8666C31.8946 11.845 32.089 12.0107 32.2216 12.4172C32.4212 13.0327 32.7689 13.5898 33.2342 14.0395C33.6995 14.4892 34.2681 14.8177 34.8901 14.9962C35.3534 15.1693 35.805 15.3722 36.2421 15.6037C36.8 15.8243 37.2621 16.2348 37.547 16.7627C37.8319 17.2906 37.9214 17.9022 37.7995 18.4896C37.7683 18.7469 37.4115 19.0941 37.8471 19.2479C38.2717 19.3977 38.3251 18.8901 38.4905 18.5629C39.0271 18.9867 39.459 19.5284 39.7527 20.1459C40.0464 20.7634 40.194 21.4402 40.1841 22.124C40.1674 22.271 40.162 22.4191 40.1681 22.5669C40.2282 22.9404 40.1859 23.567 40.6164 23.5326C41.3409 23.4745 40.7137 22.9411 40.7619 22.624C41.0304 20.8602 40.2292 19.4718 39.2077 18.1472C38.9572 17.78 38.7469 17.3868 38.5805 16.9746C38.3772 16.4446 38.0537 15.969 37.6356 15.5852C37.2174 15.2013 36.716 14.9196 36.1706 14.7623C35.5015 14.5784 34.8637 14.2953 34.2785 13.9225C33.6555 13.5247 32.7992 13.1642 33.2326 12.1159C33.4011 11.7084 33.0752 11.6287 32.83 11.4786C32.7069 11.4032 32.3491 11.4763 32.5486 11.152C32.644 10.9969 32.7673 10.7987 33.0024 10.8221C33.1482 10.842 33.2907 10.881 33.4262 10.9382C35.2816 11.6527 37.0534 12.4754 38.1972 14.2375C38.5213 14.6082 38.714 15.0755 38.7455 15.5669C38.7881 16.3664 39.1359 17.1192 39.7171 17.6699C40.2491 18.3078 41.002 18.7716 41.2368 19.6452C41.2571 19.7444 41.3104 19.8338 41.388 19.8989C41.4657 19.964 41.563 20.001 41.6643 20.0038C42.6694 19.9231 42.5967 20.6286 42.599 21.2664C42.559 21.8102 42.6941 22.3526 42.9845 22.8141C43.1942 23.1505 43.3025 23.5401 43.2966 23.9365C43.2899 25.4899 44.2633 26.8582 44.1119 28.4306C44.9569 29.5035 44.4145 31.0247 45.3652 32.1244C45.7389 32.5567 45.4942 33.5052 45.0759 33.9048C44.8158 34.1727 44.4759 34.3491 44.1071 34.4073C43.7383 34.4656 43.3606 34.4027 43.0306 34.2281C42.6626 33.9802 42.236 33.8331 41.7934 33.8015C41.3508 33.77 40.9076 33.855 40.5081 34.0482C40.3742 34.119 40.2232 34.1515 40.072 34.1421C39.9207 34.1326 39.775 34.0816 39.6509 33.9947C38.8503 33.2379 38.2436 33.6305 37.6791 34.3519C36.5475 33.2066 35.2495 33.3308 33.9181 33.6522C33.5439 33.7774 33.1576 33.863 32.7656 33.9076C29.3016 33.984 25.87 34.4812 22.4161 34.6801C22.1723 34.7175 21.9234 34.707 21.6836 34.649C20.1079 34.0694 18.498 34.2293 16.88 34.3503C16.2414 34.4578 15.586 34.4008 14.9755 34.1848C14.511 33.9949 13.9985 33.9564 13.5108 34.0746C11.5637 34.4935 9.5936 34.2023 7.63879 34.3287C7.04829 34.3866 6.45215 34.3327 5.88159 34.1699C4.42397 33.7133 4.32239 33.6969 4.4508 32.1531ZM23.6677 44.0649C24.2734 43.3708 24.7492 43.711 25.3471 44.1577C24.6896 44.7414 24.2265 44.1811 23.6677 44.0649ZM45.8308 40.7945C45.7707 40.8839 45.6877 40.9554 45.5904 41.0016C45.4931 41.0478 45.3852 41.0669 45.278 41.057C45.3356 40.1798 45.5021 39.3132 45.7736 38.4771C45.852 38.2686 45.8866 38.0462 45.8753 37.8238C45.864 37.6013 45.8069 37.3836 45.7077 37.1841C45.6689 37.1205 45.61 37.0716 45.5404 37.0451C45.4707 37.0185 45.3942 37.0159 45.3229 37.0376C45.1753 37.0792 45.0295 37.1534 45.0624 37.3236C45.2863 38.4792 44.9346 39.5447 44.6946 40.6565C44.6352 41.0221 44.6854 41.3971 44.8388 41.7342C44.9922 42.0714 45.2419 42.3556 45.5565 42.551C44.6467 42.9411 43.8524 43.4238 42.8566 42.946C42.6632 42.8865 42.457 42.882 42.2612 42.933C42.0653 42.984 41.8875 43.0885 41.7477 43.2348C40.5929 44.2275 39.497 43.3369 38.3807 43.1778C38.3086 43.1675 38.1843 43.0016 38.1995 42.9757C38.7792 41.9878 37.6436 41.4254 37.6114 40.5693C37.569 39.4378 37.3809 38.3118 37.2578 37.1833C37.2469 36.9371 37.2222 36.6918 37.1837 36.4485C37.1786 36.4121 37.1663 36.377 37.1476 36.3453C37.1288 36.3136 37.104 36.286 37.0746 36.2639C37.0451 36.2418 37.0116 36.2257 36.976 36.2167C36.9403 36.2076 36.9032 36.2056 36.8667 36.2109C36.8305 36.2127 36.795 36.2218 36.7624 36.2376C36.7297 36.2534 36.7006 36.2757 36.6767 36.303C36.6528 36.3303 36.6347 36.3621 36.6234 36.3966C36.6121 36.4311 36.6079 36.4675 36.6109 36.5037C36.5753 37.1461 36.5983 37.7904 36.6795 38.4286C36.9572 39.8824 36.9133 41.3901 37.4226 42.8037C37.473 42.8894 37.5013 42.9865 37.5047 43.0859C37.5081 43.1854 37.4866 43.2841 37.4422 43.3731C37.3978 43.4622 37.3318 43.5387 37.2502 43.5958C37.1687 43.6528 37.0742 43.6886 36.9754 43.6999C34.9779 44.2778 34.635 44.7808 34.139 42.1683C33.8519 40.6559 33.9058 39.1157 33.6569 37.6039C33.6093 37.3149 33.6397 36.9923 33.0442 36.8834C33.0567 39.2484 33.3442 41.6039 33.9011 43.9024C33.8145 44.0044 33.7029 44.0822 33.5772 44.1281C33.4515 44.174 33.316 44.1863 33.184 44.164C30.893 44.2302 30.6195 43.9567 30.3055 41.6268C30.117 40.2546 30.0184 38.8715 30.0102 37.4865C30.0419 37.302 30.0302 37.1128 29.9761 36.9336C29.922 36.7545 29.827 36.5904 29.6986 36.4543C29.5632 36.5939 29.4648 36.7651 29.4125 36.9524C29.3603 37.1397 29.3557 37.3371 29.3993 37.5266C29.4034 39.2088 29.5639 40.8871 29.8786 42.5396C30.1055 43.4818 30.067 43.5002 29.1315 43.6928C27.8947 43.9474 26.6732 44.074 25.5883 43.1994C25.3504 43.0159 25.0685 42.8979 24.7708 42.8571C24.4731 42.8164 24.1699 42.8543 23.8914 42.9671C23.1533 43.2121 22.9747 42.9137 22.8343 42.2349C22.5328 40.7766 22.6064 39.2911 22.3985 37.83C22.3567 37.5367 22.3473 37.2375 22.2875 36.9484C22.2385 36.7117 22.156 36.4343 21.8234 36.5195C21.5286 36.595 21.4826 36.8588 21.5383 37.1133C21.9408 38.9525 21.8419 40.8544 22.2212 42.6893C22.3708 43.4132 22.0892 43.4574 21.5259 43.6228C19.6872 44.1629 17.7895 43.9727 15.9253 44.1525C15.2394 44.2908 14.5457 44.3868 13.848 44.44C14.0352 42.947 13.6644 41.5316 13.5911 40.0931C13.4919 38.9598 13.4604 37.8217 13.4968 36.6847C13.5202 36.3426 13.7004 35.9006 13.2081 35.8655C12.5695 35.8199 12.7801 36.4011 12.7784 36.7325C12.7913 38.5138 12.943 40.2913 13.2321 42.049C13.6074 44.5179 13.5741 43.9166 11.5321 44.5348C11.1468 44.6302 10.7444 44.6332 10.3577 44.5435C9.92015 44.4706 9.63559 44.2922 9.58063 43.8054C9.4034 42.2371 9.19134 40.6726 9.02271 39.1034C8.96025 38.7862 8.96872 38.4592 9.04751 38.1457C9.12629 37.8322 9.27344 37.5399 9.47841 37.29C9.61398 37.1792 9.70506 37.0232 9.73494 36.8507C9.76482 36.6782 9.73149 36.5007 9.64107 36.3507C9.59526 36.2618 9.52151 36.1903 9.43115 36.1473C9.34078 36.1043 9.2388 36.0922 9.14088 36.1128C8.94524 36.1574 8.7701 36.2661 8.64325 36.4216C8.51639 36.577 8.44509 36.7704 8.44064 36.9711C8.34735 37.9577 8.36004 38.9515 8.47847 39.9354C8.64197 41.1949 8.80583 42.4544 8.97208 43.7341C8.51527 43.8272 8.04188 43.7967 7.60078 43.6458C7.2197 43.575 6.78805 43.8514 6.45683 43.5456C6.0962 43.2128 6.18185 42.7068 6.13612 42.2822C6.01675 40.3105 6.049 38.3326 6.2326 36.3659C6.25238 35.9342 6.47328 35.7885 6.87471 35.7216C7.69828 35.5843 8.51044 35.3796 9.33249 35.2318C9.81191 35.1456 10.3106 35.01 10.7377 35.4259C10.79 35.4763 10.852 35.5155 10.9199 35.5411C10.9878 35.5666 11.0602 35.5781 11.1327 35.5746C13.3016 35.1699 15.5279 36.0677 17.6951 35.2228C18.5466 34.8908 19.379 35.5077 20.2069 35.7377C20.3695 35.7828 20.5015 35.9697 20.7208 35.9258C23.0562 35.4573 25.4016 35.9365 27.7437 35.8842C29.3843 35.8476 30.9587 35.4319 32.5832 35.3582C33.0676 35.2669 33.5611 35.2335 34.0534 35.2588C36.6755 35.7884 39.275 35.1515 41.885 35.1562C43.1697 35.2025 44.4499 35.3346 45.7171 35.5516C45.9673 35.5556 46.2079 35.6489 46.3954 35.8148C46.5829 35.9806 46.7048 36.208 46.7393 36.4559C46.8868 37.2031 46.8824 37.9722 46.7263 38.7176C46.5702 39.463 46.2656 40.1693 45.8308 40.7945Z"
          fill="currentcolor"
        />
        <path
          d="M32.2429 16.2207C32.2752 16.5027 32.294 16.5947 32.295 16.687C32.3006 17.2194 33.1855 17.8273 32.4915 18.1782C32.0836 18.3845 31.975 17.3956 31.6542 16.9958C31.5041 16.8087 31.4431 16.5297 31.1745 16.4752C30.8885 16.4172 30.4826 16.4354 30.5334 16.0515C30.5865 15.6499 30.9995 15.6202 31.3598 15.6029C31.4944 15.5735 31.6231 15.5218 31.7407 15.4498C31.7951 14.9525 31.423 14.878 31.1175 14.7386C30.7149 14.555 30.3066 14.3813 29.9164 14.1739C29.653 14.034 29.3608 13.8119 29.5559 13.4861C29.785 13.1035 30.066 13.4388 30.3058 13.5516C30.7954 13.7818 31.2711 14.0417 31.7623 14.2684C32.1512 14.4478 32.6061 14.4788 32.3573 15.1684C32.2035 15.5947 32.7635 15.7809 33.073 15.9866C33.8762 16.5704 34.459 17.4081 34.7269 18.3643C34.7946 18.5571 34.8551 18.7823 34.6498 18.8839C34.3649 19.0249 34.1688 18.808 34.1006 18.57C33.7963 17.5824 33.1337 16.7444 32.2429 16.2207Z"
          fill="currentcolor"
        />
        <path
          d="M6.50058 27.3548C6.44433 25.0789 8.0268 23.1234 8.66715 20.8519C8.7169 20.7113 8.7914 20.5808 8.88715 20.4664C9.12934 20.1428 9.53545 19.7646 9.83894 19.9775C10.3313 20.323 9.76957 20.636 9.57046 20.9179C8.46561 22.4824 7.97229 24.2961 7.44317 26.094C7.29012 26.614 7.21313 27.1562 7.06905 27.6794C7.00312 27.9188 6.84262 28.1561 6.54013 28.0493C6.31393 27.9695 6.34053 27.7509 6.50058 27.3548Z"
          fill="currentcolor"
        />
        <path
          d="M33.0183 21.9874C34.4897 23.675 34.6276 25.7048 34.8251 27.7194L34.4777 27.8086C33.9912 25.8682 33.5048 23.9278 33.0183 21.9874Z"
          fill="currentcolor"
        />
        <path
          d="M42.9681 28.2562C42.6604 26.954 42.5934 25.5617 42.0522 24.2791C42.0273 24.2213 42.0163 24.1585 42.0199 24.0956C42.0234 24.0328 42.0416 23.9717 42.0729 23.9171C42.1042 23.8625 42.1478 23.8159 42.2003 23.7811C42.2527 23.7463 42.3125 23.7241 42.375 23.7164C42.6121 23.6762 42.7212 23.8616 42.775 24.0586C43.1725 25.3292 43.3922 26.6487 43.4279 27.9795C43.4268 28.11 43.3557 28.2722 42.9681 28.2562Z"
          fill="currentcolor"
        />
        <path
          d="M39.1822 27.5135C39.1949 27.5599 39.198 27.6084 39.1915 27.6561C39.1849 27.7037 39.1687 27.7496 39.144 27.7908C39.1192 27.8321 39.0863 27.8679 39.0474 27.8961C39.0084 27.9243 38.9641 27.9444 38.9172 27.955C38.5942 28.0266 38.4491 27.7959 38.4743 27.5398C38.6013 26.2467 38.0699 25.1512 37.4968 24.0587C37.4112 23.8955 37.3482 23.6564 37.5373 23.5171C37.8081 23.3175 38.0056 23.5425 38.1239 23.7324C38.7755 24.8893 39.1386 26.1864 39.1822 27.5135Z"
          fill="currentcolor"
        />
        <path
          d="M13.6101 15.842C12.6507 16.2598 11.8864 17.0272 11.4726 17.9883C11.4547 18.0345 11.4278 18.0766 11.3935 18.1122C11.3592 18.1479 11.3182 18.1764 11.2728 18.1961C11.2274 18.2158 11.1786 18.2263 11.1291 18.227C11.0796 18.2277 11.0305 18.2186 10.9846 18.2002C10.6991 18.0673 10.7394 17.8087 10.8344 17.5817C10.9463 17.3142 11.1256 17.074 11.2299 16.8043C11.7838 15.3708 11.7788 15.3689 13.6101 15.842Z"
          fill="currentcolor"
        />
        <path
          d="M15.088 14.515C14.8621 14.4587 14.7027 14.2691 14.8378 14.1C15.1497 13.6118 15.401 13.0873 15.5859 12.5382C15.6681 12.3856 15.8018 12.267 15.9632 12.2036C16.1246 12.1402 16.3032 12.136 16.4674 12.1918C16.9975 12.3003 16.7684 12.7286 16.783 13.0192C16.7999 13.3555 15.4144 14.5318 15.088 14.515Z"
          fill="currentcolor"
        />
        <path
          d="M34.5747 15.7048C36.2677 15.7869 36.8609 16.7206 37.3636 17.7552C37.4169 17.8393 37.4353 17.941 37.4149 18.0385C37.3946 18.136 37.337 18.2218 37.2545 18.2776C37.0668 18.4086 36.7886 18.4055 36.7449 18.2259C36.4815 17.1427 35.4139 16.7275 34.5747 15.7048Z"
          fill="currentcolor"
        />
        <path
          d="M29.7948 17.7958C29.7902 17.8571 29.7677 17.9156 29.7303 17.9643C29.6928 18.0129 29.6419 18.0496 29.5839 18.0697C29.5259 18.0898 29.4633 18.0926 29.4037 18.0776C29.3442 18.0626 29.2903 18.0305 29.2487 17.9853C28.7917 17.6161 28.3802 17.1901 27.9538 16.7833C27.927 16.7591 27.9056 16.7295 27.891 16.6964C27.8765 16.6633 27.8692 16.6275 27.8696 16.5914C27.8699 16.5552 27.878 16.5196 27.8931 16.4868C27.9083 16.454 27.9303 16.4248 27.9576 16.4011C28.0183 16.3266 28.1039 16.2767 28.1987 16.2608C28.7872 16.2378 29.8208 17.2267 29.7948 17.7958Z"
          fill="currentcolor"
        />
        <path
          d="M41.3675 27.1664C40.8574 26.4758 40.3238 25.7858 40.5891 24.6813C41.3672 25.4708 41.6684 26.2206 41.3675 27.1664Z"
          fill="currentcolor"
        />
        <path
          d="M9.57243 23.1399C9.49004 21.6116 9.70587 21.1557 10.5076 20.9193C10.6483 20.8778 10.8061 20.8583 10.9048 20.9979C10.953 21.0662 10.9992 21.2041 10.9648 21.2523C10.5437 21.8417 10.1076 22.4202 9.57243 23.1399Z"
          fill="currentcolor"
        />
        <path
          d="M32.5707 21.5934C31.9589 21.0842 31.3471 20.5751 30.6954 20.0327C31.7557 19.6597 32.1816 19.9761 32.5707 21.5934Z"
          fill="currentcolor"
        />
        <path
          d="M38.6729 29.1018C39.4579 30.0891 39.2704 30.9669 39.4611 31.7327C39.4855 31.8303 39.2942 31.9933 39.1373 31.9428C39.0714 31.9227 39.0101 31.8897 38.9571 31.8457C38.9041 31.8017 38.8604 31.7476 38.8285 31.6866C38.6049 30.844 38.5519 29.9651 38.6729 29.1018Z"
          fill="currentcolor"
        />
        <path
          d="M42.1737 31.5151C42.6649 31.5992 42.7066 32.0458 42.83 32.385C42.8647 32.4516 42.8835 32.5254 42.885 32.6005C42.8865 32.6756 42.8705 32.75 42.8385 32.8179C42.8064 32.8859 42.759 32.9455 42.7001 32.9921C42.6412 33.0387 42.5723 33.071 42.4988 33.0866C42.0439 33.1488 42.1009 32.7868 42.1585 32.4875C42.2199 32.1677 41.828 31.8423 42.1737 31.5151Z"
          fill="currentcolor"
        />
        <path
          d="M29.1145 15.2466C29.0653 15.437 28.9734 15.5929 28.8183 15.5365C28.5943 15.4535 28.3986 15.3085 28.2541 15.1183C28.1096 14.9281 28.0222 14.7007 28.0023 14.4626C27.9963 14.4267 27.9996 14.3898 28.012 14.3556C28.0243 14.3213 28.0451 14.2907 28.0726 14.2668C28.1001 14.2428 28.1332 14.2263 28.1688 14.2188C28.2045 14.2113 28.2414 14.213 28.2762 14.2238C28.5026 14.2902 28.7037 14.4234 28.8532 14.6058C29.0028 14.7883 29.0938 15.0116 29.1145 15.2466Z"
          fill="currentcolor"
        />
        <path
          d="M35.6559 30.482C35.7591 30.6118 35.8147 30.6561 35.807 30.6759C35.6758 31.0158 36.0885 31.4352 35.6669 31.7208C35.6354 31.7377 35.6007 31.7481 35.5651 31.7513C35.5294 31.7544 35.4935 31.7503 35.4594 31.7391C35.4254 31.728 35.394 31.71 35.3671 31.6863C35.3403 31.6627 35.3185 31.6338 35.3031 31.6014C35.2414 31.5075 35.2013 31.4011 35.1859 31.2898C35.1704 31.1785 35.1799 31.0651 35.2137 30.9579C35.2474 30.8508 35.3046 30.7525 35.3811 30.6701C35.4576 30.5878 35.5515 30.5236 35.6559 30.482Z"
          fill="currentcolor"
        />
        <path
          d="M36.3056 24.0007C36.4454 24.0113 36.5772 24.0699 36.6788 24.1666C36.7803 24.2632 36.8454 24.3919 36.8629 24.531C36.8981 24.7145 36.8608 24.9394 36.6013 24.9344C36.3213 24.9292 36.213 24.6967 36.1297 24.4703C36.1059 24.4288 36.0915 24.3825 36.0876 24.3348C36.0838 24.287 36.0905 24.239 36.1073 24.1942C36.1241 24.1493 36.1505 24.1087 36.1848 24.0753C36.2191 24.0419 36.2604 24.0164 36.3056 24.0007Z"
          fill="currentcolor"
        />
        <path
          d="M35.8637 20.6763C35.861 20.7713 35.8241 20.862 35.7597 20.9318C35.6952 21.0015 35.6078 21.0456 35.5134 21.0559C35.4785 21.0609 35.4429 21.0587 35.4089 21.0495C35.3748 21.0403 35.343 21.0242 35.3154 21.0023C35.2878 20.9804 35.2649 20.9531 35.2482 20.922C35.2315 20.891 35.2213 20.8569 35.2182 20.8217C35.2014 20.7769 35.1947 20.729 35.1986 20.6813C35.2024 20.6337 35.2167 20.5874 35.2404 20.5459C35.2642 20.5044 35.2967 20.4686 35.3358 20.4411C35.375 20.4135 35.4196 20.3949 35.4667 20.3866C35.5123 20.3744 35.56 20.3725 35.6063 20.3811C35.6527 20.3897 35.6965 20.4086 35.7346 20.4364C35.7727 20.4642 35.8041 20.5002 35.8264 20.5417C35.8487 20.5832 35.8615 20.6292 35.8637 20.6763Z"
          fill="currentcolor"
        />
        <path
          d="M43.1944 35.5777C43.5558 36.0707 43.418 36.7184 44.2306 36.9314C44.8876 37.1037 44.8279 38.3021 44.2466 39.2598C43.7056 38.791 44.2881 37.9968 43.747 37.5436C43.4617 38.82 43.6163 40.1554 44.1857 41.3328C44.3109 41.5804 44.3956 41.7958 44.1469 41.9713C43.9009 42.1449 43.6768 42.0034 43.5059 41.8109C43.2723 41.4888 43.146 41.1014 43.1449 40.7036C43.0148 39.6308 42.8743 38.5593 42.7187 37.337C42.5477 37.7559 42.48 38.2098 42.5212 38.6604C42.5563 38.8989 42.5354 39.1422 42.4602 39.3711C42.385 39.6001 42.2576 39.8084 42.0881 39.9797C41.5163 40.4914 41.6125 41.3376 41.5049 42.0636C41.5031 42.1256 41.489 42.1867 41.4634 42.2432C41.4377 42.2997 41.4011 42.3505 41.3555 42.3927C41.31 42.4349 41.2565 42.4675 41.1982 42.4888C41.1399 42.51 41.078 42.5195 41.016 42.5165C40.8901 42.5141 40.7703 42.4622 40.6823 42.3722C40.5944 42.2821 40.5455 42.161 40.5462 42.0351C40.4681 40.2122 40.0475 38.416 40.1205 36.5834C40.1309 36.3224 40.0235 35.9115 40.4224 35.8635C40.876 35.8089 40.7996 36.2248 40.7967 36.49C40.885 37.5857 41.0952 38.6681 41.4232 39.7173C42.1865 39.1916 41.896 38.4734 41.8936 37.8495C41.8897 36.8746 41.9283 35.9546 43.1944 35.5777Z"
          fill="currentcolor"
        />
        <path
          d="M16.9963 38.2895C16.984 37.5992 17.087 36.9117 17.3009 36.2553C17.3547 36.0631 17.4855 35.9019 17.7238 35.9715C17.8209 35.9962 17.9046 36.0577 17.9572 36.143C18.0098 36.2282 18.0273 36.3306 18.0059 36.4285C17.8284 37.2951 17.7595 38.1804 17.8007 39.064C17.7741 39.9099 17.7965 40.7279 18.5948 41.3014C18.8093 41.504 18.98 41.7485 19.0962 42.0198C19.1855 42.1781 19.3189 42.3856 19.1104 42.545C18.8545 42.7405 18.6675 42.57 18.494 42.3795C17.7707 41.5854 17.0076 40.826 17.1142 39.6023C17.115 39.162 17.0755 38.7226 16.9963 38.2895Z"
          fill="currentcolor"
        />
        <path
          d="M26.4434 39.732C26.5064 40.4164 26.5965 41.3931 26.6859 42.3699C26.7092 42.625 26.6898 42.9167 26.4001 42.9545C26.062 42.9986 26.1192 42.722 26.0863 42.4659C25.9053 41.0588 25.949 39.6319 25.6742 38.2313C25.6197 37.7425 25.6273 37.2488 25.6968 36.762C25.7028 36.6625 25.747 36.5692 25.8201 36.5015C25.8932 36.4338 25.9896 36.3969 26.0893 36.3984C26.1383 36.3983 26.1869 36.4084 26.2318 36.4282C26.2767 36.448 26.317 36.4769 26.35 36.5131C26.3831 36.5494 26.4082 36.5922 26.4237 36.6387C26.4393 36.6852 26.4449 36.7345 26.4403 36.7833C26.4479 37.6679 26.4434 38.5525 26.4434 39.732Z"
          fill="currentcolor"
        />
        <path
          d="M38.3216 41.0853C38.5316 39.9997 38.1151 39.0498 37.8675 38.0592C37.6746 37.2876 37.482 36.4141 38.6458 35.6991C38.1595 37.2404 38.7662 38.4759 38.8549 39.7659C38.9085 40.0139 38.8863 40.2724 38.7912 40.5077C38.6961 40.743 38.5325 40.9442 38.3216 41.0853Z"
          fill="currentcolor"
        />
        <path
          d="M35.979 37.6568C36.1709 37.9707 36.2986 38.3195 36.3545 38.6831C36.4105 39.0466 36.3937 39.4177 36.305 39.7747C36.0386 39.4986 35.8642 39.1468 35.8059 38.7675C35.7475 38.3883 35.808 38.0003 35.979 37.6568Z"
          fill="currentcolor"
        />
        <path
          d="M24.4234 11.8788C24.4233 11.4571 24.5572 11.3227 24.7425 11.2305C24.9659 11.1194 25.2278 11.0281 25.0048 10.7036C24.9834 10.6588 24.9515 10.6199 24.9117 10.5903C24.8719 10.5606 24.8255 10.5411 24.7764 10.5335C24.7274 10.5259 24.6772 10.5303 24.6303 10.5465C24.5834 10.5626 24.5411 10.59 24.5072 10.6262C24.2785 10.8296 24.072 10.8764 23.9396 10.5593C23.8452 10.3331 24.0539 10.1414 24.2007 10.0873C24.6651 9.91591 25.1075 9.41981 25.6605 10.014C25.8835 10.2537 27.1623 9.87035 27.3245 9.55537C27.5426 9.13184 27.2493 8.85583 26.9 8.78674C25.9866 8.60609 25.6506 7.74471 24.9983 7.26286C24.8681 7.1667 24.7178 6.94929 24.9111 6.76313C24.9462 6.72716 24.9882 6.69862 25.0345 6.67921C25.0809 6.6598 25.1307 6.64992 25.1809 6.65015C25.2312 6.65039 25.2808 6.66073 25.327 6.68057C25.3732 6.70041 25.4149 6.72933 25.4496 6.76563C25.9804 7.52266 26.7686 8.06059 27.6671 8.27896C27.881 8.36143 28.0536 8.52533 28.1471 8.73478C28.2405 8.94422 28.2471 9.18214 28.1654 9.39646C27.9273 9.91308 27.8526 10.682 26.9926 10.7119C26.333 10.7348 25.755 10.8851 25.8672 11.7747C25.8961 12.0039 25.692 12.1059 25.4673 12.0702C25.1342 12.0175 24.8036 11.9494 24.4234 11.8788Z"
          fill="currentcolor"
        />
        <path
          d="M19.9619 8.41471C19.8064 7.4246 20.361 6.65793 20.9257 5.90988C20.9634 5.85957 21.0114 5.81785 21.0664 5.78747C21.1215 5.7571 21.1823 5.73876 21.245 5.73368C21.3077 5.7286 21.3707 5.73689 21.4299 5.75801C21.4891 5.77912 21.5432 5.81257 21.5885 5.85615C21.8465 6.09916 21.6389 6.29209 21.4314 6.43011C21.0651 6.64391 20.7909 6.98587 20.6618 7.38996C20.5328 7.79405 20.5581 8.23163 20.7327 8.61819C20.8151 8.90222 20.8562 9.19663 20.8546 9.49235C20.8625 9.54094 20.8605 9.59064 20.8485 9.6384C20.8366 9.68616 20.815 9.73097 20.7851 9.7701C20.7552 9.80923 20.7177 9.84185 20.6748 9.86596C20.6318 9.89007 20.5844 9.90517 20.5355 9.91033C20.4381 9.93184 20.3362 9.91427 20.2517 9.86141C20.1671 9.80854 20.1067 9.7246 20.0834 9.62764C20.0104 9.24279 20.0011 8.84584 19.9619 8.41471Z"
          fill="currentcolor"
        />
        <path
          d="M24.1267 8.79224C24.1229 9.06709 24.0693 9.2566 23.8423 9.29261C23.5818 9.33393 23.5432 9.11307 23.4959 8.93158C23.3744 8.46579 23.242 8.00157 23.1525 7.5294C23.1202 7.35893 23.1253 7.12871 23.3832 7.06846C23.4417 7.05052 23.5035 7.04641 23.5639 7.05644C23.6243 7.06648 23.6815 7.09038 23.731 7.12628C23.7806 7.16217 23.8211 7.20908 23.8495 7.26331C23.8778 7.31753 23.8932 7.3776 23.8944 7.43878C23.9438 7.8943 24.0214 8.34632 24.1267 8.79224Z"
          fill="currentcolor"
        />
        <path
          d="M20.3907 10.7546C20.4582 10.6997 20.5277 10.5959 20.5933 10.5982C20.9908 10.6126 21.4855 10.3501 21.7013 10.9231C21.7294 10.9978 21.5941 11.1954 21.4901 11.2473C21.1502 11.4173 20.8824 11.2833 20.3907 10.7546Z"
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

export default LueImg;
