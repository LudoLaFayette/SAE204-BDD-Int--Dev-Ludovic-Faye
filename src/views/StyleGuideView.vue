<template>
  <div class="flex flex-col bg-fond">
    <div class="flex">
      <img src="../../images/image-3.webp" class="w-full" />
    </div>
    <!-- Changement de page pour correction à la maquette : plus de card ici -->
    <div class="flex items-center justify-center gap-2.5 p-2.5">
      <div class="mx-[5rem] mt-[-70px] flex rounded-[25px] border-2 border-couleur-red-600 bg-fond py-1 text-2xl md:text-4xl">
        <h2 class="relative text-center font-alegreya-sans text-2xl font-bold text-couleur-red-600 md:text-6xl lg:text-8xl">
          Guide de <br />
          styles
        </h2>
      </div>
    </div>
    <div class="mt-[40px] text-center">
      <h2 class="font-alegreya-sans text-2xl font-bold text-text md:text-4xl lg:text-6xl">Couleurs</h2>
      <div class="flex flex-col items-center justify-center">
        <div class="h-[75px] w-[75px] bg-grey-gradient"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Gris dégradé <br />#A8A29E</p>
        </div>
        <div class="h-[75px] w-[75px] bg-grey-gradiant-form"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Gris dégradé formulaire <br />#bbb7b4</p>
        </div>
        <div class="h-[75px] w-[75px] bg-footer"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Footer <br />#b1aca9</p>
        </div>
        <div class="h-[75px] w-[75px] bg-text-h2"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Text niv H2 + titre Logo<br />#801e1e</p>
        </div>
        <div class="h-[75px] w-[75px] border-fond bg-lettreLogo"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Lettrage Logo<br />#1d1d1b</p>
        </div>
        <div class="h-[75px] w-[75px] bg-borderLogo"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Bordure Logo<br />#728ca8</p>
        </div>
        <div class="h-[75px] w-[75px] bg-red-action"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Couleur des texte d'action<br />#d92d3c</p>
        </div>
        <div class="h-[75px] w-[75px] bg-font-Card"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Couleur des card<br />#e5e7eb</p>
        </div>
        <div class="h-[75px] w-[75px] border border-solid border-white bg-mainTextCardColor"></div>
        <div>
          <p class="font-alegreya-sans text-2xl text-text">Couleur du texte<br />#000000</p>
        </div>

        <h2 class="font-alegreya-sans text-2xl font-bold text-text md:text-4xl lg:text-6xl">Typos</h2>
        <div>
          <h3 class="font-alegreya-sans text-2xl font-bold text-text md:text-4xl lg:text-6xl">Alegreya Sans</h3>
          <p class="font-alegreya-sans text-base text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-md text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-md2 text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-lg text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-lg1 text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-lg2 text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-xl text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-xl2 text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-base italic text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="font-alegreya-sans text-base font-bold text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>

          <h3 class="custom-font text-2xl font-bold text-text md:text-4xl lg:text-6xl">Happy Times at the IKOB New Game Plus Edition</h3>
          <p class="custom-font text-base text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-md text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-md2 text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-lg text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-lg2 text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-xl text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-xl2 text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-base italic text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
          <p class="custom-font text-base font-bold text-text">Un renard qui court dans la forêt sombre, y voyant un chasseur...</p>
        </div>

        <h2 class="font-alegreya-sans text-2xl font-bold text-text md:text-4xl lg:text-6xl">Icones</h2>
        <div>
          <FlecheBas></FlecheBas>
          <MenuH></MenuH>
          <Play></Play>
          <Logo></Logo>
        </div>
        <h2 class="font-alegreya-sans text-2xl font-bold text-text md:text-4xl lg:text-6xl">Composants</h2>
        <header class="sticky">
          <div class="flex items-center justify-between bg-couleur-header sm:flex md:flex">
            <router-link to="/"><Logo></Logo></router-link>
            <h1 class="hidden text-center font-happy-times-at-the-ikob-new-game-plus-edition font-bold text-couleur-h2 lg:flex lg:text-xl">
              AUX’HALLES
            </h1>
            <span class="mx-4 block h-8 w-8 cursor-pointer">
              <MenuH class="py-2 text-white" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert"> </MenuH>
              <span class="sr-only hidden">Menu</span>
            </span>
          </div>
          <ul id="menu" v-if="menuOuvert" class="bg-couleur-header py-4 text-center font-alegreya-sans text-2xl text-text md:text-lg">
            <li class="my-8">
              <RouterLink class="my-8 hover:bg-white hover:text-black lg:px-4 xl:rounded-sm xl:pt-2" to="/">Accueil</RouterLink>
            </li>
            <li class="my-8">
              <RouterLink class="my-8 hover:bg-white hover:text-black lg:px-4 xl:rounded-sm xl:pt-2" to="/concertListe"
                >Liste des Concerts</RouterLink
              >
            </li>
            <li class="my-8">
              <RouterLink class="my-8 hover:bg-white hover:text-black lg:px-4 xl:rounded-sm xl:pt-2" to="/artisteListe"
                >Liste des Artistes</RouterLink
              >
            </li>
            <li class="my-8">
              <RouterLink class="my-8 hover:bg-white hover:text-black lg:px-4 xl:rounded-sm xl:pt-2" to="/histoire">Histoire</RouterLink>
            </li>
            <li class="my-8">
              <RouterLink class="my-8 hover:bg-white hover:text-black lg:px-4 xl:rounded-sm xl:pt-2" to="/contact"
                >Nous contacter</RouterLink
              >
            </li>
          </ul>
          <hr class="border-[10px] border-solid border-slate-900 bg-slate-900" />
        </header>
        <footer class="bg-couleur-footer">
          <div class="grid grid-cols-1 gap-8 p-[2rem] md:grid-cols-2">
            <div class="flex flex-col">
              <h2 class="font-alegreya-sans text-2xl font-bold text-couleur-h2 md:text-4xl lg:text-6xl">Le Festival</h2>
              <ul class="my-10 flex flex-col font-alegreya-sans text-base font-light text-text md:text-3xl">
                <li class="my-4 text-text"><RouterLink to="/concertListe">Les concerts</RouterLink></li>
                <li class="my-4"><RouterLink to="/artisteListe">Les artistes</RouterLink></li>
                <li class="my-4"><RouterLink to="/histoire">Notre histoire</RouterLink></li>
                <li class="my-4"><RouterLink to="/mentions">Mentions légales </RouterLink></li>
              </ul>
            </div>

            <div>
              <h2 class="font-alegreya-sans text-2xl font-bold text-couleur-h2 md:text-4xl lg:text-6xl">Nous contacter</h2>
              <div class="my-5">
                <p class="font-alegreya-sans italic text-text md:text-2xl lg:text-4xl">
                  Les Halles de sens <br />
                  Place de la République <br />
                  89100, Sens <br />
                  03 86 64 00 50
                </p>
                <li class="my-10 flex flex-col font-alegreya-sans text-base font-light text-text md:text-3xl">
                  <RouterLink to="/contact">Formulaire de contact </RouterLink>
                </li>
              </div>
            </div>
            <div class="">
              <h2 class="font-alegreya-sans text-2xl font-bold text-couleur-h2 md:text-4xl lg:text-6xl">Nos réseaux sociaux</h2>
              <div class="my-10 flex flex-wrap gap-8">
                <a href=""
                  ><svg
                    width="55"
                    height="55"
                    viewBox="0 0 53 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative w-14"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M33.9887 11.3051H38.1086V4.54756C36.1138 4.34643 34.1096 4.24712 32.1041 4.25006C26.1435 4.25006 22.0675 7.77756 22.0675 14.2376V19.8051H15.3398V27.3701H22.0675V46.7501H30.1318V27.3701H36.8375L37.8456 19.8051H30.1318V14.9813C30.1318 12.7501 30.7454 11.3051 33.9887 11.3051Z"
                      fill="#a2817f"
                    ></path></svg
                ></a>
                <span class="sr-only hidden">Facebook</span>
                <a href=""
                  ><svg
                    width="53"
                    height="51"
                    viewBox="0 0 53 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative w-14"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M48.0625 12.6422C46.4425 13.3238 44.7292 13.7743 42.976 13.9798C44.8257 12.9083 46.2117 11.2227 46.8771 9.23557C45.139 10.2389 43.2363 10.9458 41.2518 11.3256C39.9253 9.93064 38.1589 9.00211 36.2296 8.68559C34.3002 8.36908 32.3171 8.68247 30.5913 9.57663C28.8654 10.4708 27.4944 11.8951 26.6933 13.6263C25.8922 15.3574 25.7063 17.2974 26.1648 19.1421C22.6504 18.9697 19.2127 18.0824 16.0751 16.5377C12.9374 14.993 10.17 12.8255 7.95252 10.1761C7.17476 11.4931 6.76608 12.9846 6.76711 14.5023C6.76435 15.9118 7.12105 17.3 7.80544 18.5434C8.48982 19.7869 9.48067 20.8469 10.6897 21.6292C9.28445 21.5921 7.90917 21.2264 6.6809 20.5633V20.6678C6.69143 22.6426 7.40507 24.5532 8.70109 26.0766C9.99711 27.5999 11.796 28.6424 13.7934 29.0277C13.0245 29.2546 12.2262 29.3742 11.4225 29.383C10.8662 29.3767 10.3113 29.3278 9.76297 29.2367C10.3318 30.9355 11.4325 32.42 12.912 33.4839C14.3915 34.5477 16.1762 35.1379 18.0177 35.1722C14.9081 37.5449 11.0688 38.8399 7.11196 38.8506C6.39152 38.8529 5.67165 38.811 4.95667 38.7252C8.99661 41.2546 13.7046 42.5974 18.5135 42.5917C21.832 42.6251 25.124 42.017 28.1974 40.8028C31.2709 39.5887 34.064 37.7928 36.4136 35.5202C38.7633 33.2476 40.6224 30.5438 41.8824 27.5666C43.1423 24.5895 43.7779 21.3987 43.752 18.1807C43.752 17.8254 43.752 17.4492 43.752 17.073C45.4432 15.85 46.9019 14.3506 48.0625 12.6422V12.6422Z"
                      fill="#a2817f"
                    ></path>
                  </svg>
                </a>
                <span class="sr-only hidden">Twitter</span>
                <a href=""
                  ><svg
                    width="52"
                    height="51"
                    viewBox="0 0 52 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-14"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M37.3919 11.6169C36.8804 11.6169 36.3803 11.764 35.955 12.0396C35.5297 12.3151 35.1982 12.7068 35.0024 13.1651C34.8067 13.6234 34.7555 14.1277 34.8553 14.6142C34.9551 15.1007 35.2014 15.5475 35.5631 15.8983C35.9248 16.249 36.3856 16.4879 36.8873 16.5847C37.389 16.6814 37.9091 16.6318 38.3817 16.4419C38.8543 16.2521 39.2582 15.9307 39.5424 15.5182C39.8266 15.1058 39.9783 14.6209 39.9783 14.1249C39.9783 13.4597 39.7058 12.8218 39.2207 12.3515C38.7357 11.8811 38.0779 11.6169 37.3919 11.6169V11.6169ZM47.3063 16.6747C47.2644 14.9406 46.9294 13.2249 46.3148 11.596C45.7668 10.2023 44.9139 8.94021 43.8147 7.89673C42.7474 6.82546 41.4429 6.00357 39.9998 5.49325C38.3244 4.87913 36.5532 4.54693 34.7625 4.51096C32.4778 4.38556 31.745 4.38556 25.8826 4.38556C20.0203 4.38556 19.2875 4.38556 17.0028 4.51096C15.2121 4.54693 13.4409 4.87913 11.7655 5.49325C10.325 6.00874 9.02164 6.82992 7.95061 7.89673C6.84586 8.93164 5.99829 10.1966 5.47202 11.596C4.83871 13.2206 4.49612 14.9382 4.45903 16.6747C4.32971 18.89 4.32971 19.6006 4.32971 25.2854C4.32971 30.9701 4.32971 31.6807 4.45903 33.8961C4.49612 35.6326 4.83871 37.3501 5.47202 38.9748C5.99829 40.3741 6.84586 41.6391 7.95061 42.674C9.02164 43.7408 10.325 44.562 11.7655 45.0775C13.4409 45.6916 15.2121 46.0238 17.0028 46.0598C19.2875 46.1852 20.0203 46.1852 25.8826 46.1852C31.745 46.1852 32.4778 46.1852 34.7625 46.0598C36.5532 46.0238 38.3244 45.6916 39.9998 45.0775C41.4429 44.5672 42.7474 43.7453 43.8147 42.674C44.9187 41.6344 45.7724 40.3713 46.3148 38.9748C46.9294 37.3458 47.2644 35.6302 47.3063 33.8961C47.3063 31.6807 47.4356 30.9701 47.4356 25.2854C47.4356 19.6006 47.4356 18.89 47.3063 16.6747V16.6747ZM43.4267 33.6453C43.411 34.972 43.1633 36.2864 42.6939 37.5327C42.3498 38.4422 41.7971 39.2641 41.0775 39.9361C40.3784 40.6269 39.5326 41.1618 38.5989 41.5036C37.3137 41.9587 35.9582 42.199 34.59 42.2142C32.4347 42.3187 31.6373 42.3396 25.9689 42.3396C20.3004 42.3396 19.503 42.3396 17.3477 42.2142C15.9271 42.24 14.5126 42.0279 13.1664 41.5872C12.2737 41.2279 11.4667 40.6944 10.7956 40.0197C10.0802 39.3483 9.53441 38.5258 9.20068 37.6163C8.67447 36.3521 8.38262 35.0079 8.33856 33.6453C8.33856 31.5553 8.20924 30.782 8.20924 25.2854C8.20924 19.7887 8.20924 19.0154 8.33856 16.9254C8.34822 15.5692 8.60355 14.2251 9.09291 12.9545C9.47234 12.0723 10.0547 11.286 10.7956 10.6555C11.4504 9.9369 12.2597 9.36619 13.1664 8.98352C14.4802 8.52381 15.8648 8.28354 17.2615 8.27293C19.4168 8.27293 20.2142 8.14753 25.8826 8.14753C31.5511 8.14753 32.3485 8.14753 34.5038 8.27293C35.8719 8.28814 37.2275 8.52842 38.5127 8.98352C39.4921 9.336 40.3712 9.90906 41.0775 10.6555C41.7838 11.2975 42.3356 12.0824 42.6939 12.9545C43.173 14.2271 43.4209 15.5707 43.4267 16.9254C43.5345 19.0154 43.5561 19.7887 43.5561 25.2854C43.5561 30.782 43.5345 31.5553 43.4267 33.6453ZM25.8826 14.5638C23.6968 14.5679 21.5612 15.2002 19.7458 16.3808C17.9304 17.5615 16.5166 19.2374 15.683 21.1969C14.8495 23.1563 14.6336 25.3114 15.0626 27.3898C15.4917 29.4683 16.5464 31.3767 18.0936 32.8741C19.6407 34.3714 21.6109 35.3905 23.7551 35.8025C25.8993 36.2145 28.1213 36.0009 30.1404 35.1888C32.1594 34.3767 33.885 33.0025 35.099 31.2398C36.3129 29.4771 36.9609 27.405 36.9609 25.2854C36.9637 23.8749 36.679 22.4777 36.123 21.1743C35.567 19.8709 34.7507 18.6869 33.7212 17.6905C32.6916 16.6941 31.4691 15.9049 30.1238 15.3683C28.7786 14.8317 27.3372 14.5583 25.8826 14.5638V14.5638ZM25.8826 32.245C24.4631 32.245 23.0755 31.8368 21.8952 31.0721C20.715 30.3074 19.7951 29.2204 19.2518 27.9487C18.7086 26.677 18.5665 25.2777 18.8434 23.9276C19.1204 22.5776 19.8039 21.3375 20.8077 20.3642C21.8114 19.3908 23.0902 18.728 24.4825 18.4595C25.8747 18.1909 27.3178 18.3287 28.6292 18.8555C29.9407 19.3823 31.0616 20.2743 31.8502 21.4188C32.6388 22.5633 33.0598 23.9089 33.0598 25.2854C33.0598 26.1993 32.8741 27.1043 32.5135 27.9487C32.1528 28.7931 31.6241 29.5603 30.9576 30.2066C30.2912 30.8528 29.5 31.3655 28.6292 31.7152C27.7584 32.065 26.8252 32.245 25.8826 32.245V32.245Z"
                      fill="#a2817f"
                    ></path></svg
                ></a>
                <span class="sr-only hidden">Instagram</span>
                <a href=""
                  ><svg
                    width="52"
                    height="51"
                    viewBox="0 0 52 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative w-14"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M44.2625 4.38585H7.75178C7.34136 4.38032 6.93385 4.45325 6.5525 4.60046C6.17115 4.74767 5.82344 4.96628 5.52923 5.24381C5.23502 5.52135 5.00007 5.85236 4.8378 6.21795C4.67553 6.58354 4.58912 6.97655 4.5835 7.37453V43.1968C4.58912 43.5948 4.67553 43.9878 4.8378 44.3534C5.00007 44.719 5.23502 45.05 5.52923 45.3275C5.82344 45.6051 6.17115 45.8237 6.5525 45.9709C6.93385 46.1181 7.34136 46.191 7.75178 46.1855H44.2625C44.6729 46.191 45.0804 46.1181 45.4617 45.9709C45.8431 45.8237 46.1908 45.6051 46.485 45.3275C46.7792 45.05 47.0142 44.719 47.1764 44.3534C47.3387 43.9878 47.4251 43.5948 47.4307 43.1968V7.37453C47.4251 6.97655 47.3387 6.58354 47.1764 6.21795C47.0142 5.85236 46.7792 5.52135 46.485 5.24381C46.1908 4.96628 45.8431 4.74767 45.4617 4.60046C45.0804 4.45325 44.6729 4.38032 44.2625 4.38585V4.38585ZM17.5799 39.3721H11.114V20.5623H17.5799V39.3721ZM14.347 17.9289C13.4553 17.9289 12.6 17.5854 11.9695 16.974C11.339 16.3626 10.9847 15.5333 10.9847 14.6686C10.9847 13.8039 11.339 12.9746 11.9695 12.3631C12.6 11.7517 13.4553 11.4082 14.347 11.4082C14.8205 11.3561 15.3 11.4016 15.7541 11.5417C16.2082 11.6818 16.6267 11.9133 16.9822 12.2211C17.3376 12.5289 17.622 12.906 17.8167 13.3278C18.0114 13.7496 18.1121 14.2065 18.1121 14.6686C18.1121 15.1307 18.0114 15.5876 17.8167 16.0093C17.622 16.4311 17.3376 16.8082 16.9822 17.116C16.6267 17.4238 16.2082 17.6553 15.7541 17.7954C15.3 17.9355 14.8205 17.981 14.347 17.9289V17.9289ZM40.9002 39.3721H34.4343V29.2775C34.4343 26.7487 33.5075 25.0976 31.1583 25.0976C30.4312 25.1027 29.7232 25.3239 29.1298 25.7312C28.5363 26.1385 28.0859 26.7124 27.8391 27.3757C27.6705 27.8669 27.5974 28.3842 27.6236 28.9013V39.3512H21.1577C21.1577 39.3512 21.1577 22.2552 21.1577 20.5414H27.6236V23.1957C28.211 22.2073 29.0653 21.3931 30.0945 20.8407C31.1237 20.2883 32.2889 20.0186 33.4644 20.0607C37.775 20.0607 40.9002 22.7568 40.9002 28.546V39.3721Z"
                      fill="#a2817f"
                    ></path></svg
                ></a>
                <span class="sr-only hidden">Linkedin</span>
              </div>
            </div>
          </div>
        </footer>
        <div class="mx-[5%] bg-gradient-to-b from-debut-gradient-2 to-fin-gradient-2 md:mx-[15%] lg:mx-[30%]">
      <div class="">
        <h2 class="mx-4 my-5 text-center text-lg text-text md:text-5xl">Formulaire de contact</h2>
        <p class="mx-10 my-10 text-2xl text-fond md:text-lg">Besoin de plus d’informations ? Posez-nous vos questions !</p>
      </div>
      <form action="#" method="post" class="">
        <p>
          <label for="name" class="my-5 mx-5 flex flex-col"
            >Votre nom
            <input
              type="text"
              id="name"
              name="name"
              value=""
              placeholder=" Nom "
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            />
          </label>
        </p>
        <p>
          <label for="email" class="my-5 mx-5 flex flex-col"
            >Votre Email
            <input
              type="email"
              id="email"
              name="email"
              value=""
              placeholder="   mail"
              required
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            />
          </label>
        </p>
        <p>
          <label for="sujet" class="my-5 mx-5 flex flex-col"
            >Sujet
            <input
              type="text"
              id="sujet"
              name="sujet"
              value=""
              placeholder="   sujet"
              required
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            />
          </label>
        </p>
        <p>
          <label for="message" class="my-5 mx-5 flex flex-col"
            >Votre message
            <textarea
              id="message"
              name="message"
              placeholder="   Message"
              rows="7"
              required
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            ></textarea>
          </label>
        </p>
        <input type="checkbox" id="accepte" name="accepte" class="mx-5 mr-5 h-6 w-6 border-2" required />
        <label for="accepte" class="mx-5 text-text">J’accepte et j’ai lu les conditions générales d’utilisations.</label>
        <div class="m-auto flex justify-center">
          <button type="submit" class="my-7 bg-white px-8 py-4 text-base hover:bg-white hover:text-black">Envoyer votre message</button>
        </div>
      </form>
    </div>
    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[75%] flex-col gap-[40px] rounded-[35px] bg-card-2nd shadow-cardShadow">
        <img src="../../images/Image-1-1-_1_.webp" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-Alegreya Sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl text-text">Yves Jamait</p>
        <div class="flex px-5">
          <p class="font-Alegreya Sans flex text-left lg:text-5xl md:text-3xl text-2xl text-text">
            Lundi 16 Juin : 14h30 - 16h30 <br />
            Lieu : Scène Interieur Halle <br />Catégorie : Chanson Française, Variété Francaise, Guitare
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-text bg-text" />
        </div>
        <router-link to="/concert">
        <p class="ml-auto flex w-max py-10 pr-[50px] font-alegreya-sans text-2xl text-interactive">RESERVER</p>
        </router-link>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "../components/icons/LogoView.vue";
import MenuH from "../components/icons/MenuHView.vue";
import Play from "../components/icons/PlayView.vue";
import Arrowdown from "../components/icons/FlecheBasView.vue";
import Social from "../components/icons/SocialView.vue";
export default {
  components: { Logo, MenuH, Play, Arrowdown, Social },
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
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