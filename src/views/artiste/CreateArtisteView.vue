<template>
<div class="container">
        <form enctype="multipart/form-data"
        @submit.prevent="createArtiste" >
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Création Artiste</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <!-- <div class="col-6">
                            <div>
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div> -->

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom" v-model="Artiste.nom"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Prenom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Prenom "
                                    v-model="Artiste.prenom" required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Biographie</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Biographie d'Artiste"
                                    v-model="Artiste.biographie" required />                    
                            </div>
                            <br/>
                            <!-- <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Photo</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage"
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/> -->
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
                                    <span class="input-group-text" >Style</span>
                                </div>
                                <select class="custom-select " v-model="Artiste.style" >
                                    <option  selected disabled>Sélectionner une scène</option>
                                    <option v-for="StyleMusique in listeStyleM" :key="StyleMusique.libellé">{{StyleMusique.libellé}}</option>
                                </select>
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-light">
                        Créer
                    </button>
                    <button class="float-right btn btn-light" >
                        <router-link to="/listeArtisteV2" >Annuler</router-link>
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
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      imageData: null,
      listeStyleM: [],
      Artiste: {
        nom: null,
        prenom: null,
        biographie: null,
        style: null,
      },
    };
  },
  mounted() {
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
    
//     previewImage:function(event){
//    // Miseàjour de la photo du participant
//    this.file = this.$refs.file.files[0];
//    // Récupérer le nom du fichier pour la photo du participant
//    this.Artiste.photo = this.file.name;
//    // Reference to the DOM input element
//    // Reference du fichieràprévisualiser
//    var input = event.target;
//    // On s'assure que l'onaau moins un fichieràlire
//    if(input.files && input.files[0]){
//        // Creation d'un filereader
//         // Pour lire l'image et la convertir en base 64
//         var reader=new FileReader();
//         // fonction callback appellée lors que le fichieraété chargé
//         reader.onload=(e)=>{
//             // Read image as base64 and set to imageData
//             // lecture du fichier pour mettreàjour
//             // la prévisualisation
//             this.imageData = e.target.result;
//        }
//        // Demarrage du reader pour la transformer en data URL(format base 64)
//         reader.readAsDataURL(input.files[0]);
//     }
//     },
    async createArtiste(){
    // Obtenir storage Firebase
    const storage = getStorage();
    // Référence de l'imageàuploader
    const refStorage = ref(storage,'artiste/');
    // // Upload de l'image sur le Cloud Storage
    await uploadString(refStorage,'data_url').then((snapshot)=>{
        // console.log('Uploadedabase64 string');
        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db,'Artiste'),this.Artiste);
    });
    // redirection sur la liste des participants
    this.$router.push('/listeArtisteV2');
    },


    }
};
</script>
<style scoped>
a{
   color:black;
  
}
a:hover{
     text-decoration:none;
}
</style>