"use client"; // Necessary for client-side interactivity

import { useState } from "react";

export default function PetTheCatGame() {
  const [happiness, setHappiness] = useState(0);

  const petCat = () => {
    setHappiness(happiness + 1);
  };

  const resetHappiness = () => {
    setHappiness(0);
  };

  const getCatMood = () => {
    if (happiness < 10) return "😾 (Grumpy)";
    if (happiness < 20) return "😺 (Happy)";
    return "😻 (Overjoyed)";
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fdf6e4",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1>Pet the Cat Game</h1>
      <p style={{ fontSize: "24px", marginBottom: "20px" }}>
        Happiness Level: {happiness}
      </p>
      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        Mood: {getCatMood()}
      </p>
      <img
        src="/cat.png"
        alt="Pixelated Cat"
        style={{
          width: "200px",
          height: "200px",
          imageRendering: "pixelated", // Makes the cat appear pixelated
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
      <button
        onClick={petCat}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Pet the Cat
      </button>
      <button
        onClick={resetHappiness}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </main>
  );
}