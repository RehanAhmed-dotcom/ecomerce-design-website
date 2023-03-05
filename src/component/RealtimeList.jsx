import { onSnapshot, deleteDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { movieCollectionRef } from "../lib/collectionRef";
import { db } from "../lib/firebase";
export default function RealtimeList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(movieCollectionRef, (snapshot) => {
      setMovies(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const deleteMovie = (id) => {
    const docRef = doc(db, "movies", id);
    deleteDoc(docRef);
  };
  return (
    <div>
      <h4>real time ListMovies</h4>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id}:{movie.data.name}
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
