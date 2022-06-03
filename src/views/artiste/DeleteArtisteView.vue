<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="deleteArtiste">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Supression d'Artiste</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <!-- <div>
                <img class="preview img-fluid" :src="photoActuelle" />
              </div> -->
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom" v-model="Artiste.nom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prenom</span>
                </div>
                <input class="form-control" placeholder="Prenom " v-model="Artiste.prenom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Biographie</span>
                </div>
                <input class="form-control" placeholder="Biographie d'Artiste" v-model="Artiste.biographie" required />
              </div>
              <br />
              <!-- <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <br /> -->
              <!-- <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input 
                                    type="date"
                                    class="form-control"
                                    v-model="participant.naissance"
                                    format="dd//mm/yyyy" 
                                    disabled />                    
                            </div>
                            <br/> -->
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Style</span>
                </div>
                <select class="custom-select" v-model="Artiste.style " disabled>
                  <option selected disabled>Sélectionner une scène</option>
                  <option v-for="StyleMusique in listeStyleM" :key="StyleMusique.libellé">{{ StyleMusique.libellé }}</option>
                </select>
              </div>
              <br />
              <h5 class="alert alert-warning text-center" role="alert">
                Attention vous allez supprimer cette Artiste, cette action est irréversible !!
              </h5>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Supprimer</button>
          <button class="btn btn-light float-right">
            <router-link to="/listeArtisteV2">Annuler</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
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
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      listeStyleM: [],
      Artiste: {
        nom: null,
        prenom: null,
        biographie: null,
        style: null,
      },
      refArtiste: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id Artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artiste", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.Artiste = this.refArtiste.data();
        // this.photoActuelle = this.Artiste.photo;
      } else {
        this.console.log("Artiste inexistant");
      }
    //   const storage = getStorage();
    //   const spaceRef = ref(storage, "concert/" + this.Concert.photo);
    //   getDownloadURL(spaceRef)
    //     .then((url) => {
    //       this.photoActuelle = url;
    //     })
    //     .catch((error) => {
    //       console.log("erreur downloadUrl", error);
    //     });
    },

    async deleteArtiste() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "Artiste", this.$route.params.id));
    //   const storage = getStorage();
    //   let docRef = ref(storage, "concert/" );//this.Concert.photo
    //   deleteObject(docRef);
      this.$router.push("/listeArtisteV2");
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
</style>