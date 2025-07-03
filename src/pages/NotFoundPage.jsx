import React from "react";
import BackButton from "../components/BackButton";

function NotFoundPage() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "white",
        width: "96vw",
        height: "55vh",
        paddingTop: "40vh"
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <BackButton />
    </div>
  );
}

export default NotFoundPage;
