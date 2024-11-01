import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIh-sSbpaYw5nxq179jV6KvLRDoWdhUrE",
  authDomain: "poketienda-d85bb.firebaseapp.com",
  projectId: "poketienda-d85bb",
  storageBucket: "poketienda-d85bb.firebasestorage.app",
  messagingSenderId: "215068258062",
  appId: "1:215068258062:web:20cf6f086b7672372d715f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export class DBConnection {
  constructor() {
    this.collectionRef = collection(db, "user");
  }

  // Crear un nuevo documento
  async create(data) {
    try {
      const docRef = await addDoc(this.collectionRef, data);
      console.log("Documento escrito con ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error añadiendo documento: ", e);
    }
  }

  // Leer todos los documentos
  async readAll() {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Documentos:", dataList);
      return dataList;
    } catch (e) {
      console.error("Error obteniendo documentos: ", e);
    }
  }

  // Actualizar un documento por ID
  async update(id, data) {
    try {
      const docRef = doc(this.collectionRef, id);
      await updateDoc(docRef, data);
      console.log("Documento actualizado con ID: ", id);
    } catch (e) {
      console.error("Error actualizando documento: ", e);
    }
  }

  // Eliminar un documento por ID
  async delete(id) {
    try {
      const docRef = doc(this.collectionRef, id);
      await deleteDoc(docRef);
      console.log("Documento eliminado con ID: ", id);
    } catch (e) {
      console.error("Error eliminando documento: ", e);
    }
  }
  
  async getFile(id) {
    try {
        const docRef = doc(this.collectionRef, id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (e) {
        console.error("No se obtuvo la información: " + e)
    }
  }
}

export default DBConnection;