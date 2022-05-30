<template>
  <div class="flex flex-col bg-gradient-to-b from-grey-gradient to-red-700">
    <div class="mx-12 flex justify-center p-6 text-center">
      <p class="mx-4 flex text-center text-[100px] italic text-white">
        “Un fesitival qui a des “h’ailles”. Un cadre unique tant historique. Profitez de la variété offerte”
      </p>
    </div>
    <div class="flex justify-center py-20">
      <Play></Play>
    </div>
    <div class="flex w-10 justify-center py-20">
      <FlecheBas></FlecheBas>
    </div>

    <div class="flex items-center justify-center p-2.5">
      <p class="flex text-center text-6xl text-white">
        Bienvenue au festival AUX’HALLES, un festival dans les halles de Sens, dans l’Yonne, à une heure de Auxerre par le nord. Un festival
        de musique de type varéiété francaise dans un cadre unique, un hall de marché.
      </p>
    </div>

    <div class="flex justify-center py-20">
      <div
        class="flex h-[1500px] w-[1000px] flex-col items-start justify-start gap-[50px] rounded-[35px] bg-white"
        style="box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5)"
      >
        <img src="../../images/Image-1-1.webp" class="flex-grow rounded-tl-[35px] rounded-tr-[35px]" />
        <p class="w-[936px] pl-10 text-[80px] text-black">Concerts</p>
        <div class="flex items-center justify-center gap-2.5 self-stretch px-2.5">
          <p class="w-[916px] flex-grow text-left text-[52px] text-black">
            Voici les concerts qui vont se proposer dans les jours qui vont arriver. Profitez et découvrez la variété française comme vous
            ne l’avez jamais vu auparavent.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[1000px] border-2 border-solid border-black bg-black" />
        </div>
        <div class="flex">
          <p class="ml-[730px] flex py-5 text-right text-5xl text-[#d92d3c]">DÉCOUVRIR</p>
        </div>
      </div>
    </div>

    <div
      class="relative flex h-[1232px] w-[936px] flex-col items-start justify-start gap-[35px] rounded-[35px] bg-white"
      style="box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5)"
    >
      <img src="../../images/Image-1-3_1.webp" class="flex-grow self-stretch rounded-tl-[35px] rounded-tr-[35px] object-cover" />
      <p class="w-[936px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[80px] text-black">Artistes</p>
      <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 self-stretch px-2.5 pb-5">
        <p class="w-[916px] flex-grow text-left text-[52px] text-black">
          Découvrez les artistes qui particperont aux éditions de ce festival haut en couleur. Ils seront prêts à se faire entendre afin de
          vous emmener dans le saint gr’halles de la musique.
        </p>
      </div>
      <div class="flex">
          <hr class="flex w-[1000px] border-2 border-solid border-black bg-black" />
        </div>
      <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-end gap-2.5 self-stretch pr-[30px] pb-[5px]">
        <p class="w-[906px] flex-grow text-right text-5xl text-[#d92d3c]">DÉCOUVRIR</p>
      </div>
    </div>

    <div
      class="relative flex h-[1232px] w-[936px] flex-col items-start justify-start gap-[35px] rounded-[35px] bg-white"
      style="box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5)"
    >
      <img src="../../images/image-2_1.webp" class="flex-grow self-stretch rounded-tl-[35px] rounded-tr-[35px] object-cover" />
      <p class="w-[936px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[80px] text-black">Le festival</p>
      <div class="relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2.5 self-stretch px-2.5">
        <p class="w-[916px] flex-grow text-left text-[52px] text-black">
          Venez découvrir le cadre qui se cache dérrière ce festival. Vous en appendrez tant sur les halles que l’organisateur du festival
          et aimez le lieu unique de ce festival.
        </p>
      </div>
      <div class="flex">
          <hr class="flex w-[1000px] border-2 border-solid border-black bg-black" />
        </div>
      <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-end gap-2.5 self-stretch pr-[30px] pb-[5px]">
        <p class="w-[906px] flex-grow text-right text-5xl text-[#d92d3c]">DÉCOUVRIR</p>
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