<template>
<header>
    <Logo></Logo>

    <p class="w-[1232.47px] flex-grow text-center text-8xl font-bold text-[#801e1e]">AUX’HALLES</p>
    <nav>
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
    </nav>
    <MenuH></MenuH>
  </header>
  <main>

  
  <img src="image-1-3.png" class="w-[1440px] h-[1014px] object-cover" />

 <div class="flex justify-start items-start w-[560px] gap-2.5 p-2.5">
  <div
    class="flex justify-start items-start flex-grow relative gap-2.5 px-[35px] py-1 rounded-[25px] bg-white border-2 border-red-600"
  >
    <p class="flex-grow w-[470px] text-[80px] font-bold text-center text-red-600">ARTISTES</p>
  </div>
</div>
<p class="w-[1356px] text-6xl text-center text-zinc-900">
  Voici la partie du site ou vous pourrez choisir l’artiste auxquel vous voulez réserver votre place
  :
</p>
<div class="w-[1350px] h-[122px]">
  <div
    class="w-[1350px] h-[116px] absolute left-[49.5px] top-[1560.5px] rounded-[25px] bg-gray-100 border border-white"
  ></div>
  <p
    class="w-[282.56px] h-[72px] absolute left-[76.85px] top-[1611px] text-6xl text-left text-black"
  >
    Trier par :
  </p>
  <div class="w-[341.66px] h-12">
    <p
      class="w-[302.98px] h-12 absolute left-[652.13px] top-[1607px] text-[40px] text-left text-black"
    >
      Lieu de la scène
    </p>
    <svg
      width="343"
      height="1"
      viewBox="0 0 343 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-[643.31px] top-[1650.5px]"
      preserveAspectRatio="none"
    >
      <line x1="0.814758" y1="0.5" x2="342.475" y2="0.5" stroke="black"></line></svg
    ><svg
      width="34"
      height="20"
      viewBox="0 0 34 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[33.24px] h-[18.35px] absolute left-[950.85px] top-[1622.5px]"
      preserveAspectRatio="none"
    >
      <line
        y1="-0.5"
        x2="24.7607"
        y2="-0.5"
        transform="matrix(0.671269 0.741214 -0.671269 0.741214 0.347534 1)"
        stroke="black"
      ></line>
      <line
        y1="-0.5"
        x2="24.7607"
        y2="-0.5"
        transform="matrix(0.671269 -0.741214 0.671269 0.741214 16.9687 19.353)"
        stroke="black"
      ></line>
    </svg>
  </div>
  <div class="w-[189.76px] h-[30px]">
    <p
      class="w-[130.4px] h-6 absolute left-[409.73px] top-[1621px] text-[40px] text-left text-black"
    >
      Artiste
    </p>
    <svg
      width="190"
      height="1"
      viewBox="0 0 190 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-[410.01px] top-[1650.5px]"
      preserveAspectRatio="none"
    >
      <line x1="0.511108" y1="0.5" x2="189.492" y2="0.5" stroke="black"></line></svg
    ><svg
      width="38"
      height="19"
      viewBox="0 0 38 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[37.8px] h-[18px] absolute left-[542.61px] top-[1622.5px]"
      preserveAspectRatio="none"
    >
      <line
        y1="-0.5"
        x2="26.0986"
        y2="-0.5"
        transform="matrix(0.724103 0.689692 -0.724103 0.689692 0.114197 1)"
        stroke="black"
      ></line>
      <line
        y1="-0.5"
        x2="26.0986"
        y2="-0.5"
        transform="matrix(0.724103 -0.689692 0.724103 0.689692 19.0121 19)"
        stroke="black"
      ></line>
    </svg>
  </div>
  <div class="w-[302.87px] h-[48.48px]">
    <p
      class="w-[234.54px] h-[48.48px] absolute left-[1054.83px] top-[1607px] text-[40px] text-left text-black"
    >
      Catégorie
    </p>
    <svg
      width="304"
      height="1"
      viewBox="0 0 304 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-[1040.37px] top-[1650.5px]"
      preserveAspectRatio="none"
    >
      <line x1="0.87384" y1="0.5" x2="303.747" y2="0.5" stroke="black"></line></svg
    ><svg
      width="34"
      height="20"
      viewBox="0 0 34 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[33.24px] h-[18.18px] absolute left-[1302.62px] top-[1620.7px]"
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
        transform="matrix(0.674718 -0.738075 0.674718 0.738075 16.7448 19.3838)"
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
    src="image-1-3.png"
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
        >Pasaege le lundi 18 juillet entre 14h30 et 16h30 </span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Style : Guitare et Variété Francaise</span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Artiste venant de DIjon</span
      >
    </p>
  </div>
  <div
    class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
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
    class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pr-[30px]"
  >
    <p class="flex-grow w-[906px] text-5xl text-right text-[#d92d3c]">En savoir plus</p>
  </div>
</div>
<div
  class="flex flex-col justify-start items-start w-[936px] h-[1232px] relative gap-10 rounded-[35px] bg-gray-200"
  style="box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.5);"
>
  <img
    src="image-1-3.png"
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
        >Pasaege le lundi 18 juillet entre 14h30 et 16h30 </span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Style : Guitare et Variété Francaise</span
      ><br /><span class="flex-grow w-[916px] text-[52px] text-left text-black"
        >Artiste venant de DIjon</span
      >
    </p>
  </div>
  <div
    class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
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
    class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pr-[30px]"
  >
    <p class="flex-grow w-[906px] text-5xl text-right text-[#d92d3c]">En savoir plus</p>
  </div>
</div>
</main>
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
      <Social></Social>
    </div>
  </footer>

</template>
<script>
import Logo from "../components/icons/LogoView.vue";
import MenuH from "../components/icons/MenuHView.vue";
import Play from "../components/icons/PlayView.vue";
import Arrowdown from "../components/icons/ArrowdownView.vue";
import Social from '../components/icons/SocialView.vue'
export default {
  components: { Logo, MenuH, Play, Arrowdown, Social },
};
</script>