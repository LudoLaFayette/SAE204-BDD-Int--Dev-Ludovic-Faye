<template>
<header>
    <Logo></Logo>

    <p class="w-[1232.47px] flex-grow text-center text-8xl font-bold text-[#801e1e]">AUX’HALLES</p>
    <nav>
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
    </nav>
    <MenuH></MenuH>
  </header>
  <img src="image-1-1.png" class="w-[1474px] h-[1014px] object-cover" />
  <div class="flex justify-start items-start w-[560px] gap-2.5 p-2.5">
  <div
    class="flex justify-start items-start flex-grow relative gap-2.5 px-[35px] py-1 rounded-[25px] bg-white border-2 border-red-600"
  >
    <p class="flex-grow w-[470px] text-[80px] font-bold text-center text-red-600">CONCERTS</p>
  </div>
</div>
<p class="w-[1350px] text-6xl text-center text-zinc-900">
  Voici la partie du site ou vous pourrez choisir le concert auxquel vous voulez réserver votre
  place :
</p>
<div class="w-[1350px] h-[122px]">
  <div
    class="w-[1350px] h-[116px] absolute left-[44.5px] top-[1579.5px] rounded-[25px] bg-gray-100 border border-white"
  ></div>
  <p
    class="w-[282.56px] h-[72px] absolute left-[71.85px] top-[1630px] text-6xl text-left text-black"
  >
    Trier par :
  </p>
  <div class="w-[341.66px] h-12">
    <p
      class="w-[302.98px] h-12 absolute left-[647.13px] top-[1626px] text-[40px] text-left text-black"
    >
      Lieu de la scène
    </p>
    <svg
      width="343"
      height="1"
      viewBox="0 0 343 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-[638.31px] top-[1669.5px]"
      preserveAspectRatio="none"
    >
      <line x1="0.814697" y1="0.5" x2="342.475" y2="0.5" stroke="black"></line></svg
    ><svg
      width="34"
      height="20"
      viewBox="0 0 34 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[33.24px] h-[18.35px] absolute left-[945.85px] top-[1641.5px]"
      preserveAspectRatio="none"
    >
      <line
        y1="-0.5"
        x2="24.7607"
        y2="-0.5"
        transform="matrix(0.671269 0.741214 -0.671269 0.741214 0.347412 1)"
        stroke="black"
      ></line>
      <line
        y1="-0.5"
        x2="24.7607"
        y2="-0.5"
        transform="matrix(0.671269 -0.741214 0.671269 0.741214 16.9685 19.353)"
        stroke="black"
      ></line>
    </svg>
  </div>
  <div class="w-[189.76px] h-[30px]">
    <p
      class="w-[130.4px] h-6 absolute left-[404.73px] top-[1640px] text-[40px] text-left text-black"
    >
      Artiste
    </p>
    <svg
      width="190"
      height="1"
      viewBox="0 0 190 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-[405.01px] top-[1669.5px]"
      preserveAspectRatio="none"
    >
      <line x1="0.51123" y1="0.5" x2="189.492" y2="0.5" stroke="black"></line></svg
    ><svg
      width="38"
      height="19"
      viewBox="0 0 38 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[37.8px] h-[18px] absolute left-[537.61px] top-[1641.5px]"
      preserveAspectRatio="none"
    >
      <line
        y1="-0.5"
        x2="26.0986"
        y2="-0.5"
        transform="matrix(0.724103 0.689692 -0.724103 0.689692 0.114014 1)"
        stroke="black"
      ></line>
      <line
        y1="-0.5"
        x2="26.0986"
        y2="-0.5"
        transform="matrix(0.724103 -0.689692 0.724103 0.689692 19.012 19)"
        stroke="black"
      ></line>
    </svg>
  </div>
  <div class="w-[302.87px] h-[48.48px]">
    <p
      class="w-[234.54px] h-[48.48px] absolute left-[1049.83px] top-[1626px] text-[40px] text-left text-black"
    >
      Catégorie
    </p>
    <svg
      width="304"
      height="1"
      viewBox="0 0 304 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-[1035.37px] top-[1669.5px]"
      preserveAspectRatio="none"
    >
      <line x1="0.873779" y1="0.5" x2="303.747" y2="0.5" stroke="black"></line></svg
    ><svg
      width="34"
      height="20"
      viewBox="0 0 34 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[33.24px] h-[18.18px] absolute left-[1297.62px] top-[1639.7px]"
      preserveAspectRatio="none"
    >
      <line
        y1="-0.5"
        x2="24.6341"
        y2="-0.5"
        transform="matrix(0.674718 0.738075 -0.674718 0.738075 0.123779 1.2019)"
        stroke="black"
      ></line>
      <line
        y1="-0.5"
        x2="24.6341"
        y2="-0.5"
        transform="matrix(0.674718 -0.738075 0.674718 0.738075 16.7449 19.3838)"
        stroke="black"
      ></line>
    </svg>
  </div>
