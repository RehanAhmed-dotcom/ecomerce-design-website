import React, { useState } from "react";
import { movieCollectionRef } from "../lib/collectionRef";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
export default function EditMovie() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setId("");
    if (name === "" || id === "") {
      return;
    }
    const docRef = doc(db, "movies", id);
    updateDoc(docRef, { name });
  };
  return (
    <div>
      <h4>EditMovie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input
          id={"id"}
          type={"text"}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          id={"name"}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
}
