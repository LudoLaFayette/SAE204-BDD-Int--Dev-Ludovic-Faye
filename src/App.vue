<template>
  <header>
    <div class="sticky flex bg-[#A8A29E] sm:flex md:flex">
      <Logo></Logo>
      <p class="custom-font flex-grow text-center text-8xl font-bold text-[#801e1e]">AUX’HALLES</p>
      <MenuH></MenuH>
    </div>
    <hr class="border-[10px] border-solid border-slate-900 bg-slate-900" />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="flex">
      <div class="bg-[#b1aca9]">
        <div class="flex w-[486.93px] items-center justify-center gap-5 px-2.5 pt-2.5 pb-[30px]">
          <p class="w-[466.93px] flex-grow text-left text-[100px] font-bold text-[#801e1e]">Le Festival</p>
        </div>
        <div class="flex flex-col items-start justify-center gap-5">
          <p class="text-left text-[64px] font-light text-black">Les concerts</p>
          <p class="text-left text-[64px] font-light text-black">Les artistes</p>
          <p class="text-left text-[64px] font-light text-black">Notre histoire</p>
          <p class="text-left text-[64px] font-light text-black">Mentions légales</p>
        </div>
        <div class="flex items-center justify-center gap-2.5 p-2.5">
          <p class="flex text-left text-[100px] font-bold text-[#801e1e]">Nous contacter</p>
        </div>
        <div class="flex  flex-col items-start justify-center gap-2.5">
          <p class="  text-left text-[64px] italic text-black">
            <span class="  text-left text-[64px] italic text-black"
              >Les Halles de sens</span
            ><br /><span class=" text-left text-[64px] italic text-black"
              >Place de la République</span
            ><br /><span class=" text-left text-[64px] italic text-black"
              >89100, Sens</span
            ><br /><span class=" text-left text-[64px] italic text-black"
              >03 86 64 00 50</span
            >
          </p>
          <p class=" text-left text-[64px] font-light text-black">
            Formulaire de contact
          </p>
        </div>
        <div class="flex items-center justify-center gap-2.5 p-2.5">
          <p class=" flex text-left text-[50px] font-bold text-[#801e1e]">Nos réseaux sociaux</p>
        </div>
        <Social></Social>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from "./components/icons/LogoView.vue";
import MenuH from "./components/icons/MenuHView.vue";
import Play from "./components/icons/PlayView.vue";
import Arrowdown from "./components/icons/FlecheBasView.vue";
import Social from "./components/icons/SocialView.vue";
export default {
  name: "App",
  components: { Logo, MenuH, Play, Arrowdown, Social },
};
</script>
<style>
@font-face {
  font-family: Happy Times at the IKOB New Game Plus Edition;
  src: url("../fonts/happy-times-NG_bold_master_web.woff2") format("woff2");
  font-style: bold;
  font-weight: 96px;
}
.custom-font {
  font-family: Happy Times at the IKOB New Game Plus Edition;
}
</style>