</div>
<div
  class="flex flex-col justify-start items-start w-[936px] h-[1232px] relative gap-10 rounded-[35px] bg-gray-200"
  style="box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.5);"
>
  <img
    src="image-1-1.png"
    class="self-stretch flex-grow rounded-tl-[35px] rounded-tr-[35px] object-cover"
  />
  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[936px] text-[80px] text-left text-black">
    Yyes Jamait
  </p>
  <div
    class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5"
  >
    <p class="flex-grow w-[916px] text-[52px] text-left text-black">
      <span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Lundi 16 Juin : 14h30 - 16h30 </span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Lieu : Scène Interieur Halle</span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Catégorie : Chanson Française, Variété Francaise, Guitare</span
      >
    </p>
  </div>
  <div
    class="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pt-2.5"
  >
    <svg
      width="936"
      height="1"
      viewBox="0 0 936 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line y1="0.75" x2="936" y2="0.75" stroke="black" stroke-width="0.5"></line>
    </svg>
  </div>
  <div
    class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 h-[26px] relative pr-[30px] pb-5"
  >
    <p class="flex-grow w-[906px] h-[9px] text-5xl text-right text-[#d92d3c]">RESERVER</p>
  </div>
</div>
<div
  class="flex flex-col justify-start items-start w-[936px] h-[1232px] relative gap-10 rounded-[35px] bg-gray-200"
  style="box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.5);"
>
  <img
    src="image-1-1.png"
    class="self-stretch flex-grow rounded-tl-[35px] rounded-tr-[35px] object-cover"
  />
  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[936px] text-[80px] text-left text-black">
    Yyes Jamait
  </p>
  <div
    class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5"
  >
    <p class="flex-grow w-[916px] text-[52px] text-left text-black">
      <span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Lundi 16 Juin : 14h30 - 16h30 </span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Lieu : Scène Interieur Halle</span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Catégorie : Chanson Française, Variété Francaise, Guitare</span
      >
    </p>
  </div>
  <div
    class="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pt-2.5"
  >
    <svg
      width="936"
      height="1"
      viewBox="0 0 936 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line y1="0.75" x2="936" y2="0.75" stroke="black" stroke-width="0.5"></line>
    </svg>
  </div>
  <div
    class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 h-[26px] relative pr-[30px] pb-5"
  >
    <p class="flex-grow w-[906px] h-[9px] text-5xl text-right text-[#d92d3c]">RESERVER</p>
  </div>
