<template>
  <header>
    <Logo></Logo>

    <p class="w-[1232.47px] flex-grow text-center text-8xl font-bold text-[#801e1e] custom-font">AUX’HALLES</p>
    <nav>
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
    </nav>
    <MenuH></MenuH>
  </header>
  <main>
      <RouterLink/>
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

import Logo from "./components/icons/LogoView.vue";
import MenuH from "./components/icons/MenuHView.vue";
import Play from "./components/icons/PlayView.vue";
import Arrowdown from "./components/icons/FlecheBasView.vue";
import Social from './components/icons/SocialView.vue'
export default {
    name:'App',
  components: { Logo, MenuH, Play, Arrowdown, Social },
};
</script>
<style>
@font-face {
    font-family: Happy Times at the IKOB New Game Plus Edition;
    src: url('../fonts/happy-times-NG_bold_master_web.woff2') format('woff2');
    font-style: bold;
    font-weight: 96px;
}
.custom-font{
    font-family: Happy Times at the IKOB New Game Plus Edition;
}
</style>