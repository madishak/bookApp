import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookForm from "./containers/BookForm/BookForm";
import BookCards from "./containers/BookCards/BookCards";
import BookCardView from "./containers/BookCardView/BookCardView";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <BookForm />
        <Routes>
          <Route path="/" element={<BookCards />} />
          <Route path="/:id" element={<BookCardView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
