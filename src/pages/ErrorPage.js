import React from "react";
import img from "../asset/not-found.png";
import "../style/pageError.css";

export default function ErrorPage() {
  document.title = 'Error';
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img src={img} alt="url tidak ditemukan" />
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}