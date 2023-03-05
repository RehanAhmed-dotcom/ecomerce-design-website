import React, { useEffect, useState } from "react";

import { deleteDoc, doc, getDocs } from "firebase/firestore";

import { movieCollectionRef } from "../lib/collectionRef";
import { db } from "../lib/firebase";
export default function ListMovies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    getDocs(movieCollectionRef)
      .then((res) => {
        const moviesList = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMovies(moviesList);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteMovie = (id) => {
    const docRef = doc(db, "movies", id);
    deleteDoc(docRef);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div></div>;
}
