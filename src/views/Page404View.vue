<template>
  <div class="flex flex-col bg-fond">
    <div class="flex items-center justify-center gap-2.5 p-2.5">
      <div class="mx-[5rem] flex rounded-[25px] border-2 border-couleur-red-600 bg-fond py-1 text-2xl md:text-4xl">
        <h2 class="relative text-center font-alegreya-sans text-2xl font-bold text-couleur-red-600 md:text-6xl lg:text-8xl">Page 404</h2>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <img src="../../images/error404.jpg" alt="error404" class="w-[25%]" />
    </div>
    <div class="mb-[45px] mt-[45px] p-5 text-center">
      <p class="font-alegreya-sans text-2xl font-bold text-text mb-12">Désolée la page que vous recherchez est introuvable</p>

      <input type="text" id="myInput" @keyup="myFunction()" placeholder="Saissisez le nom de la page" title="Type in a name" />

      <ul id="myUL">
        <li><router-link to="/artisteListe">Liste des artistes</router-link></li>
        <li><router-link to="/concertListe">Listes des concerts</router-link></li>
        <li><router-link to="/histoire">L'histoire du festival</router-link></li>
        <li><router-link to="/contact">Nous contacter</router-link></li>
        <li><router-link to="/styleGuide">Guide de style</router-link></li>
        <li><router-link to="/concert">Réservation</router-link></li>
        <li><router-link to="/artiste">Biographie de l'artiste</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
name:"Page404",
methods:{
myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}
}

};

</script>
<style>
* {
  box-sizing: border-box;
}

#myInput {
  background-image: url("/css/searchicon.png");
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; 
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}
</style>
