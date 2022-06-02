<template>
  <div class="flex flex-col bg-fond">
    <div class="flex">
      <img src="../../images/image-3.webp" class="w-full" />
    </div>
    <div class="flex items-center justify-center gap-2.5 p-2.5">
      <div class="mx-[5rem] mt-[-70px] flex rounded-[25px] border-2 border-couleur-red-600 bg-fond py-1 text-2xl md:text-4xl">
        <h2 class="relative text-center font-alegreya-sans text-2xl font-bold text-couleur-red-600 md:text-6xl lg:text-8xl">
          Nous contacter
        </h2>
      </div>
    </div>
<!-- modification du formulaire de contact  -->
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
    <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.84086925745953!2d3.2813139885030393!3d48.19794029870508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef10048141ced7%3A0xe4f92f614bbe0b2a!2s17%20Rue%20du%20Plat%20d&#39;%C3%89tain%2C%2089100%20Sens!5e0!3m2!1sfr!2sfr!4v1654071078501!5m2!1sfr!2sfr"
      width="600"
      height="450"
      class="my-10 w-full"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  </div>
  
</template>
<script>
</script>