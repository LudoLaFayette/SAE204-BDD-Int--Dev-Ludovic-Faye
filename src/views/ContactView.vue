<template>
  <div class="flex flex-col">
    <div class="flex">
      <img src="../../images/image-3.webp" class="w-full" />
    </div>
    <div class="flex items-center justify-center gap-2.5 p-2.5">
      <div class="mx-[5rem] mt-[-70px] flex rounded-[25px] border-2 border-red-600 bg-white py-1 text-2xl md:text-4xl">
        <h2 class="relative text-center font-alegreya-sans text-2xl font-bold text-red-600 md:text-6xl lg:text-8xl">Nous contacter</h2>
      </div>
    </div>
    <!-- <div class="relative h-[2104px] w-[1343px]">
      <div class="absolute left-[-1px] top-[-1px] flex h-[2104px] w-[1343px] items-start justify-start gap-2.5 p-2.5">
        <div class="flex-grow self-stretch" style="background: linear-gradient(to bottom, #bbb7b4 0%, #801e1e 74.4%)"></div>
      </div>
      <div class="absolute left-[325.17px] top-[71.67px] flex h-[152.26px] w-[695.42px] items-start justify-start gap-5 p-[5px]">
        <p class="w-[685.42px] flex-grow text-center text-2xl text-black md:text-6xl lg:text-8xl">Formulaire de contact</p>
      </div>
      <div class="absolute left-[140.97px] top-[268.91px] flex h-[235.32px] w-[964.02px] items-start justify-start gap-2.5 p-2.5">
        <p class="w-[944.02px] flex-grow text-left text-[64px] text-white">
          <span class="w-[944.02px] flex-grow text-left text-[64px] text-white">Besoin de plus d’informations ? </span><br /><span
            class="w-[944.02px] flex-grow text-left text-[64px] text-white"
            >Posez-nous vos questions !
          </span>
        </p>
      </div> -->
      <div class=" bg-gradient-to-b from-[#bbb7b4] to-[#801e1e] lg:mx-[30%] md:mx-[15%] mx-[5%] " >
        <div class="">
        <h2 class="text-black md:text-5xl mx-4 text-lg text-center my-5">Formulaire de contact</h2>
        <p class="text-white md:text-lg text-2xl mx-10 my-10">Besoin de plus d’informations ?
Posez-nous  vos questions !
</p></div>
        <form action="#" method="post" class=""> 
                      <p>
                      <label for="name"  class="flex flex-col my-5 mx-5">Votre nom 
                          <input type="text" id="name" name="name" value="" placeholder=" Nom "  class="my-3 border-2 mx-5   placeholder:text-base  placeholder:text-gray-400 text-black " >
                      </label>
                      </p>
                      <p >
                          <label for="email" class="flex flex-col my-5 mx-5">Votre Email 
                          <input type="email" id="email" name="email" value="" placeholder="   mail" required  class="my-3 border-2  mx-5 placeholder:text-base  placeholder:text-gray-400 text-black "  >
                          </label>
                      </p>
                      <p>
                      <label for="sujet" class="flex flex-col my-5 mx-5">Sujet
                          <input type="text" id="sujet" name="sujet" value="" placeholder="   sujet" required  class="my-3 border-2 mx-5  placeholder:text-base  placeholder:text-gray-400 text-black " >
                      </label>
                      </p>
                      <p>
                      <label for="message" class="flex flex-col my-5 mx-5">Votre message
                          <textarea id="message" name="message"  placeholder="   Message" rows="7" required class="my-3 border-2 mx-5 placeholder:text-base  placeholder:text-gray-400  text-black " ></textarea>
                          
                      </label>
                      </p>
                      <input type="checkbox" id="accepte" name="accepte"
                              class="mr-5 h-6 w-6 border-2 mx-5 " required>
                      <label for="accepte" class="text-white mx-5 ">J’accepte et j’ai  lu les conditions générales d’utilisations.</label>
                      <div class="flex justify-center m-auto">
                          <button type="submit"  class=" px-8 py-4 my-7 bg-white text-base hover:bg-white hover:text-black">Envoyer votre message</button>
                      </div>
          </form>
      </div>
    </div>
    <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.84086925745953!2d3.2813139885030393!3d48.19794029870508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef10048141ced7%3A0xe4f92f614bbe0b2a!2s17%20Rue%20du%20Plat%20d&#39;%C3%89tain%2C%2089100%20Sens!5e0!3m2!1sfr!2sfr!4v1654071078501!5m2!1sfr!2sfr"
      width="600"
      height="450"
      class="w-full my-10"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
<script>
</script>