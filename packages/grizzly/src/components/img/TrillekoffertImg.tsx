import React from "react";

type Props = {
  className: string;
};

function TrillekoffertImg(props: Props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M21.2035 0.108554C21.9826 -0.00819302 22.7729 -0.0308721 23.5574 0.041005C24.0768 0.108831 24.5967 0.169092 25.1082 0.287939C25.2515 0.314137 25.384 0.381522 25.4896 0.481853C25.5953 0.582185 25.6693 0.711115 25.7028 0.852878C25.8529 1.55891 25.9206 2.27997 25.9046 3.00161C25.9485 3.86712 25.9833 4.73416 26.0226 5.59857C26.0706 6.65573 26.0595 7.72273 26.0227 8.78709C25.9925 9.66249 25.8891 10.5342 25.9454 11.4223C26.0306 12.1308 26.0279 12.8471 25.9372 13.555C25.8628 13.9573 25.9955 14.3718 25.8922 14.7829C25.8645 14.893 25.9122 15.0216 26.1543 15.0494C26.6871 15.0851 27.205 15.2405 27.6694 15.5041C28.1338 15.7676 28.5329 16.1324 28.8369 16.5714C28.8523 16.6088 28.8765 16.6418 28.9075 16.6677C28.9385 16.6936 28.9753 16.7115 29.0147 16.72C29.6694 16.8771 30.3444 16.9323 31.0158 16.8837C31.2879 16.8844 31.5498 16.9867 31.7504 17.1704C32.3897 17.6197 32.8748 18.2552 33.1397 18.9903C33.4152 19.66 33.5569 20.377 33.557 21.1011C33.6208 22.2321 33.8335 23.3465 33.8325 24.4868C33.8316 25.545 33.9355 26.6055 33.9072 27.6659C33.8874 28.409 33.9754 29.1487 33.9559 29.8878C33.879 30.44 33.8669 30.9992 33.9199 31.5542C33.982 32.0058 33.9935 32.463 33.9542 32.9171C33.9486 33.329 34.0748 33.7139 34.0655 34.1058C34.0587 34.3927 33.9658 34.6884 33.9718 34.9844C33.9897 35.8654 34.056 36.747 34.0343 37.6267C34.0671 38.4874 34.0531 39.3494 33.9924 40.2086C33.9152 40.7907 33.7068 41.3259 33.5961 41.8919C33.4763 42.5039 32.9141 42.7836 32.4493 43.1017C32.2383 43.292 31.9858 43.4303 31.7118 43.5055C31.5595 43.5282 31.609 43.6421 31.6334 43.7538C31.7337 44.0406 31.7286 44.3538 31.6188 44.6371C31.5396 44.8092 31.4199 44.9595 31.2699 45.0752C31.1199 45.1908 30.9441 45.2684 30.7575 45.3012C30.5753 45.2998 30.3973 45.2461 30.2448 45.1463C30.0924 45.0465 29.9718 44.905 29.8976 44.7385C29.6003 44.281 29.6072 44.25 29.0807 44.4406C28.1768 44.7673 27.2512 45.0306 26.3107 45.2285C25.5896 45.3806 24.8564 45.4755 24.1329 45.6178C23.9066 45.6896 23.67 45.7234 23.4326 45.7177C23.3831 45.706 23.3313 45.7085 23.2832 45.7248C23.235 45.7412 23.1924 45.7708 23.1603 45.8103C23.1282 45.8497 23.1079 45.8974 23.1016 45.9479C23.0954 45.9984 23.1035 46.0496 23.125 46.0957C23.281 46.6679 22.9038 47.0329 22.5829 47.3771C22.4871 47.4801 22.3643 47.554 22.2285 47.5904C22.0926 47.6268 21.9493 47.6242 21.8149 47.5828C21.6805 47.5415 21.5604 47.4631 21.4685 47.3567C21.3766 47.2502 21.3165 47.1201 21.2952 46.9811C21.1566 46.5941 21.1753 46.1682 21.3475 45.795C21.4313 45.6277 21.3037 45.5913 21.1929 45.5573C20.687 45.4318 20.1725 45.3439 19.6536 45.2945C18.5661 45.186 17.5103 44.8661 16.5455 44.3527C16.3236 44.2784 16.1067 44.1901 15.8959 44.0884C15.8565 44.0582 15.736 43.996 15.6993 44.1323C15.5291 44.7647 15.0194 44.6771 14.5445 44.6915C14.1534 44.7033 14.0788 44.4796 14.0514 44.1568C14.0266 43.799 14.0591 43.4396 14.1474 43.092C14.2158 42.8257 14.1806 42.5434 14.0488 42.3021C13.6481 41.4984 13.4323 40.6152 13.4174 39.7172C13.4483 39.0941 13.4452 38.4697 13.4082 37.8469C13.2234 36.9248 13.3445 35.9935 13.1867 35.0751C13.1631 34.5606 13.167 34.0452 13.1983 33.5312C13.1424 32.6073 13.0227 31.6858 13.0014 30.764C12.9866 30.1203 13.093 29.4659 13.0631 28.8175C13.0291 28.0795 13.1071 27.3451 13.0646 26.6061C13.0194 25.4668 13.034 24.3259 13.1083 23.1881C13.1521 22.1518 13.2689 21.1199 13.4578 20.1C13.5509 19.5506 13.7107 19.0146 13.9336 18.5038C14.05 18.3901 14.1868 18.2993 14.3367 18.236C14.9319 17.6131 15.7575 17.4938 16.5091 17.2024C17.0809 17.0592 17.6667 16.9792 18.2559 16.964C18.2949 16.9639 18.3333 16.955 18.3683 16.938C18.4033 16.921 18.434 16.8964 18.4582 16.8658C18.4824 16.8353 18.4994 16.7998 18.5079 16.7618C18.5164 16.7238 18.5162 16.6844 18.5074 16.6465C18.5738 16.0546 18.6061 15.4593 18.6042 14.8637C18.5685 14.3827 18.7062 13.914 18.6395 13.4501C18.5865 12.6433 18.59 11.8337 18.65 11.0273C18.6469 10.3488 18.6282 9.67038 18.6138 8.99198C18.6021 8.44216 18.5978 7.89179 18.5676 7.3429C18.508 7.074 18.5124 6.79483 18.5806 6.52797C18.6791 6.23766 18.6654 5.92104 18.5424 5.64026C18.4851 5.47072 18.4767 5.28849 18.5181 5.11439C18.6658 4.35775 18.4759 3.60094 18.5385 2.8471C18.5419 2.39991 18.6359 1.95804 18.8147 1.54814C18.8593 1.47917 18.888 1.40117 18.8988 1.31975C18.908 1.13076 18.9759 0.949337 19.093 0.800723C19.2101 0.65211 19.3706 0.543699 19.5522 0.490577C20.0735 0.259926 20.6338 0.130292 21.2035 0.108554ZM32.4763 28.8224C32.5805 28.4238 32.9294 28.552 33.1682 28.4912C33.1974 28.4922 33.2265 28.4862 33.2531 28.4737C33.2796 28.4613 33.3028 28.4428 33.3208 28.4197C33.3388 28.3966 33.3512 28.3696 33.3568 28.3409C33.3624 28.3121 33.3611 28.2824 33.3531 28.2543C33.353 27.558 33.3218 26.8585 33.3341 26.1672C33.3509 25.2148 33.3038 24.2663 33.2735 23.3183C33.2499 22.5828 33.0962 21.8519 33.0071 21.1181C33.0088 20.5124 32.8991 19.9115 32.6834 19.3455C32.517 19.0247 32.3623 18.6973 32.214 18.3677C32.0803 18.0875 31.8711 17.8501 31.6099 17.6821C31.3488 17.5142 31.046 17.4224 30.7356 17.417C30.2012 17.3891 29.6657 17.3929 29.1318 17.4281C28.678 17.4903 28.221 17.5265 27.7631 17.5365C26.5023 17.4757 25.2385 17.53 23.9876 17.6987C23.4163 17.7457 22.9089 18.0005 22.3647 18.0956C21.6884 18.2433 21.0932 18.6416 20.6989 19.2105C20.3033 19.7662 20.0458 20.4081 19.9476 21.0832C19.7874 21.9555 19.6792 22.8367 19.6237 23.7219C19.5538 24.5136 19.4784 25.3068 19.4591 26.1006C19.4392 26.9203 19.4241 27.7389 19.3853 28.5587C19.3219 29.8976 19.3073 31.2398 19.3143 32.5804C19.2718 32.8807 19.2687 33.1852 19.3051 33.4863C19.4351 34.2618 19.5053 35.0462 19.5151 35.8326C19.5974 36.5601 19.5347 37.3173 19.5717 38.0589C19.615 38.9238 19.4226 39.7959 19.6436 40.6525C19.732 40.9951 19.5071 41.3285 19.6555 41.6744C19.7568 41.8724 19.8067 42.0927 19.8007 42.3151C19.7643 42.9594 19.8957 43.602 20.1819 44.1803C20.198 44.2552 20.2298 44.3258 20.2753 44.3874C20.3207 44.4491 20.3788 44.5003 20.4455 44.5378C20.5123 44.5752 20.5863 44.598 20.6626 44.6047C20.7389 44.6113 20.8157 44.6017 20.888 44.5763C21.0001 44.5435 21.2084 44.5667 21.1781 44.6961C21.1084 44.9939 21.2771 44.9829 21.4583 44.9791C21.9392 44.9688 22.42 44.9338 22.9005 44.9391C24.2889 44.9362 25.6729 44.7803 27.0272 44.4742C28.4326 44.12 29.8167 43.6859 31.1727 43.1739C31.6418 43.0445 32.0516 42.7565 32.3322 42.3588C32.4227 42.1438 32.5616 41.9526 32.7382 41.8001C32.9059 41.7022 33.0445 41.5613 33.1394 41.3919C33.2343 41.2224 33.2822 41.0307 33.278 40.8365C33.4407 39.8641 33.4879 38.8759 33.4188 37.8924C33.3824 37.3757 33.3822 36.8571 33.4182 36.3404C33.4341 35.8159 33.3697 35.2806 33.3563 34.7492C33.3427 34.4642 33.3049 34.1809 33.2432 33.9024C33.2243 33.5653 33.2435 33.2271 33.3003 32.8942C33.3266 32.2615 33.3528 31.6283 33.3547 30.9953C33.3566 30.3537 33.3167 29.712 33.3193 29.0705C33.3207 28.7243 33.2636 28.6614 32.9177 28.7805C32.8578 28.8328 32.783 28.865 32.7038 28.8725C32.6246 28.88 32.545 28.8625 32.4763 28.8224ZM20.4398 16.96C21.0064 16.9996 21.5607 16.8574 22.1233 16.8464C22.1873 16.8437 22.2496 16.825 22.3045 16.7921C22.3595 16.7592 22.4054 16.7131 22.4381 16.6581C23.0922 15.8156 24.0392 15.2499 25.0911 15.0735C25.1249 15.0767 25.159 15.0716 25.1904 15.0587C25.2217 15.0458 25.2495 15.0255 25.2713 14.9995C25.2931 14.9734 25.3082 14.9425 25.3154 14.9093C25.3226 14.8762 25.3216 14.8418 25.3125 14.8091C25.2554 14.126 25.3494 13.4399 25.2647 12.7561C25.2247 11.8697 25.2314 10.9818 25.2847 10.0961C25.2691 9.2585 25.2857 8.41867 25.3294 7.58195C25.4018 6.58326 25.3857 5.58013 25.2812 4.58429C25.205 4.32756 25.1924 4.05614 25.2445 3.79344C25.3133 3.56663 25.3215 3.32572 25.2682 3.09477C25.2575 2.54298 25.2439 1.99126 25.232 1.43948C25.2293 1.31673 25.2789 1.14411 25.0528 1.20769C24.7063 1.29284 24.3547 1.35622 24.0003 1.39745C23.3807 1.5087 22.75 1.54423 22.1219 1.50326C21.3006 1.40249 20.4736 1.35544 19.6461 1.36239C19.5689 1.365 19.4665 1.34527 19.4761 1.47755C19.4944 1.72792 19.3536 1.95178 19.3528 2.1962C19.3716 2.82914 19.3315 3.46245 19.2331 4.08797C19.2168 4.15607 19.2159 4.22695 19.2306 4.29543C19.3499 4.84022 19.3908 5.39925 19.3522 5.95561C19.3179 6.64668 19.3439 7.33943 19.4301 8.02597C19.4639 8.24778 19.4643 8.47339 19.4314 8.69533C19.3509 9.00669 19.3256 9.32975 19.3565 9.64986C19.3879 10.051 19.375 10.4543 19.3181 10.8526C19.3515 11.3354 19.3416 11.8203 19.2883 12.3014C19.2339 12.6167 19.3302 12.9551 19.3048 13.2789C19.2076 14.2156 19.2108 15.1601 19.3145 16.0962C19.3543 16.3904 19.1711 16.7986 19.4289 16.9511C19.7254 17.0253 20.0351 17.0293 20.3334 16.963C20.3689 16.9623 20.4044 16.961 20.4398 16.96ZM19.247 17.3872C19.1617 17.3648 19.0736 17.3554 18.9855 17.3594C18.469 17.6185 17.872 17.5776 17.3464 17.8022C17.2496 17.8652 17.1351 17.8954 17.0198 17.8884C16.6483 17.7258 16.4504 17.9998 16.2162 18.1752C15.9544 18.331 15.7458 18.5624 15.6178 18.8389C15.3008 19.7146 15.106 20.6299 15.039 21.5588C15.0207 21.7708 15.1096 21.9677 15.0757 22.1745C14.9247 23.5965 14.8502 25.0255 14.8526 26.4555C14.8255 26.9452 14.8188 27.44 14.8198 27.9325C14.8223 29.1984 14.828 30.4645 14.8466 31.7303C14.8574 32.4654 14.9605 33.2054 14.9006 33.9333C14.8524 34.519 14.7642 35.1105 14.7595 35.6946C14.7337 36.8546 14.7762 38.0151 14.8867 39.1702C14.9677 40.2907 15.1584 41.4007 15.4562 42.484C15.6561 42.947 15.9607 43.3573 16.346 43.6825C16.7914 44.0896 17.3506 44.3509 17.9486 44.4315C18.2932 44.4978 18.3305 44.4636 18.2156 44.14C18.0759 43.6586 17.9621 43.17 17.8749 42.6764C17.6754 41.5919 17.5429 40.4961 17.4782 39.3953C17.3622 38.3519 17.446 37.3025 17.4276 36.2578C17.402 34.8052 17.472 33.3458 17.5326 31.8897C17.576 30.8487 17.644 29.8093 17.6991 28.7695C17.77 27.4333 17.7621 26.0964 17.7648 24.7608C17.767 23.6715 17.8186 22.5838 17.8498 21.4969C17.8495 20.7602 17.9348 20.0259 18.104 19.3089C18.1009 19.1519 18.1298 18.9958 18.189 18.8504C18.4309 18.2914 18.792 17.7921 19.247 17.3872ZM19.5181 44.6797C19.2312 44.0135 19.0378 43.3108 18.9432 42.5917C18.8876 42.3185 18.649 42.03 18.8123 41.756C18.9572 41.4613 18.9829 41.122 18.884 40.8088C18.8406 40.6243 18.8342 40.4331 18.8653 40.2461C18.9859 39.5209 19.0097 38.783 18.9359 38.0515C18.9828 37.1858 18.957 36.3176 18.8587 35.4561C18.8236 34.9781 18.8575 34.4975 18.9594 34.0291C18.9463 33.725 18.9112 33.4223 18.8546 33.1232C18.8256 32.3477 18.9333 31.5761 18.9175 30.8052C18.8974 29.8191 18.9782 28.8393 19.0126 27.8571C19.0229 27.5634 19.0023 27.2722 19.0099 26.9797C19.0281 26.2794 19.0485 25.5787 19.1343 24.8837C19.2074 24.2917 19.125 23.6948 19.2243 23.104C19.3058 22.6628 19.3618 22.2173 19.392 21.7697C19.4419 20.7554 19.7708 19.7745 20.3425 18.9352C20.6072 18.6898 20.846 18.4179 21.055 18.1236C21.0916 18.0299 21.1545 17.9488 21.2361 17.8901C21.3178 17.8314 21.4147 17.7975 21.5152 17.7927C21.8671 17.7444 22.2136 17.6628 22.5501 17.549C23.444 17.3045 24.3664 17.1798 25.2931 17.178C25.3691 17.1782 25.4602 17.1884 25.477 17.084C25.1539 17.0504 24.8278 17.0597 24.5072 17.1116C24.1274 17.1182 23.7463 17.0764 23.37 17.1108C22.6384 17.1776 21.9106 17.2825 21.1741 17.2945C20.8525 17.2659 20.5285 17.2867 20.2132 17.3563C19.7861 17.5062 19.4069 17.7677 19.1148 18.1135C18.8227 18.4593 18.6284 18.8769 18.552 19.3231C18.4041 20.1365 18.3141 20.9593 18.2828 21.7854C18.1728 22.9738 18.1693 24.174 18.1631 25.3693C18.1584 26.2675 18.2056 27.166 18.1527 28.0643C18.1247 28.5388 18.0958 29.0132 18.0661 29.4876C18.0138 30.3191 17.9329 31.15 17.9148 31.9822C17.8958 32.8563 17.9136 33.7295 17.8546 34.6047C17.7919 35.5341 17.8674 36.4689 17.8682 37.4016C17.8147 38.3481 17.8574 39.2976 17.9956 40.2356C18.086 40.6753 18.0434 41.1295 18.1234 41.5662C18.2561 42.2908 18.44 43.0059 18.5931 43.727C18.7601 44.5135 18.798 44.5616 19.5181 44.6797ZM15.5694 18.0281C15.5236 18.0215 15.4771 18.021 15.4311 18.0267C15.3764 18.0455 15.3235 18.0692 15.273 18.0973C14.9175 18.2669 14.6108 18.5238 14.3816 18.8442C14.1524 19.1645 14.0082 19.5377 13.9625 19.929C13.6721 21.3728 13.5434 22.8444 13.5786 24.3166C13.624 25.3691 13.5246 26.4179 13.5286 27.4667C13.5316 28.2479 13.5436 29.0351 13.5533 29.8159C13.5641 30.687 13.581 31.5601 13.5988 32.4319C13.6601 33.0398 13.6896 33.6504 13.6873 34.2613C13.6376 34.9959 13.6564 35.7336 13.7434 36.4648C13.854 37.5572 13.8933 38.6539 13.9836 39.7462C14.0204 40.4005 14.125 41.0493 14.2955 41.6822C14.3298 41.8709 14.407 42.0492 14.5211 42.2035C14.6352 42.3577 14.7831 42.4837 14.9535 42.5718C14.7908 41.9738 14.7702 41.3924 14.6592 40.8321C14.461 39.6479 14.3441 38.4516 14.3093 37.2514C14.2695 36.5788 14.4638 35.8777 14.3443 35.2277C14.1509 34.1757 14.5017 33.1246 14.2094 32.0731C14.1565 31.5831 14.1783 31.088 14.2741 30.6046C14.3459 30.0874 14.3622 29.564 14.3227 29.0433C14.2285 28.481 14.2868 27.9253 14.2465 27.3687C14.1721 26.4864 14.1615 25.5998 14.2148 24.7159C14.2101 23.705 14.2786 22.6951 14.4197 21.6941C14.6159 20.4211 15.0035 19.1851 15.5694 18.0281ZM27.7064 16.6962C27.4446 16.4269 27.1313 16.2131 26.7851 16.0674C26.439 15.9217 26.067 15.8472 25.6915 15.8483C25.3159 15.8493 24.9444 15.9259 24.5991 16.0735C24.2537 16.2211 23.9416 16.4367 23.6813 16.7075C25.022 16.6363 26.3654 16.6325 27.7064 16.6962ZM22.7033 46.2322C22.5777 46.0828 22.7391 45.7639 22.4566 45.6825C22.0351 45.561 21.9002 45.6828 21.7629 46.1418C21.7147 46.3029 21.7203 46.4646 21.6851 46.624C21.68 46.6795 21.6876 46.7355 21.7075 46.7876C21.7273 46.8397 21.7588 46.8866 21.7996 46.9247C21.8403 46.9628 21.8892 46.9911 21.9425 47.0074C21.9958 47.0237 22.0522 47.0276 22.1072 47.0188C22.2673 46.9522 22.4068 46.8442 22.5115 46.706C22.6162 46.5678 22.6824 46.4043 22.7033 46.2322ZM14.6052 43.7537C14.6339 44.1583 14.6506 44.1671 14.9144 44.1712C15.2098 44.1758 15.1918 43.9801 15.1873 43.7875C15.1624 43.6697 15.1122 43.5588 15.0403 43.4623C14.9684 43.3658 14.8765 43.286 14.7708 43.2284C14.6906 43.2867 14.6313 43.3692 14.6015 43.4638C14.5717 43.5583 14.573 43.6599 14.6052 43.7537ZM31.1002 44.2981C31.0557 44.1758 31.1064 43.9513 30.859 43.9375C30.7436 43.9767 30.6458 44.0556 30.5831 44.1601C30.5204 44.2647 30.4968 44.3881 30.5166 44.5084C30.5277 44.5732 30.5638 44.6311 30.6171 44.6696C30.6705 44.7081 30.7367 44.7243 30.8018 44.7145C30.8514 44.7132 30.9001 44.7004 30.9439 44.6772C30.9878 44.6539 31.0256 44.6208 31.0545 44.5805C31.0834 44.5401 31.1026 44.4936 31.1105 44.4446C31.1185 44.3956 31.1149 44.3455 31.1002 44.2981Z"
          fill="currentcolor"
        />
        <path
          d="M24.2636 43.4883C24.395 43.2881 24.5554 43.3337 24.6192 43.2013C24.3119 43.24 24.0122 43.325 23.7303 43.4532C23.7188 43.4562 23.7082 43.4616 23.6991 43.4691C23.69 43.4766 23.6826 43.4861 23.6776 43.4968C23.6334 44.0172 23.2606 43.7088 23.036 43.7384C22.8345 43.6835 22.6221 43.6816 22.4196 43.733C22.4065 43.7401 22.3918 43.7437 22.3768 43.7435C22.3619 43.7432 22.3473 43.7391 22.3344 43.7315C22.3215 43.7239 22.3108 43.7131 22.3034 43.7002C22.2959 43.6872 22.2919 43.6726 22.2917 43.6576C22.2744 43.5618 22.3216 43.5326 22.4085 43.5312C22.6037 43.5335 22.7985 43.5152 22.9898 43.4765C22.6365 43.3346 22.2629 43.3305 21.9076 43.2061C21.062 42.9099 20.8588 42.6038 20.8146 41.6714C20.7469 41.09 20.6497 40.5125 20.5236 39.9409C20.4392 39.2861 20.4074 38.6255 20.4286 37.9656C20.4395 37.0937 20.4762 36.2208 20.4085 35.3521C20.4234 34.7449 20.483 34.1396 20.5869 33.5412C20.588 33.0924 20.6449 32.6455 20.7562 32.2107C20.8642 31.8527 21.0347 31.5166 21.2599 31.2179C21.5697 30.932 21.9586 30.7463 22.3757 30.6849C23.0683 30.4805 23.7748 30.3265 24.4897 30.224C25.0622 30.1557 25.6388 30.1273 26.2152 30.1391C26.7315 30.1178 27.2477 30.0938 27.7641 30.0738C27.8321 30.0711 27.8824 30.1004 27.9105 29.9876C27.9499 29.8296 28.0377 29.7148 28.1416 29.9722C28.1789 30.0646 28.2922 30.0221 28.3674 30.0145C29.3146 29.967 30.2641 29.9987 31.2061 30.109C31.4763 30.1305 31.7374 30.2163 31.9677 30.3592C32.198 30.5021 32.3907 30.698 32.5299 30.9306C32.9171 31.6156 33.062 32.4111 32.9415 33.1886C32.9444 33.5506 32.9655 33.9123 33.0046 34.2723C33.0375 35.195 32.9834 36.1174 33.0192 37.0413C33.0782 37.8828 32.9909 38.7281 32.7612 39.5398C32.6754 39.8892 32.6074 40.2428 32.5576 40.5991C32.4412 41.1623 31.9764 41.2139 31.614 41.4273C31.0921 41.7345 30.4826 41.8244 29.9399 42.0848C29.784 42.1641 29.6131 42.2092 29.4384 42.2174C28.894 42.2761 28.3568 42.3892 27.8349 42.555C27.2767 42.6521 26.726 42.7881 26.1868 42.9619C26.0863 42.9919 25.9821 43.0075 25.8773 43.0085C25.7603 42.999 25.6427 43.0145 25.5322 43.0539C25.4216 43.0934 25.3208 43.1559 25.2363 43.2374C24.9465 43.4211 24.6061 43.5089 24.2636 43.4883ZM21.7199 31.5893C21.3974 31.8617 21.1859 32.2429 21.1253 32.6607C21.0227 33.0597 21.093 33.4813 20.995 33.8738C20.869 34.3691 20.8222 34.8812 20.8565 35.3911C20.9239 36.3277 20.8846 37.2638 20.8874 38.1982C20.8713 38.9269 20.9403 39.6551 21.0931 40.3678C21.2033 40.7251 21.2701 41.0944 21.2919 41.4677C21.2883 42.0062 21.3708 42.4534 22.0036 42.6639C22.3589 42.832 22.7433 42.9298 23.1357 42.9521C23.9024 42.9179 24.6381 42.7048 25.394 42.607C26.3883 42.4593 27.3705 42.2393 28.3327 41.9487C29.1703 41.7993 29.9898 41.5623 30.7778 41.2414C31.1262 41.0096 31.5065 40.8296 31.9068 40.7072C31.9626 40.6874 32.0103 40.6497 32.0424 40.5998C32.0744 40.5499 32.089 40.4909 32.0837 40.4318C32.384 39.3539 32.5394 38.2408 32.546 37.1219C32.5115 36.081 32.5418 35.0364 32.4672 33.9989C32.416 33.2879 32.5878 32.4986 31.914 31.9205C32.4456 31.8782 32.4431 31.8798 32.1728 31.4477C32.1154 31.3449 32.0659 31.2379 32.0246 31.1276C32.0107 31.0702 31.9787 31.0188 31.9335 30.981C31.8882 30.9432 31.8319 30.9208 31.773 30.9173C31.7034 30.935 31.6307 30.9377 31.5599 30.9253C31.4892 30.9129 31.4218 30.8856 31.3623 30.8453C31.1154 30.8053 30.9201 30.6232 30.697 30.5972C30.1335 30.5318 29.5627 30.5178 28.9944 30.5071C27.95 30.4875 26.9096 30.5814 25.8692 30.6562C25.0591 30.7144 24.2479 30.7745 23.4423 30.8748C23.2315 30.8817 23.0255 30.9401 22.8425 31.045C22.6595 31.1499 22.505 31.2982 22.3926 31.4767C22.2492 31.7814 22.164 32.1102 22.1412 32.4462C22.0042 33.4747 21.8105 34.4961 21.7438 35.5358C21.6824 36.5559 21.6769 37.5786 21.7275 38.5992C21.7402 38.8781 21.7498 39.1637 21.7882 39.4464C21.9423 40.0934 22.0449 40.7516 22.0951 41.4148C22.1035 41.6947 22.1622 41.9708 22.2683 42.23C22.3171 42.3648 22.4464 42.4828 22.2734 42.5834C22.201 42.6122 22.1202 42.612 22.0479 42.5827C21.9757 42.5533 21.9176 42.4972 21.8857 42.4261C21.756 42.2087 21.6944 41.9574 21.7089 41.7046C21.6205 41.028 21.4699 40.3481 21.38 39.682C21.178 38.1548 21.164 36.6086 21.3381 35.0779C21.4177 34.3627 21.5636 33.6532 21.6113 32.9366C21.6936 32.4924 21.73 32.0409 21.7199 31.5893Z"
          fill="currentcolor"
        />
        <path
          d="M20.6385 25.6537C20.6705 24.4963 20.5912 23.4501 20.6451 22.4116C20.6991 21.6605 20.8179 20.9155 21.0003 20.1849C21.0918 19.8853 21.2453 19.6083 21.4507 19.3717C21.6561 19.1352 21.9089 18.9444 22.1927 18.8118C22.6109 18.63 23.0594 18.5278 23.5151 18.5105C23.9162 18.4375 24.3251 18.4041 24.7231 18.3185C25.1804 18.2721 25.6406 18.2622 26.0994 18.2889C26.3358 18.2757 26.5661 18.2198 26.7965 18.2133C27.4296 18.1953 28.0614 18.155 28.6985 18.1968C29.2526 18.1991 29.8059 18.2415 30.354 18.3236C30.764 18.388 31.1496 18.5595 31.4721 18.8208C31.7946 19.082 32.0423 19.4237 32.1904 19.8114C32.3979 20.4984 32.495 21.214 32.4781 21.9314C32.5342 22.5787 32.5328 23.2315 32.5645 23.8807C32.5972 24.5482 32.4993 25.2275 32.5001 25.9044C32.4772 26.1062 32.3814 26.2927 32.2307 26.4288C31.8579 26.8718 31.359 27.1907 30.8004 27.3431C29.7742 27.5952 28.7238 27.7364 27.6674 27.7641C27.1977 27.7771 26.7051 27.868 26.224 27.9036C25.5574 27.9263 24.8901 27.8839 24.2317 27.7771C24.0124 27.7656 23.7924 27.7775 23.5756 27.8128C22.851 27.8548 22.1244 27.775 21.4262 27.5766C21.3038 27.5465 21.1929 27.4813 21.107 27.3891C21.0212 27.2968 20.9642 27.1815 20.943 27.0573C20.8917 26.538 20.5473 26.0813 20.6385 25.6537ZM21.6849 19.968L21.5918 19.9239C21.4424 20.3158 21.3266 20.7197 21.2455 21.1312C21.1068 22.0282 21.0644 22.9375 21.119 23.8435C21.197 24.6645 21.1136 25.5042 21.2321 26.3325C21.2634 26.5425 21.3547 26.739 21.495 26.8985C21.6353 27.0579 21.8186 27.1734 22.0229 27.2312C22.4876 27.3322 22.9632 27.3731 23.4383 27.353C24.5004 27.3211 25.5578 27.5286 26.6254 27.4428C27.2997 27.3886 27.9659 27.2837 28.6507 27.2818C29.2826 27.2331 29.9081 27.1224 30.5183 26.9511C30.8693 26.8985 31.1937 26.7334 31.4429 26.4806C31.6921 26.2279 31.8525 25.9011 31.9 25.5493C32.0623 24.8123 32.0996 24.0532 32.0102 23.3038C31.9571 23.0077 31.9379 22.7064 31.9532 22.4058C32.071 21.739 32.002 21.0525 31.7539 20.4224C31.5943 20.1763 31.4956 19.8957 31.4657 19.604C31.4556 19.5385 31.4287 19.4768 31.3878 19.4247C31.3469 19.3726 31.2933 19.332 31.2321 19.3066C30.5768 18.8915 29.8122 18.6819 29.0368 18.7048C28.7807 18.7143 28.5242 18.7067 28.269 18.682C27.6852 18.6648 27.1009 18.6786 26.5186 18.7233C26.429 18.7691 26.3492 18.8318 26.2834 18.908C26.1161 18.9462 25.9436 18.9565 25.7729 18.9385C25.8504 18.8213 26.0355 18.9278 26.0244 18.7178C25.5743 18.7514 25.1255 18.6325 24.675 18.7085C24.1488 18.7974 23.6286 18.9215 23.1028 19.0136C22.9073 19.0315 22.7215 19.1073 22.5692 19.2312C22.4169 19.3552 22.305 19.5217 22.2477 19.7095C22.1559 20.0088 22.0874 20.3148 22.0429 20.6248C21.8928 21.7742 21.8522 22.9353 21.9215 24.0924C21.9378 24.8296 21.9168 25.5713 21.9316 26.3112C21.9404 26.3411 21.9424 26.3726 21.9375 26.4033C21.9327 26.4341 21.9211 26.4634 21.9037 26.4892C21.8862 26.515 21.8632 26.5366 21.8364 26.5525C21.8096 26.5683 21.7796 26.5781 21.7486 26.5811C21.7176 26.584 21.6863 26.5801 21.657 26.5695C21.6277 26.559 21.6011 26.5421 21.5791 26.5201C21.557 26.4981 21.5401 26.4715 21.5296 26.4422C21.519 26.4128 21.5151 26.3816 21.518 26.3506C21.4928 26.1657 21.5042 25.9759 21.4804 25.7907C21.3886 24.8934 21.3776 23.9897 21.4476 23.0904C21.4777 22.5077 21.4589 21.9246 21.5065 21.3411C21.5442 20.8791 21.6753 20.4312 21.6849 19.968Z"
          fill="currentcolor"
        />
        <path
          d="M29.0454 43.2622C28.9568 43.4074 28.8327 43.5277 28.6848 43.6117C28.5369 43.6958 28.3701 43.7408 28.2 43.7426C27.9015 43.7899 27.6098 43.873 27.3312 43.99C27.2631 44.0116 27.1512 44.0452 27.1938 43.9503C27.2832 43.7928 27.3931 43.6478 27.5205 43.519C27.6403 43.3749 27.6584 43.5638 27.7277 43.5865C27.7911 43.6315 27.8691 43.6509 27.9462 43.6408C28.0233 43.6307 28.0937 43.592 28.1435 43.5323C28.41 43.3533 28.7244 43.2591 29.0454 43.2622Z"
          fill="currentcolor"
        />
        <path
          d="M31.5243 42.4809C31.5821 42.2017 32.0343 42.3347 31.8973 42.1052C31.8155 41.9981 31.7014 41.9202 31.5719 41.8829C31.4424 41.8456 31.3044 41.851 31.1782 41.8982C31.1512 41.9127 31.12 41.9169 31.0902 41.9101C31.0604 41.9033 31.034 41.886 31.016 41.8613C31.2304 41.7092 31.4911 41.6363 31.7533 41.6552C31.9966 41.7633 32.2471 41.8543 32.5031 41.9275C32.2672 42.3475 31.8758 42.3242 31.5243 42.4809Z"
          fill="currentcolor"
        />
        <path
          d="M30.5141 42.868C30.1933 42.9754 29.9179 43.0636 29.6456 43.1606C29.5919 43.1855 29.5309 43.19 29.474 43.1732C29.4172 43.1565 29.3684 43.1196 29.3368 43.0695C29.273 42.9568 29.4234 42.9333 29.4841 42.8742C29.5511 42.8058 29.631 42.7513 29.7192 42.714C29.8073 42.6766 29.902 42.657 29.9978 42.6565C30.0936 42.6559 30.1885 42.6743 30.2771 42.7106C30.3657 42.7469 30.4463 42.8004 30.5141 42.868Z"
          fill="currentcolor"
        />
        <path
          d="M21.8257 43.7858C21.821 43.8635 21.7669 43.9222 21.7185 43.8878C21.6053 43.8072 21.4113 43.9207 21.3625 43.7612C21.3381 43.6815 21.4587 43.63 21.5589 43.628C21.6146 43.6213 21.6708 43.6332 21.719 43.6617C21.7672 43.6902 21.8047 43.7338 21.8257 43.7858Z"
          fill="currentcolor"
        />
        <path
          d="M15.6278 24.8892C15.5298 24.9353 15.6494 25.1201 15.4947 25.0915C15.3992 25.0739 15.4444 24.9519 15.4394 24.8768C15.4283 24.7119 15.4301 24.5462 15.4233 24.381C15.4192 24.2829 15.4203 24.1612 15.5256 24.1458C15.6628 24.1257 15.6769 24.2671 15.6909 24.3636C15.7833 24.9285 15.9239 25.4843 16.1113 26.0251C16.4093 26.941 16.6643 27.8724 17.0563 28.7761C17.1919 28.5834 16.9555 28.4235 17.0731 28.1992C17.2584 28.5746 17.3519 28.9887 17.3459 29.4074C16.4144 28.0001 16.1412 26.399 15.6278 24.8892Z"
          fill="currentcolor"
        />
        <path
          d="M16.6902 31.2125L16.4367 30.0377C16.6512 30.4518 16.8037 30.8952 16.8893 31.3537C16.8938 31.368 16.8941 31.3833 16.8901 31.3977C16.8861 31.4121 16.878 31.4251 16.8668 31.435C16.8556 31.445 16.8417 31.4515 16.8269 31.4538C16.8121 31.456 16.797 31.454 16.7833 31.4478C16.7023 31.3969 16.6048 31.5618 16.5489 31.4167C16.5404 31.3948 16.5364 31.371 16.5264 31.3499C16.2164 30.6699 15.9453 29.9729 15.7146 29.2621C15.6457 29.1833 15.5982 29.0881 15.5767 28.9857C15.5552 28.8833 15.5603 28.777 15.5917 28.6772C15.9336 29.5421 16.2653 30.3814 16.5971 31.2207L16.6902 31.2125Z"
          fill="currentcolor"
        />
        <path
          d="M16.5483 25.1254C16.3827 24.8905 16.2657 24.6249 16.2042 24.3442C16.0114 23.6301 15.7802 22.927 15.5117 22.2378C15.4643 22.1146 15.3342 21.9554 15.5333 21.882C15.735 21.8077 15.7671 22.0456 15.7732 22.1409C15.9087 22.8941 16.1027 23.6356 16.3535 24.3587C16.4674 24.5993 16.5335 24.8596 16.5483 25.1254Z"
          fill="currentcolor"
        />
        <path
          d="M16.2697 29.3644C16.0717 28.3951 15.8738 27.4258 15.6758 26.4565L15.7687 26.4373C15.9719 27.4044 16.1752 28.3714 16.3784 29.3384L16.2697 29.3644Z"
          fill="currentcolor"
        />
        <path
          d="M17.343 19.8761L17.7578 21.5305C17.5804 21.2608 17.4561 20.9598 17.3914 20.6435C17.3627 20.5665 17.4071 20.3398 17.2137 20.5526C17.1705 20.6001 17.0964 20.5145 17.1107 20.4703C17.1722 20.28 17.0209 20.0199 17.343 19.8761Z"
          fill="currentcolor"
        />
        <path
          d="M16.308 21.4521C16.0816 21.0803 15.9048 20.6805 15.7821 20.2628C15.7731 20.2441 15.7684 20.2236 15.7686 20.2029C15.7687 20.1821 15.7736 20.1616 15.7829 20.143C15.7922 20.1245 15.8056 20.1083 15.8221 20.0957C15.8387 20.0831 15.8579 20.0745 15.8782 20.0705C15.968 20.0457 15.9858 20.1032 16.0099 20.1821C16.137 20.5984 16.1895 21.032 16.308 21.4521Z"
          fill="currentcolor"
        />
        <path
          d="M15.7668 40.0087C16.1347 40.255 16.2181 40.6923 16.5284 41.0961C16.1555 40.9357 16.0518 40.7844 15.7668 40.0087Z"
          fill="currentcolor"
        />
        <path
          d="M15.7162 36.311C15.3259 35.9231 15.4879 35.4216 15.3058 35.0247C15.4613 35.1979 15.5784 35.4021 15.6491 35.6238C15.7198 35.8455 15.7427 36.0798 15.7162 36.311Z"
          fill="currentcolor"
        />
        <path
          d="M17.191 19.4504C17.0041 19.1929 16.8799 18.8952 16.8284 18.5812C16.8222 18.5644 16.8194 18.5465 16.8204 18.5286C16.8214 18.5107 16.826 18.4932 16.834 18.4772C16.8421 18.4611 16.8533 18.4469 16.867 18.4354C16.8807 18.4239 16.8967 18.4153 16.9139 18.4102C16.9274 18.4043 16.9423 18.4022 16.957 18.4039C16.9716 18.4057 16.9856 18.4113 16.9974 18.4202C17.0092 18.4291 17.0184 18.441 17.0241 18.4546C17.0299 18.4682 17.0319 18.4831 17.03 18.4977C17.1037 18.8116 17.1575 19.1298 17.191 19.4504Z"
          fill="currentcolor"
        />
        <path
          d="M15.0522 27.3504C15.2877 27.6262 15.4202 27.9752 15.427 28.3378C15.2114 28.0506 15.0815 27.7083 15.0522 27.3504Z"
          fill="currentcolor"
        />
        <path
          d="M16.5192 21.925C16.6913 22.3374 16.8383 22.7597 16.9594 23.1898L16.8775 23.2195C16.714 22.7972 16.5505 22.3749 16.387 21.9525L16.5192 21.925Z"
          fill="currentcolor"
        />
        <path
          d="M17.1592 26.6019C16.8854 26.2111 16.6947 25.7683 16.5988 25.3008C16.8294 25.7143 17.0171 26.1503 17.1592 26.6019Z"
          fill="currentcolor"
        />
        <path
          d="M15.3488 30.1519C15.2764 29.8767 15.1999 29.6025 15.1354 29.3254C15.1231 29.2727 15.0936 29.1711 15.2088 29.171C15.2266 29.1703 15.2443 29.1734 15.2609 29.1799C15.2775 29.1864 15.2925 29.1962 15.3052 29.2087C15.3178 29.2212 15.3277 29.2362 15.3343 29.2527C15.341 29.2692 15.3442 29.2869 15.3437 29.3047C15.373 29.5781 15.4053 29.8511 15.4363 30.1243L15.3488 30.1519Z"
          fill="currentcolor"
        />
        <path
          d="M16.6796 23.0298C16.7637 23.4547 16.8479 23.8797 16.932 24.3046L16.8438 24.3233C16.6971 23.9089 16.6411 23.4678 16.6796 23.0298Z"
          fill="currentcolor"
        />
        <path
          d="M15.3967 39.0437C15.4661 39.0901 15.5201 39.156 15.552 39.2332C15.5839 39.3103 15.5922 39.3952 15.5759 39.477C15.5295 39.6232 15.6553 39.6387 15.7597 39.6709C15.7803 39.6747 15.7995 39.6841 15.8151 39.698C15.8308 39.7119 15.8423 39.7298 15.8486 39.7498C15.8548 39.7698 15.8554 39.7911 15.8504 39.8115C15.8454 39.8318 15.835 39.8504 15.8202 39.8652C15.766 39.9231 15.7089 39.8582 15.6569 39.8037C15.4749 39.5936 15.3816 39.3212 15.3967 39.0437Z"
          fill="currentcolor"
        />
        <path
          d="M17.3247 26.3159C17.2432 26.2093 17.1839 26.0874 17.1502 25.9575C17.1165 25.8276 17.1092 25.6923 17.1286 25.5595C17.2863 25.7782 17.3563 26.0481 17.3247 26.3159Z"
          fill="currentcolor"
        />
        <path
          d="M17.0591 35.9522C16.8721 35.6936 16.7686 35.384 16.7626 35.0649C16.9133 35.3407 17.0137 35.6412 17.0591 35.9522Z"
          fill="currentcolor"
        />
        <path
          d="M16.4071 38.0302L16.7679 38.7623L16.6822 38.804C16.586 38.7006 16.512 38.5786 16.4646 38.4455C16.4173 38.3124 16.3977 38.1711 16.4071 38.0302Z"
          fill="currentcolor"
        />
        <path
          d="M31.3574 34.1738C30.149 34.5398 28.9142 34.7504 27.693 35.0314L27.6544 34.8349C28.8731 34.5305 30.1229 34.3791 31.3574 34.1738Z"
          fill="currentcolor"
        />
        <path
          d="M29.7763 39.3225C29.4685 39.4768 29.1332 39.5684 28.7898 39.5922C28.1969 39.6388 27.608 39.7259 27.027 39.8528C26.9398 39.8774 26.7675 39.8175 26.9147 40.0192C26.9558 40.0756 26.8352 40.1595 26.7616 40.1247C26.6465 40.0703 26.4515 40.1355 26.4303 39.9275C26.4279 39.9102 26.4293 39.8927 26.4346 39.876C26.4398 39.8594 26.4487 39.8442 26.4606 39.8314C26.4725 39.8187 26.487 39.8087 26.5033 39.8023C26.5195 39.7959 26.5369 39.7933 26.5543 39.7945C27.5864 39.5934 28.6216 39.411 29.6639 39.2706C29.7038 39.2822 29.7417 39.2997 29.7763 39.3225Z"
          fill="currentcolor"
        />
        <path
          d="M28.5453 40.0001C28.9962 39.845 29.4644 39.7458 29.9394 39.7047C30.1497 39.7048 30.3594 39.6807 30.5641 39.6328C30.6152 39.6183 30.6689 39.6157 30.7212 39.625C30.7735 39.6342 30.823 39.6552 30.8659 39.6864C30.9044 39.7026 30.9359 39.7319 30.955 39.769C30.9742 39.8061 30.9797 39.8487 30.9707 39.8894C30.9484 39.9867 30.8597 39.9583 30.7971 39.9599C30.0478 40.0135 29.2961 40.0269 28.5453 40.0001Z"
          fill="currentcolor"
        />
        <path
          d="M28.3243 40.9321C28.499 40.8159 28.6971 40.7393 28.9046 40.7079C29.6324 40.4983 30.3623 40.2947 31.0843 40.0664C31.2583 40.0483 31.4308 40.0171 31.6001 39.9728C31.6157 39.9639 31.6332 39.959 31.6511 39.9584C31.6691 39.9578 31.6869 39.9617 31.703 39.9696C31.7191 39.9775 31.733 39.9892 31.7435 40.0037C31.7541 40.0183 31.7609 40.0352 31.7633 40.0529C31.79 40.1598 31.6814 40.1381 31.6273 40.1688C31.5692 40.2096 31.4978 40.2271 31.4274 40.2178C31.0442 40.2211 30.6663 40.307 30.3192 40.4695C29.6646 40.6654 28.9983 40.82 28.3243 40.9321Z"
          fill="currentcolor"
        />
        <path
          d="M31.0794 39.1551C30.7621 39.2165 30.446 39.2866 30.1265 39.3335C30.0393 39.3464 29.8988 39.4276 29.8653 39.2166C29.8349 39.0258 29.9764 39.0218 30.0594 39.0157C30.2301 38.9697 30.4083 38.9583 30.5835 38.9822C30.7587 39.0062 30.9273 39.065 31.0794 39.1551Z"
          fill="currentcolor"
        />
        <path
          d="M28.8086 35.3842C29.1876 35.1773 29.6202 35.0895 30.0499 35.1323C29.6746 35.391 29.2241 35.2921 28.8086 35.3842Z"
          fill="currentcolor"
        />
        <path
          d="M31.8405 37.8605C31.6845 37.8857 31.6136 37.8585 31.5839 37.7921C31.5319 37.676 31.6546 37.6705 31.7109 37.6257C31.7395 37.6057 31.771 37.5902 31.8043 37.5797C31.9917 37.5083 32.2504 37.5082 32.2943 37.6733C32.3542 37.8985 32.0672 37.736 31.9631 37.8283C31.9277 37.8539 31.884 37.8654 31.8405 37.8605Z"
          fill="currentcolor"
        />
        <path
          d="M30.0433 35.9048C30.3146 35.8197 30.5855 35.7332 30.8576 35.6504C30.9196 35.6315 31.0057 35.5958 31.0209 35.6989C31.0221 35.7339 31.01 35.768 30.9871 35.7944C30.9642 35.8209 30.9322 35.8377 30.8974 35.8415C30.6237 35.9248 30.3409 35.9749 30.0551 35.9907L30.0433 35.9048Z"
          fill="currentcolor"
        />
        <path
          d="M30.7104 35.4856C30.322 35.5211 29.9335 35.5566 29.5451 35.592L29.5363 35.4634C29.9222 35.4025 30.3122 35.3711 30.7029 35.3696L30.7104 35.4856Z"
          fill="currentcolor"
        />
        <path
          d="M31.1979 34.9451C31.0959 35.0554 30.9582 35.1262 30.8092 35.1451C30.6601 35.1641 30.5091 35.1299 30.3827 35.0487C30.6326 34.9155 30.9227 34.8787 31.1979 34.9451Z"
          fill="currentcolor"
        />
        <path
          d="M31.4231 34.9408C31.5436 34.9131 31.6567 34.8595 31.7545 34.7839C31.8229 34.6883 31.9012 34.6342 31.9724 34.6908C32.0059 34.725 32.0316 34.766 32.0477 34.8111C32.0637 34.8562 32.0699 34.9042 32.0656 34.9518C32.0497 35.0806 31.9312 34.9726 31.8614 34.9978C31.7921 35.0374 31.7118 35.0533 31.6327 35.043C31.5535 35.0327 31.4799 34.9968 31.4231 34.9408Z"
          fill="currentcolor"
        />
        <path
          d="M30.5666 31.6501C30.4486 31.6102 30.2434 31.6535 30.2233 31.4923C30.2077 31.3668 30.3874 31.3733 30.5017 31.3635C30.6429 31.3515 30.7808 31.3737 30.7916 31.5348C30.8002 31.662 30.6665 31.6401 30.5666 31.6501Z"
          fill="currentcolor"
        />
        <path
          d="M27.1798 31.8409C26.958 31.9406 26.7168 31.99 26.4735 31.9854C26.3965 31.9825 26.3343 31.9607 26.3503 31.8638C26.3513 31.849 26.3556 31.8347 26.363 31.8219C26.3703 31.809 26.3805 31.7981 26.3928 31.7898C26.4051 31.7816 26.4191 31.7763 26.4338 31.7743C26.4484 31.7724 26.4634 31.7738 26.4774 31.7786C26.7076 31.8314 26.9439 31.8523 27.1798 31.8409Z"
          fill="currentcolor"
        />
        <path
          d="M31.5066 35.3917C31.5805 35.4074 31.7747 35.3679 31.7484 35.5131C31.7101 35.5773 31.6531 35.6283 31.5851 35.6592C31.517 35.6902 31.4412 35.6996 31.3676 35.6863C31.3081 35.693 31.2007 35.7329 31.2178 35.6156C31.2182 35.5805 31.2265 35.5459 31.2421 35.5144C31.2578 35.4829 31.2803 35.4554 31.3081 35.4339C31.3358 35.4123 31.3681 35.3974 31.4025 35.39C31.4369 35.3827 31.4724 35.3833 31.5066 35.3917Z"
          fill="currentcolor"
        />
        <path
          d="M31.3514 36.4285C31.4345 36.3486 31.5403 36.2963 31.6543 36.279C31.7683 36.2616 31.8849 36.2799 31.988 36.3315C31.9947 36.3454 31.9987 36.3605 31.9995 36.3759C32.0004 36.3913 31.9982 36.4068 31.9931 36.4214C31.7824 36.4721 31.5631 36.4745 31.3514 36.4285Z"
          fill="currentcolor"
        />
        <path
          d="M26.7174 26.5246C27.8438 26.226 29.0383 26.2457 30.1227 25.7632C29.8155 25.8246 29.4975 25.8054 29.1999 25.7074C29.7105 25.5938 30.2428 25.6264 30.7358 25.8015C30.5201 25.9488 30.2728 26.0431 30.0138 26.0767C29.7666 26.1382 29.5174 26.1913 29.1858 26.2671C29.6074 26.3395 30.0051 26.1756 30.3015 26.5243C29.6897 26.6695 29.0871 26.4363 28.4959 26.5635C28.4637 26.4393 28.6352 26.4919 28.633 26.3862C27.9881 26.3186 27.3692 26.5975 26.7174 26.5246Z"
          fill="currentcolor"
        />
        <path
          d="M30.7464 24.4013C29.9741 24.662 29.1576 24.7659 28.3446 24.7071C29.137 24.5474 29.95 24.5221 30.7464 24.4013Z"
          fill="currentcolor"
        />
        <path
          d="M27.1155 19.6493C27.6664 19.5715 28.224 19.552 28.7789 19.5911C28.8415 19.5905 28.9038 19.589 28.9007 19.671C28.8999 19.6858 28.8962 19.7003 28.8897 19.7136C28.8833 19.727 28.8742 19.7389 28.8631 19.7487C28.852 19.7585 28.839 19.766 28.825 19.7707C28.8109 19.7755 28.7961 19.7773 28.7813 19.7763C28.5943 19.7979 28.4053 19.7969 28.2185 19.7733C27.9791 19.7103 27.7271 19.7123 27.4887 19.7788C27.4206 19.7927 27.35 19.788 27.2844 19.7652C27.2187 19.7424 27.1604 19.7024 27.1155 19.6493Z"
          fill="currentcolor"
        />
        <path
          d="M29.6584 20.5396C30.1369 20.3391 30.6552 20.2515 31.1731 20.2837C30.6934 20.4803 30.1761 20.5678 29.6584 20.5396Z"
          fill="currentcolor"
        />
        <path
          d="M31.1923 23.6294C31.0677 23.6423 30.9242 23.6989 30.8858 23.5183C30.8517 23.3575 30.9603 23.3232 31.0914 23.3397C31.2508 23.3597 31.5046 23.2388 31.537 23.469C31.5694 23.7001 31.3078 23.5704 31.1923 23.6294Z"
          fill="currentcolor"
        />
        <path
          d="M27.9099 24.7726C27.5686 24.8115 27.2311 25.0335 26.8005 24.7888C27.1639 24.6965 27.5439 24.6909 27.9099 24.7726Z"
          fill="currentcolor"
        />
        <path
          d="M30.3204 25.0408C30.2011 25.1514 30.0573 25.2321 29.9008 25.2765C29.7444 25.3209 29.5796 25.3276 29.42 25.2962C29.6927 25.134 30.0031 25.0459 30.3204 25.0408Z"
          fill="currentcolor"
        />
        <path
          d="M29.7386 22.9971C30.0187 22.8863 30.32 22.8394 30.6206 22.8599C30.35 23.0022 30.0397 23.0505 29.7386 22.9971Z"
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

export default TrillekoffertImg;
