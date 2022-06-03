<template>
  <div class="card bg-black">
    <div class="card-header">
      <h5>
        Liste des artistes
        <span class="float-right" title="Créer un nouvel artiste">
          <router-link to="/createArtiste">
            <i class="fa fa-plus fa-lg text-light"></i>
          </router-link>
        </span>
      </h5>
    </div>

    <div class="card-body table-responsive">
      <table class="table text-light">
        <thead>
          <tr>
            <!-- <th scope="col" class="text-center">Image</th> -->
            <th scope="col">Nom</th>
            <th scope="col">prenom</th>
            <th scope="col">biographie</th>
            <th scope="col">Style</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Artiste in listeArtiste" :key="Artiste.id">
            <!-- <td class="text-center">
              <img
                class="media-object imageSmall"
                :src="Concert.photo"
                :alt="Concert.description + ' ' + Concert.lieu"
              />
            </td> -->
            <td>
              <b>{{ Artiste.nom }}</b>
            </td>
            <td>{{ Artiste.prenom }}</td>
            <td>{{ Artiste.biographie }}</td>
            <td>{{ Artiste.style }}</td>
            <td>
               <span title="Supprimer l'artiste">
                <RouterLink :to="{ name: 'DeleteArtiste', params: { id: Artiste.id } }">
                  <i class="fa fa-times fa-lg text-light"></i>
                </RouterLink>
              </span> 
              <span title="Modifier le concert">
                <RouterLink :to="{ name: 'UpdateArtiste', params: { id: Artiste.id } }">
                  <i class="fa fa-edit fa-lg text-light"></i>
                </RouterLink>
              </span>  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage,
  ref, //
  getDownloadURL,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "ListeViewConcertV2",
  data() {
    return {
      listeArtiste: [],
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données(collection)document participant
      const dbArtiste = collection(firestore, "Artiste");
      // Liste des participants triés sur leur nom
      const q = query(dbArtiste, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        });
        // Récupération des images de chaque participant
        // parcours de la liste

        // this.listeArtiste.forEach(function (Artiste) {
        //   // Obtenir le Cloud Storage
        //   const storage = getStorage();
        //   // Récupération de l'image par son nom de fichier
        //   const spaceRef = ref(storage, "artiste/" + Artiste.photo);
        //   // Récupération de l'url complète de l'image
        //   getDownloadURL(spaceRef)
        //     .then((url) => {
        //       // On remplace le nom du fichier
        //       // Par l'url complète de la photo
        //       Artiste.photo = url;
        //     })
        //     .catch((error) => {
        //       console.log("erreur downloadUrl", error);
        //     });
        // });
      
    },
  },
};
</script>
<style scoped>
a {
  color: black;
}
a:hover {
  text-decoration: none;
}
h5 {
  color: white;
}
</style>