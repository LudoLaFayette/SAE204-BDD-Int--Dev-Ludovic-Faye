<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="updateConcert">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Mise à jour de Concert</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div>
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom du Concert" v-model="Concert.nom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Description</span>
                </div>
                <input class="form-control" placeholder="Description sur le Concert" v-model="Concert.description" required />
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
                                    required />                    
                            </div>
                            <br/> -->
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Scène</span>
                </div>
                <select class="custom-select" v-model="Concert.lieu" required>
                  <option selected disabled>Sélectionner une scène</option>
                  <option v-for="lieuConcert in listeLieuC" :key="lieuConcert.libellé">{{ lieuConcert.libellé }}</option>
                </select>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Modifier</button>
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
  name: "UpdateView",
  data() {
    return {
      imageData: null,
      listeLieuC: [],
      Concert: {
        nom: null,
        description: null,
        photo: null,
        lieu: null,
      },
      refConcert: null,
      imgModifiée: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id Concert", this.$route.params.id);
    this.getConcert(this.$route.params.id);
    this.getLieu();
  },
  methods: {
    async getLieu() {
      const firestore = getFirestore();
      const dbLieuC = collection(firestore, "LieuConcert");
      const query = await getDocs(dbLieuC);
      query.forEach((doc) => {
        let lieuConcert = {
          id: doc.id,
          libellé: doc.data().libellé,
        };
        this.listeLieuC.push(lieuConcert);
        console.log("liste des scènes", this.listeLieuC);
      });
    },

    previewImage: function (event) {
      // Miseàjour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.Concert.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichieràprévisualise
      //Verifie l'image est modifiée ou non
      this.imgModifiée = true;
      var input = event.target;
      // On s'assure que l'onaau moins un fichieràlire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichieraété chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettreàjour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL(format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async updateConcert() {
      if (this.imgModifiée) {
        const storage = getStorage();
        let docRef = ref(storage, "concert/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "concert/" + this.concert.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Upload a base64 string", this.concert.photo);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "Concert", this.$route.params.id), this.Concert);
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