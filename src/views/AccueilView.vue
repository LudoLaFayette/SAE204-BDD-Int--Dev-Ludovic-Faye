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


  <RouterView />
  <div class="relative flex w-[1120px] items-start justify-start gap-2.5 p-2.5">
    <p class="w-[1100px] flex-grow text-center text-[100px] italic text-white">
      <span class="w-[1100px] flex-grow text-center text-[100px] italic text-white"
        >“Un fesitival qui a des “h’ailles”. Un cadre unique tant historique.</span
      ><br /><span class="w-[1100px] flex-grow text-center text-[100px] italic text-white">Profitez de la variété offerte”</span>
    </p>
  </div>
  <Play></Play>

  <Arrowdown></Arrowdown>
  <div class="relative flex w-[829px] items-start justify-start gap-2.5 p-2.5">
    <p class="w-[809px] flex-grow text-center text-6xl text-white">
      Bienvenue au festival AUX’HALLES, un festival dans les halles de Sens, dans l’Yonne, à une heure de Auxerre par le nord. Un festival
      de musique de type varéiété francaise dans un cadre unique, un hall de marché.
    </p>
  </div>

  <div
    class="relative flex h-[1232px] w-[936px] flex-col items-start justify-start gap-[50px] rounded-[35px] bg-white"
    style="box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5)"
  >
    <img src="image-1-1.png" class="flex-grow self-stretch rounded-tl-[35px] rounded-tr-[35px] object-cover" />
    <p class="w-[936px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[80px] text-black">Concerts</p>
    <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 self-stretch px-2.5">
      <p class="w-[916px] flex-grow text-left text-[52px] text-black">
        Voici les concerts qui vont se proposer dans les jours qui vont arriver. Profitez et découvrez la variété française comme vous ne
        l’avez jamais vu auparavent.
      </p>
    </div>
    <div class="relative flex flex-shrink-0 flex-grow-0 flex-col items-end justify-center gap-2.5 self-stretch pt-2.5">
      <svg
        width="936"
        height="1"
        viewBox="0 0 936 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0 flex-grow-0 self-stretch"
        preserveAspectRatio="none"
      >
        <line y1="0.75" x2="936" y2="0.75" stroke="black" stroke-width="0.5"></line>
      </svg>
    </div>
    <div class="relative flex h-[26px] flex-shrink-0 flex-grow-0 items-center justify-end self-stretch pr-[30px] pb-5">
      <p class="h-[9px] w-[906px] flex-grow text-right text-5xl text-[#d92d3c]">DÉCOUVRIR</p>
    </div>
  </div>

  <div
    class="relative flex h-[1232px] w-[936px] flex-col items-start justify-start gap-[35px] rounded-[35px] bg-white"
    style="box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5)"
  >
    <img src="image-1-3.png" class="flex-grow self-stretch rounded-tl-[35px] rounded-tr-[35px] object-cover" />
    <p class="w-[936px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[80px] text-black">Artistes</p>
    <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 self-stretch px-2.5 pb-5">
      <p class="w-[916px] flex-grow text-left text-[52px] text-black">
        Découvrez les artistes qui particperont aux éditions de ce festival haut en couleur. Ils seront prêts à se faire entendre afin de
        vous emmener dans le saint gr’halles de la musique.
      </p>
    </div>
    <div class="relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-2.5 self-stretch">
      <svg
        width="936"
        height="1"
        viewBox="0 0 936 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0 flex-grow-0 self-stretch"
        preserveAspectRatio="none"
      >
        <line y1="0.75" x2="936" y2="0.75" stroke="black" stroke-width="0.5"></line>
      </svg>
    </div>
    <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-end gap-2.5 self-stretch pr-[30px] pb-[5px]">
      <p class="w-[906px] flex-grow text-right text-5xl text-[#d92d3c]">DÉCOUVRIR</p>
    </div>
  </div>

  <div
    class="relative flex h-[1232px] w-[936px] flex-col items-start justify-start gap-[35px] rounded-[35px] bg-white"
    style="box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5)"
  >
    <img src="image-2.png" class="flex-grow self-stretch rounded-tl-[35px] rounded-tr-[35px] object-cover" />
    <p class="w-[936px] flex-shrink-0 flex-grow-0 self-stretch text-left text-[80px] text-black">Le festival</p>
    <div class="relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2.5 self-stretch px-2.5">
      <p class="w-[916px] flex-grow text-left text-[52px] text-black">
        Venez découvrir le cadre qui se cache dérrière ce festival. Vous en appendrez tant sur les halles que l’organisateur du festival et
        aimez le lieu unique de ce festival.
      </p>
    </div>
    <div class="relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2.5 self-stretch pt-2.5">
      <svg
        width="936"
        height="1"
        viewBox="0 0 936 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0 flex-grow-0 self-stretch"
        preserveAspectRatio="none"
      >
        <line y1="0.75" x2="936" y2="0.75" stroke="black" stroke-width="0.5"></line>
      </svg>
    </div>
    <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-end gap-2.5 self-stretch pr-[30px] pb-[5px]">
      <p class="w-[906px] flex-grow text-right text-5xl text-[#d92d3c]">DÉCOUVRIR</p>
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