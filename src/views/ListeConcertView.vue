<template>
  <div class="flex flex-col bg-fond">
    <img src="../../images/Image-1-1-_1_.webp" class="w-full" />

    <div class="flex items-center justify-center gap-2.5 p-2.5">
      <div class="mx-[5rem] mt-[-70px] flex rounded-[25px] border-2 border--couleur-red-600 bg-tri px-[35px] py-1">
        <h2 class="text-center font-alegreya-sans lg:text-8xl md:text-6xl text-2xl font-bold text-couleur-red-600">
          Liste des <br />
          Concerts
        </h2>
      </div>
    </div>

    <p class="flex text-center md:text-4xl text-2xl text-text mt-6">
      Voici la partie du site ou vous pourrez choisir le concert auxquel vous voulez réserver votre place :
    </p>

    <div class="grid md:grid-cols-4 lg:gap-[20px] grid-cols-2 gap-2 rounded-[25px] mt-[50px] border border-fond bg-card-2nd">
      <div class="flex flex-col justify-center">
        <p class="text-left lg:text-3xl text-base text-text">Trier par :</p>
      </div>

      <div class="flex items-center border-b-2 border-solid border-text">
        <p class="pt-[15px] text-left lg:text-3xl text-base text-text">Lieu de la scène</p>
        <div class="ml-auto flex items-center  border-text pt-5 ">
          <svg
            width="20"
            height="12"
            viewBox="0 0 34 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-auto lg:w-full w-1/2 stroke-black dark:stroke-white"
            preserveAspectRatio="none"
          >
            <line
              y1="-0.5"
              x2="24.7607"
              y2="-0.5"
              transform="matrix(0.671269 0.741214 -0.671269 0.741214 0.347412 1)"
              
            ></line>
            <line
              y1="-0.5"
              x2="24.7607"
              y2="-0.5"
              transform="matrix(0.671269 -0.741214 0.671269 0.741214 16.9685 19.353)"
              
            ></line>
          </svg>
        </div>
      </div>

      <div class="flex items-center border-b-2 border-solid border-text">
        <p class="pt-[15px] text-left lg:text-3xl text-base text-text">Artiste</p>
        <div class="ml-auto flex items-center  border-text pt-5 ">
          <svg
            width="20"
            height="12"
            viewBox="0 0 34 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-auto lg:w-full w-1/2 stroke-black dark:stroke-white"
            preserveAspectRatio="none"
          >
            <line
              y1="-0.5"
              x2="24.7607"
              y2="-0.5"
              transform="matrix(0.671269 0.741214 -0.671269 0.741214 0.347412 1)"
              
            ></line>
            <line
              y1="-0.5"
              x2="24.7607"
              y2="-0.5"
              transform="matrix(0.671269 -0.741214 0.671269 0.741214 16.9685 19.353)"
         
            ></line>
          </svg>
        </div>
      </div>

      <div class="flex items-center border-b-2 border-solid border-text">
        <p class="text-left lg:text-3xl text-base  text-text pt-[15px]">Catégorie</p>
        <div class="ml-auto flex items-center justify-between border-text pt-5 ">
          <svg
            width="20 "
            height="12"
            viewBox="0 0 34 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-auto lg:w-full w-1/4 stroke-black dark:stroke-white"
            preserveAspectRatio="none"
          >
            <line
              y1="-0.5"
              x2="24.7607"
              y2="-0.5"
              transform="matrix(0.671269 0.741214 -0.671269 0.741214 0.347412 1)"
              
            ></line>
            <line
              y1="-0.5"
              x2="24.7607"
              y2="-0.5"
              transform="matrix(0.671269 -0.741214 0.671269 0.741214 16.9685 19.353)"
             
            ></line>
          </svg>
        </div>
      </div>
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
</template>
<script>
</script>