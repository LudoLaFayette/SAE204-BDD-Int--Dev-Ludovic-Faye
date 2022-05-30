<template>
  <header class="sticky">
    <div class="flex bg-[#A8A29E] sm:flex md:flex">
      <Logo></Logo>
      <p class="flex-grow text-center font-happy-times-at-the-ikob-new-game-plus-edition text-8xl font-bold text-[#801e1e]">AUX’HALLES</p>
      <MenuH></MenuH>
    </div>
    <hr class="border-[10px] border-solid border-slate-900 bg-slate-900" />
  </header>
  <main class="mb-[50px]">
    <RouterView />
  </main>

  <footer class="bg-[#b1aca9] ">
    <div class="container mx-auto flex flex-col flex-wrap px-5 py-20 md:flex-row md:flex-nowrap md:items-center lg:items-start">
      <div class="order-first-mb-10 flex flex-grow flex-wrap text-center md:pr-20 md:text-left" style="width: 75%">
        <div class="w-full md:w-1/2 lg:w-1/4">
          <h2 class="flex w-full font-alegreya-sans text-[100px] font-bold text-[#801e1e]">Le Festival</h2>
          <nav class="mb-10 list-none">
            <li>
              <a href="#" class="text-left text-[64px] font-light text-black">Les concerts</a>
            </li>
            <li>
              <a href="#" class="text-left text-[64px] font-light text-black">Les artistes</a>
            </li>
            <li>
              <a href="#" class="text-left text-[64px] font-light text-black">Notre Histoire</a>
            </li>
            <li>
              <a href="#" class="text-left text-[64px] font-light text-black">Mentions légales</a>
            </li>
          </nav>
          <div class="w-full md:w-1/2 lg:w-1/4">
            <h2 class="flex text-[50px] font-bold text-[#801e1e]">Nos réseaux sociaux</h2>
          </div>
          <div class="bg-[#b1aca9]">
            <div class="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
              <span class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto flex flex-col flex-wrap md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div class="order-first -mb-10 flex flex-grow flex-wrap pl-10 text-center md:pr-20 md:text-left">
          <div class="w-full md:w-1/2 lg:w-1/4">
            <h2 class="flex w-full text-[100px] font-bold text-[#801e1e]">Nous contacter</h2>
          </div>
          <nav class="mb-10 list-none">
            <ul>
              <li>
                <div class="flex">
                  <p class="text-left text-[64px] italic text-black">
                    Les Halles de sens <br />
                    Place de la République <br />
                    89100, Sens <br />
                    03 86 64 00 50
                  </p>
                </div>
              </li>
              <li>
                <a href="#" class="text-[64px] font-light text-black">Formulaire de contact</a>
              </li>
            </ul>
          </nav>
        </div>
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