</div>
 <footer>
    <div class="relative h-[1312px] w-[1449px] bg-[#b1aca9]">
      <div class="absolute left-[33.78px] top-[150.53px] flex w-[486.93px] items-center justify-center gap-5 px-2.5 pt-2.5 pb-[30px]">
        <p class="w-[466.93px] flex-grow text-left text-[100px] font-bold text-[#801e1e]">Le Festival</p>
      </div>
      <div class="absolute left-[84.01px] top-[336.96px] flex w-[490.85px] flex-col items-start justify-center gap-5">
        <p class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] font-light text-black">Les concerts</p>
        <p class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] font-light text-black">Les artistes</p>
        <p class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] font-light text-black">Notre histoire</p>
        <p class="flex-shrink-0 flex-grow-0 text-left text-[64px] font-light text-black">Mentions légales</p>
      </div>
      <div class="absolute left-[852.94px] top-[100.53px] flex w-[530.12px] items-center justify-center gap-2.5 p-2.5">
        <p class="w-[510.12px] flex-grow text-left text-[100px] font-bold text-[#801e1e]">Nous contacter</p>
      </div>
      <div class="absolute left-[891.58px] top-[392.6px] flex w-[490.85px] flex-col items-start justify-center gap-2.5">
        <p class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] italic text-black">
          <span class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] italic text-black">Les Halles de sens</span
          ><br /><span class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] italic text-black"
            >Place de la République</span
          ><br /><span class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] italic text-black">89100, Sens</span
          ><br /><span class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] italic text-black"
            >03 86 64 00 50</span
          >
        </p>
        <p class="w-[490.85px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[64px] font-light text-black">Formulaire de contact</p>
      </div>
      <div class="absolute left-[34.34px] top-[905.43px] flex w-[592.95px] items-center justify-center gap-2.5 p-2.5">
        <p class="w-[572.95px] flex-grow text-left text-[50px] font-bold text-[#801e1e]">Nos réseaux sociaux</p>
      </div>
      <div class="absolute left-[56.96px] top-[1144.65px] flex w-[498.46px] items-center justify-end pr-[50px] opacity-30">
        <svg
          width="114"
          height="25"
          viewBox="0 0 114 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative flex-grow self-stretch"
          preserveAspectRatio="none"
        >
          <path
            d="M73.4134 5.967H82.1957V2.787C77.9435 2.69235 73.6711 2.64562 69.396 2.647C56.6898 2.647 48.0009 4.307 48.0009 7.347V9.967H33.6597V13.527H48.0009V22.647H65.1917V13.527H79.4863L81.6351 9.967H65.1917V7.697C65.1917 6.647 66.4997 5.967 73.4134 5.967Z"
            fill="#7F1D1D"
          ></path></svg
        ><svg
          width="113"
          height="25"
          viewBox="0 0 113 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative flex-grow self-stretch"
          preserveAspectRatio="none"
        >
          <path
            d="M81.076 6.10697C79.9673 6.10697 78.8835 6.17735 77.9617 6.30921C77.0398 6.44107 76.3213 6.62848 75.897 6.84775C75.4728 7.06702 75.3618 7.3083 75.578 7.54108C75.7943 7.77386 76.3282 7.98768 77.1122 8.1555C77.8962 8.32332 78.895 8.43761 79.9824 8.48391C81.0698 8.53022 82.1969 8.50645 83.2212 8.41563C84.2456 8.3248 85.121 8.171 85.737 7.97366C86.353 7.77632 86.6817 7.54431 86.6817 7.30697C86.6817 6.98871 86.0911 6.68349 85.0399 6.45844C83.9886 6.2334 82.5628 6.10697 81.076 6.10697V6.10697ZM102.565 8.52697C102.474 7.69727 101.748 6.87638 100.416 6.09697C99.2279 5.43011 97.3792 4.82625 94.9969 4.32697C92.6837 3.8144 89.8562 3.42115 86.7284 3.17697C83.0972 2.88313 79.2581 2.72418 75.3769 2.70697C70.4252 2.64697 68.8369 2.64697 56.1307 2.64697C43.4244 2.64697 41.8361 2.64697 36.8844 2.70697C33.0032 2.72418 29.1642 2.88313 25.5329 3.17697C22.4109 3.42362 19.5859 3.81653 17.2645 4.32697C14.87 4.82215 13.033 5.42741 11.8924 6.09697C10.5197 6.87432 9.77718 7.69613 9.69679 8.52697C9.4165 9.58697 9.4165 9.92697 9.4165 12.647C9.4165 15.367 9.4165 15.707 9.69679 16.767C9.77718 17.5978 10.5197 18.4196 11.8924 19.197C13.033 19.8665 14.87 20.4718 17.2645 20.967C19.5859 21.4774 22.4109 21.8703 25.5329 22.117C29.1642 22.4108 33.0032 22.5698 36.8844 22.587C41.8361 22.647 43.4244 22.647 56.1307 22.647C68.8369 22.647 70.4252 22.647 75.3769 22.587C79.2581 22.5698 83.0972 22.4108 86.7284 22.117C89.8562 21.8728 92.6837 21.4795 94.9969 20.967C97.3898 20.4696 99.2401 19.8652 100.416 19.197C101.748 18.4176 102.474 17.5967 102.565 16.767C102.565 15.707 102.845 15.367 102.845 12.647C102.845 9.92697 102.845 9.58697 102.565 8.52697V8.52697ZM94.156 16.647C94.122 17.2817 93.5849 17.9107 92.5677 18.507C91.8219 18.9422 90.6238 19.3354 89.0642 19.657C87.549 19.9875 85.7158 20.2434 83.692 20.407C80.9065 20.6247 77.9685 20.7397 75.0032 20.747C70.3318 20.797 68.6034 20.807 56.3175 20.807C44.0317 20.807 42.3033 20.807 37.6319 20.747C34.5529 20.7593 31.4871 20.6578 28.5693 20.447C26.6343 20.275 24.8852 20.0198 23.4308 19.697C21.8803 19.3757 20.6972 18.9822 19.9739 18.547C18.8334 17.9421 18.2008 17.2989 18.1053 16.647C18.1053 15.647 17.8251 15.277 17.8251 12.647C17.8251 10.017 17.8251 9.64697 18.1053 8.64697C18.1263 7.99803 18.6797 7.35492 19.7403 6.74697C20.5627 6.32488 21.825 5.94863 23.4308 5.64697C24.85 5.30314 26.604 5.03007 28.5693 4.84697C31.4168 4.62702 34.4179 4.51205 37.445 4.50697C42.1164 4.50697 43.8448 4.44697 56.1307 4.44697C68.4165 4.44697 70.1449 4.44697 74.8163 4.50697C77.7816 4.51425 80.7196 4.62922 83.5052 4.84697C85.628 5.01562 87.5333 5.28982 89.0642 5.64697C90.595 5.95415 91.7912 6.32971 92.5677 6.74697C93.606 7.35591 94.1433 7.99875 94.156 8.64697C94.3896 9.64697 94.4363 10.017 94.4363 12.647C94.4363 15.277 94.3896 15.647 94.156 16.647ZM56.1307 7.51697C51.393 7.51895 46.7643 7.8215 42.8295 8.38639C38.8948 8.95128 35.8305 9.75317 34.0238 10.6907C32.2172 11.6283 31.7493 12.6594 32.6792 13.6539C33.6091 14.6484 35.8952 15.5615 39.2485 16.278C42.6019 16.9944 46.872 17.482 51.5193 17.6791C56.1667 17.8763 60.9827 17.7741 65.3589 17.3855C69.7351 16.9969 73.4751 16.3394 76.1063 15.496C78.7374 14.6526 80.1417 13.6612 80.1418 12.647C80.1479 11.9721 79.5307 11.3036 78.3257 10.6799C77.1206 10.0563 75.3515 9.48978 73.12 9.01302C70.8885 8.53626 68.2387 8.15865 65.3231 7.9019C62.4074 7.64515 59.2834 7.51433 56.1307 7.51697V7.51697ZM56.1307 15.977C53.054 15.977 50.0465 15.7817 47.4883 15.4158C44.9302 15.0499 42.9364 14.5298 41.759 13.9213C40.5816 13.3128 40.2735 12.6433 40.8738 11.9973C41.474 11.3514 42.9555 10.758 45.131 10.2923C47.3066 9.8266 50.0783 9.50945 53.0959 9.38096C56.1134 9.25247 59.2412 9.31841 62.0836 9.57045C64.9261 9.82249 67.3556 10.2493 69.0649 10.7969C70.7742 11.3445 71.6865 11.9884 71.6865 12.647C71.6865 13.0843 71.2841 13.5173 70.5024 13.9213C69.7206 14.3253 68.5748 14.6924 67.1303 15.0016C65.6858 15.3109 63.9709 15.5561 62.0836 15.7235C60.1963 15.8908 58.1735 15.977 56.1307 15.977V15.977Z"
            fill="#7F1D1D"
          ></path></svg
        ><svg
          width="113"
          height="25"
          viewBox="0 0 113 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative h-6 flex-grow"
          preserveAspectRatio="none"
        >
          <path
            d="M102.959 6.59757C99.4478 6.92367 95.7344 7.13924 91.9346 7.23757C95.9434 6.72489 98.9476 5.91836 100.39 4.96757C96.6226 5.44764 92.4987 5.78587 88.1974 5.96757C85.3224 5.30014 81.4938 4.85587 77.3121 4.70442C73.1305 4.55298 68.8323 4.70293 65.0916 5.13076C61.351 5.55859 58.3795 6.2401 56.6431 7.06841C54.9068 7.89671 54.5039 8.82496 55.4975 9.70757C47.8804 9.6251 40.4296 9.20053 33.629 8.46143C26.8284 7.72234 20.8302 6.68527 16.024 5.41757C14.3383 6.04774 13.4525 6.7614 13.4548 7.48757C13.4488 8.16196 14.2219 8.82619 15.7052 9.42114C17.1886 10.0161 19.3362 10.5233 21.9567 10.8976C18.9109 10.8798 15.9301 10.7049 13.2679 10.3876V10.4376C13.2907 11.3825 14.8375 12.2967 17.6465 13.0255C20.4555 13.7544 24.3544 14.2532 28.6836 14.4376C27.0171 14.5461 25.2869 14.6034 23.545 14.6076C22.3393 14.6046 21.1365 14.5812 19.948 14.5376C21.1809 15.3504 23.5666 16.0607 26.7733 16.5697C29.98 17.0787 33.8482 17.3611 37.8395 17.3776C31.0996 18.5128 22.7784 19.1324 14.2022 19.1376C12.6407 19.1387 11.0804 19.1186 9.53076 19.0776C18.287 20.2878 28.4912 20.9303 38.914 20.9276C46.1065 20.9436 53.2418 20.6526 59.9032 20.0717C66.5645 19.4907 72.6184 18.6315 77.711 17.5441C82.8037 16.4567 86.8332 15.163 89.5641 13.7385C92.295 12.314 93.6725 10.7873 93.6163 9.24757C93.6163 9.07757 93.6163 8.89757 93.6163 8.71757C97.2819 8.13238 100.443 7.415 102.959 6.59757V6.59757Z"
            fill="#7F1D1D"
          ></path></svg
        ><svg
          width="113"
          height="25"
          viewBox="0 0 113 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative h-6 flex-grow"
          preserveAspectRatio="none"
        >
          <path
            d="M95.6453 2.64711H16.5115C15.622 2.64447 14.7387 2.67936 13.9122 2.7498C13.0856 2.82023 12.332 2.92483 11.6943 3.05762C11.0567 3.19042 10.5474 3.3488 10.1957 3.52372C9.84401 3.69865 9.65672 3.88669 9.64453 4.07711V21.2171C9.65672 21.4075 9.84401 21.5956 10.1957 21.7705C10.5474 21.9454 11.0567 22.1038 11.6943 22.2366C12.332 22.3694 13.0856 22.474 13.9122 22.5444C14.7387 22.6149 15.622 22.6498 16.5115 22.6471H95.6453C96.5349 22.6498 97.4181 22.6149 98.2447 22.5444C99.0712 22.474 99.8248 22.3694 100.462 22.2366C101.1 22.1038 101.609 21.9454 101.961 21.7705C102.313 21.5956 102.5 21.4075 102.512 21.2171V4.07711C102.5 3.88669 102.313 3.69865 101.961 3.52372C101.609 3.3488 101.1 3.19042 100.462 3.05762C99.8248 2.92483 99.0712 2.82023 98.2447 2.7498C97.4181 2.67936 96.5349 2.64447 95.6453 2.64711V2.64711ZM37.8132 19.3871H23.7989V10.3871H37.8132V19.3871ZM30.8061 9.12711C28.8733 9.12711 27.0197 8.96276 25.6531 8.6702C24.2864 8.37764 23.5186 7.98085 23.5186 7.56711C23.5186 7.15337 24.2864 6.75658 25.6531 6.46403C27.0197 6.17147 28.8733 6.00711 30.8061 6.00711C31.8323 5.9822 32.8716 6.00397 33.8559 6.071C34.8402 6.13803 35.7472 6.2488 36.5176 6.39607C37.288 6.54335 37.9044 6.72379 38.3264 6.92559C38.7485 7.1274 38.9666 7.34601 38.9666 7.56711C38.9666 7.78822 38.7485 8.00683 38.3264 8.20863C37.9044 8.41043 37.288 8.59088 36.5176 8.73815C35.7472 8.88542 34.8402 8.9962 33.8559 9.06323C32.8716 9.13026 31.8323 9.15203 30.8061 9.12711V9.12711ZM88.3579 19.3871H74.3437V14.5571C74.3437 13.3471 72.3349 12.5571 67.2431 12.5571C65.6673 12.5596 64.1328 12.6654 62.8465 12.8603C61.5602 13.0552 60.5839 13.3298 60.0491 13.6471C59.6836 13.8822 59.5252 14.1297 59.582 14.3771V19.3771H45.5677C45.5677 19.3771 45.5677 11.1971 45.5677 10.3771H59.582V11.6471C60.8551 11.1742 62.7067 10.7846 64.9375 10.5203C67.1682 10.256 69.6936 10.127 72.2415 10.1471C81.5843 10.1471 88.3579 11.4371 88.3579 14.2071V19.3871Z"
            fill="#7F1D1D"
          ></path>
        </svg>
      </div>
    </div>
  </footer>

</template>
<script>
import Logo from "../components/icons/LogoView.vue";
import MenuH from "../components/icons/MenuHView.vue";
import Play from "../components/icons/PlayView.vue";
import Arrowdown from "../components/icons/ArrowdownView.vue";
export default {
  components: { Logo, MenuH, Play, Arrowdown },
};
</script>