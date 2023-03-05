import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { movieCollectionRef } from "../lib/collectionRef";
export default function AddMovie() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    if (name === "") {
      return;
    }
    addDoc(movieCollectionRef, { name })
      .then((res) => {
        console.log("res of add collection", res);
      })
      .catch((err) => {
        console.log("error in add collection", err.message);
      });
    // alert(name);
  };
  return (
    <div>
      <h4>AddMovie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id={"name"}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
