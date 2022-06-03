<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="deleteConcert">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Supression de Concert</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div>
                <img class="preview img-fluid" :src="photoActuelle" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom du Concert" v-model="Concert.nom" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Description</span>
                </div>
                <input class="form-control" placeholder="description du Concert" v-model="Concert.description" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <br />
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
                  <span class="input-group-text">Scène</span>
                </div>
                <select class="custom-select" v-model="Concert.lieu" disabled>
                  <option selected disabled>Sélectionner un Pays</option>
                  <option v-for="lieuConcert in listeLieuC" :key="lieuConcert.libellé">{{ lieuConcert.libellé }}</option>
                </select>
              </div>
              <br />
              <h5 class="alert alert-warning text-center" role="alert">
                Attention vous allez supprimer ce Concert, cette action est irréversible !!
              </h5>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Supprimer</button>
          <button class="btn btn-light float-right">
            <router-link to="/listeConcertV2">Annuler</router-link>
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
      listeLieuC: [],
      Concert: {
        nom: null,
        description: null,
        photo: null,
        lieu: null,
      },
      refConcert: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id Concert", this.$route.params.id);
    this.getConcert(this.$route.params.id);
  },
  methods: {
    async getConcert(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Concert", id);
      this.refConcert = await getDoc(docRef);
      if (this.refConcert.exists()) {
        this.Concert = this.refConcert.data();
        this.photoActuelle = this.Concert.photo;
      } else {
        this.console.log("Concert inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "concert/" + this.Concert.photo);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
    

    async deleteConcert() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "Concert", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "concert/", this.Concert.photo);
      deleteObject(docRef);
      this.$router.push("/listeConcertV2");
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