<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Mise à jour d'Artiste</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <!-- <div class="col-6">
              <div>
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div> -->

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
                                    required />                    
                            </div>
                            <br/> -->
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Style</span>
                </div>
                <select class="custom-select" v-model="Artiste.style">
                  <option selected disabled>Sélectionner une scène</option>
                  <option v-for="StyleMusique in listeStyleM" :key="StyleMusique.libellé">{{ StyleMusique.libellé }}</option>
                </select>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Modifier</button>
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
  name: "UpdateView",
  data() {
    return {
    //   imageData: null,
      listeStyleM: [],
      Artiste: {
        nom: null,
        prenom: null,
        biographie: null,
        style: null,
      },
      refArtiste: null,
    //   imgModifiée: false,
    //   photoActuelle: null,
    };
  },
  mounted() {
    console.log("id Concert", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
    this.getStyle();
  },
  methods: {
    async getStyle() {
      const firestore = getFirestore();
      const dbStyleM = collection(firestore, "StyleMusique");
      const query = await getDocs(dbStyleM);
      query.forEach((doc) => {
        let StyleMusique = {
          id: doc.id,
          libellé: doc.data().libellé,
        };
        this.listeStyleM.push(StyleMusique);
        console.log('liste des styles', this.listeStyleM);
      });
    },

    // previewImage: function (event) {
    //   // Miseàjour de la photo du participant
    //   this.file = this.$refs.file.files[0];
    //   // Récupérer le nom du fichier pour la photo du participant
    //   this.Concert.photo = this.file.name;
    //   // Reference to the DOM input element
    //   // Reference du fichieràprévisualise
    //   //Verifie l'image est modifiée ou non
    //   this.imgModifiée = true;
    //   var input = event.target;
    //   // On s'assure que l'onaau moins un fichieràlire
    //   if (input.files && input.files[0]) {
    //     // Creation d'un filereader
    //     // Pour lire l'image et la convertir en base 64
    //     var reader = new FileReader();
    //     // fonction callback appellée lors que le fichieraété chargé
    //     reader.onload = (e) => {
    //       // Read image as base64 and set to imageData
    //       // lecture du fichier pour mettreàjour
    //       // la prévisualisation
    //       this.imageData = e.target.result;
    //     };
    //     // Demarrage du reader pour la transformer en data URL(format base 64)
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // },
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Artiste", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.Artiste = this.refArtiste.data();
        // this.photoActuelle = this.Concert.photo;
      } else {
        this.console.log("Concert inexistant");
      }
    //   const storage = getStorage();
    //   const spaceRef = ref(storage, "concert/" );//+this.Artiste.photo;
    //   getDownloadURL(spaceRef)
    //     .then((url) => {
    //       this.imageData = url;
    //     })
    //     .catch((error) => {
    //       console.log("erreur downloadUrl", error);
    //     });
    },

    async updateArtiste() {
    //   if (this.imgModifiée) {
    //     const storage = getStorage();
    //     let docRef = ref(storage, "artiste/" );//+ this.photoActuelle
    //     deleteObject(docRef);
    //     docRef = ref(storage, "artiste/" + this.Artiste.photo);
    //     await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
    //       console.log("Upload a base64 string", this.Artiste.photo);
    //     });
    //   }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "Artiste", this.$route.params.id), this.Artiste);
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