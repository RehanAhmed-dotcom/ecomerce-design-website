import React from "react";
import { Routes, Route } from "react-router-dom";
import BookLayout from "./BookLayout";
import BookList from "./BookList";
import Books from "./Books";
import NewBook from "./NewBook";
const BookRouters = () => {
  return (
    <>
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Books />} />
        <Route path="new" element={<NewBook />} />
      </Routes>
    </>
  );
};

export default BookRouters;
