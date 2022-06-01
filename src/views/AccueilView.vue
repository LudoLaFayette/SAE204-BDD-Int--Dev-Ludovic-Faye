<template>
  <div class="flex flex-col bg-gradient-to-b from-grey-gradient to-red-700">


    <div class="lg:mx-12 mx-4 flex justify-center lg:p-20 py-10 text-center">
      <h1 class="font-alegreya-sans mx-4 flex text-center lg:text-8xl md:text-6xl text-2xl italic text-white">
        “Un fesitival qui a des “h’ailles”.
         Un cadre unique tant historique.
          Profitez de la variété offerte”
      </h1>
    </div>
    <div class="flex justify-center py-20">
      <Play></Play>
    </div>
    <div class="flex justify-center py-20">
      <FlecheBas></FlecheBas>
    </div>

    <div class="flex items-center justify-center p-2.5">
      <p class="font-alegreya-sans flex justify-center text-center lg:text-6xl md:text-4xl text-2xl text-white">
        Bienvenue au festival AUX’HALLES, un festival dans les halles de Sens, dans l’Yonne, à une heure de Auxerre par le nord. Un festival
        de musique de type varéiété francaise dans un cadre unique, un hall de marché.
      </p>
    </div>

    <div class="flex py-20 justify-center font-alegreya-sans">
      <div class="flex w-[75%] flex-col gap-[40px] rounded-[35px] bg-white drop-shadow-sm">
        <img src="../../images/Image-1-1-_1_.webp" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-Alegreya Sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl text-black">Concerts</p>
        <div class="flex px-5">
          <p class="font-Alegreya Sans flex text-left lg:text-5xl md:text-3xl text-2xl text-black">
            Voici les concerts qui vont se proposer dans les jours qui vont arriver. Profitez et découvrez la variété française comme vous
            ne l’avez jamais vu auparavent.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-black bg-black" />
        </div>
        <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-[#d92d3c]">DÉCOUVRIR</p>
      </div>
    </div>

    <div class="flex py-20 justify-center font-alegreya-sans">
      <div class="flex w-[75%] flex-col gap-[35px] rounded-[35px] bg-white drop-shadow-sm">
        <img src="../../images/Image-1-3-_1_.webp" class="rounded-tr-[35px] rounded-tl-[35px] flex w-full" />
        <p class="font-Alegreya Sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl text-black">Artistes</p>
        <div class="flex px-5 pb-5">
          <p class="font-Alegreya Sans flex text-left lg:text-5xl md:text-3xl text-2xl text-black">
            Découvrez les artistes qui particperont aux éditions de ce festival haut en couleur. Ils seront prêts à se faire entendre afin
            de vous emmener dans le saint gr’halles de la musique.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-black bg-black" />
        </div>
        <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-[#d92d3c]">DÉCOUVRIR</p>
      </div>
    </div>

    <div class="flex py-20 justify-center font-alegreya-sans">
      <div class="flex w-[75%] flex-col gap-[35px] rounded-[35px] bg-white drop-shadow-sm">
        <img src="../../images/image-3.webp" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-alegreya-sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl text-black">Le festival</p>
        <div class="flex px-5">
          <p class="font-alegreya-sans flex text-left lg:text-5xl md:text-3xl text-2xl text-black">
            Venez découvrir le cadre qui se cache dérrière ce festival. Vous en appendrez tant sur les halles que l’organisateur du festival
            et aimez le lieu unique de ce festival.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-black bg-black" />
        </div>
        <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-[#d92d3c] font-alegreya-sans">DÉCOUVRIR</p>
      </div>
    </div>
  </div>
</template>

<script>
import Play from "../components/icons/PlayView.vue";
import FlecheBas from "../components/icons/FlecheBasView.vue";

export default {
  name: "App",
  components: { Play, FlecheBas },
};
</script>