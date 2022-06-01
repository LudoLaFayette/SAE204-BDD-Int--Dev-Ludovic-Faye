<template>
  <div class="flex flex-col bg-gradient-to-b from-grey-gradient to-red-700">
    <div class="mx-4 flex justify-center py-10 text-center lg:mx-12 lg:p-20">
      <h1 class="mx-4 flex text-center font-alegreya-sans text-2xl italic text-white md:text-6xl lg:text-8xl">
        “Un fesitival qui a des “h’ailles”. Un cadre unique tant historique. Profitez de la variété offerte”
      </h1>
    </div>
    <div class="flex justify-center py-20">
      <Play></Play>
    </div>
    <div class="flex justify-center py-20">
      <FlecheBas></FlecheBas>
    </div>

    <div class="flex items-center justify-center p-2.5">
      <p class="flex justify-center text-center font-alegreya-sans text-2xl text-white md:text-4xl lg:text-6xl">
        Bienvenue au festival AUX’HALLES, un festival dans les halles de Sens, dans l’Yonne, à une heure de Auxerre par le nord. Un festival
        de musique de type varéiété francaise dans un cadre unique, un hall de marché.
      </p>
    </div>

    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[75%] flex-col gap-[40px] rounded-[35px] bg-white  shadow-cardShadow ">
      

        <img src="../../images/Image-1-1-_1_.webp" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-Alegreya Sans pl-10 text-left text-3xl text-black md:text-5xl lg:text-7xl">Concerts</p>
        <div class="flex px-5">
          <p class="font-Alegreya Sans flex text-left text-2xl text-black md:text-3xl lg:text-5xl">
            Voici les concerts qui vont se proposer dans les jours qui vont arriver. Profitez et découvrez la variété française comme vous
            ne l’avez jamais vu auparavent.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-black bg-black" />
        </div>
        <router-link class="font-alegreya-sans" to="/concertListe">
        <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-[#d92d3c]">DÉCOUVRIR</p>
        </router-link>
      </div>
    </div>

    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[75%] flex-col gap-[35px] rounded-[35px] bg-white shadow-cardShadow">
        <img src="../../images/Image-1-3-_1_.webp" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-Alegreya Sans pl-10 text-left text-3xl text-black md:text-5xl lg:text-7xl">Artistes</p>
        <div class="flex px-5 pb-5">
          <p class="font-Alegreya Sans flex text-left text-2xl text-black md:text-3xl lg:text-5xl">
            Découvrez les artistes qui particperont aux éditions de ce festival haut en couleur. Ils seront prêts à se faire entendre afin
            de vous emmener dans le saint gr’halles de la musique.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-black bg-black" />
        </div>
        <router-link class="font-alegreya-sans" to="/artisteListe">
        <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-[#d92d3c]">DÉCOUVRIR</p>
        </router-link>
      </div>
    </div>

    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[75%] flex-col gap-[35px] rounded-[35px] bg-white shadow-cardShadow">
        <img src="../../images/image-3.webp" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="pl-10 text-left font-alegreya-sans text-3xl text-black md:text-5xl lg:text-7xl">Le festival</p>
        <div class="flex px-5">
          <p class="flex text-left font-alegreya-sans text-2xl text-black md:text-3xl lg:text-5xl">
            Venez découvrir le cadre qui se cache dérrière ce festival. Vous en appendrez tant sur les halles que l’organisateur du festival
            et aimez le lieu unique de ce festival.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-black bg-black" />
        </div>
        <router-link class="font-alegreya-sans" to="/histoire">
        <p class="ml-auto flex w-max py-10 pr-[50px] font-alegreya-sans text-2xl text-[#d92d3c]">DÉCOUVRIR</p>
        </router-link>
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