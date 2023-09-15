import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const URL = "http://localhost:3005/";

export const listaVideos = () => {
  return fetch(`${URL}videos`).then((resp) => {
    return resp.json();
  });
};

export const listaCategorias = () => {
  return fetch(`${URL}categories`).then((resp) => {
    return resp.json();
  });
};

export const crearVideo = (video)=>{
  return fetch(`${URL}videos`,{
    method: 'POST',
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(video)
  })
}

export const crearCategory = (category)=>{
  return fetch(`${URL}categories`,{
    method: 'POST',
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(category)
  })
}

export const eliminarCategory = (id)=>{
  return fetch(`${URL}categories/${id}`,{
    method: 'DELETE',
  })
}

export const saveVideo = (video) => {
  return addDoc(collection(db, "videos"), video);
};

export const onGetVideos = (callback) => onSnapshot(collection(db, 'videos'), callback);

export const onGetCategories = (callback) => onSnapshot(collection(db, 'categories'), callback);

export const saveCategory = (category) => {
  return addDoc(collection(db, "categories"), category);
};

export const getCategory =  (id)=>getDoc(doc(db,'categories', id));
export const deleteCategory =  (id)=>deleteDoc(doc(db,'categories', id));

export const updateCategory = (id, category)=> updateDoc(doc(db,'categories', id),category); 



