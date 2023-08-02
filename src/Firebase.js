// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5guoOWzhDNve0wxf6h815JpMz6jrroMw",
  authDomain: "ecommerce-f4687.firebaseapp.com",
  projectId: "ecommerce-f4687",
  storageBucket: "ecommerce-f4687.appspot.com",
  messagingSenderId: "51498829583",
  appId: "1:51498829583:web:74bca3850670bc36c2207a",
  measurementId: "G-NEEHF3BVH5"
};

// to connect firebase app

const app = firebase.initializeApp(firebaseConfig)

// to connect with firestore

export const myDatabase =firebase.firestore()

export const auth = getAuth(app)   // to connect our react application with authentication which is present in firebase

export const provider = new GoogleAuthProvider()   // to connect our react application with google authentication
