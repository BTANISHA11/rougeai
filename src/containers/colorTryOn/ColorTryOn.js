import { Button } from "@mui/material";
import React, { useState } from "react";
import "./colorTryOn.css";

// Color palettes
const hairColors = [
  "#aa8866", "#debe99", "#241c11", "#4f1a00", "#9a3300",
  "#5a3214", "#505050", "#11642f", "#c2a070", "#b68a67"
];
const lipColors = [
  "#840016", "#3A4763", "#D53763", "#CC0000", "#BF8445",
  "#DAA074", "#C0428A", "#642209", "#E55E58", "#EA6770"
];
const linerColors = [
  "#000000", "#2f2f2f", "#555555", "#333333", "#1a1a1a",
  "#4d4d4d", "#111111", "#2b2b2b", "#444444", "#666666"
];
const foundationColors = [
  "#e3c3a3", "#d3a983", "#e1b49d", "#d1a17b", "#c29376",
  "#e4bfa6", "#cda07b", "#b78d6e", "#d0a98b", "#be8b67"
];
const eyeshadowColors = [
  "#ffc0cb", "#a52a2a", "#ff0000", "#ffa500", "#ffff00",
  "#008000", "#00ffff", "#0000ff", "#800080", "#ff00ff"
];

const ColorTryOn = () => {
  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();
  const [apiSuccess, setApiSuccess] = useState(false);
  const [hairColor, setHairColor] = useState();
  const [lipColor, setLipColor] = useState();
  const [linerColor, setLinerColor] = useState();
  const [foundationColor, setFoundationColor] = useState();
  const [eyeshadowColor, setEyeshadowColor] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFileURL(URL.createObjectURL(e.target.files[0]));
  };

  const handleHairColor = (i) => setHairColor(hairColors[i]);
  const handleLipColor = (j) => setLipColor(lipColors[j]);
  const handleLinerColor = (k) => setLinerColor(linerColors[k]);
  const handleFoundationColor = (l) => setFoundationColor(foundationColors[l]);
  const handleEyeshadowColor = (m) => setEyeshadowColor(eyeshadowColors[m]);

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("haircolor", hairColor);
    formData.append("lipcolor", lipColor);
    formData.append("linercolor", linerColor);
    formData.append("foundationcolor", foundationColor);
    formData.append("eyeshadowcolor", eyeshadowColor);

    console.log("Selected Colors:", { hairColor, lipColor, linerColor, foundationColor, eyeshadowColor });

    await fetch("http://localhost:7001/display", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setApiSuccess(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="color">
      <h1>Upload Your Image:</h1>
      <input type="file" onChange={handleChange} />

      <h1>Select Hair Color:</h1>
      <div className="colorList">
        {hairColors.map((color, i) => (
          <div key={i}
            style={{
              background: color,
              border: hairColor === hairColors[i] ? "3px solid var(--color-secondary)" : "",
            }}
            onClick={() => handleHairColor(i)}
          ></div>
        ))}
      </div>

      <h1>Select Lipstick Color:</h1>
      <div className="colorList">
        {lipColors.map((color, j) => (
          <div key={j}
            style={{
              background: color,
              border: lipColor === lipColors[j] ? "3px solid var(--color-secondary)" : "",
            }}
            onClick={() => handleLipColor(j)}
          ></div>
        ))}
      </div>

      <h1>Select Liner Color:</h1>
      <div className="colorList">
        {linerColors.map((color, k) => (
          <div key={k}
            style={{
              background: color,
              border: linerColor === linerColors[k] ? "3px solid var(--color-secondary)" : "",
            }}
            onClick={() => handleLinerColor(k)}
          ></div>
        ))}
      </div>

      <h1>Select Foundation Color:</h1>
      <div className="colorList">
        {foundationColors.map((color, l) => (
          <div key={l}
            style={{
              background: color,
              border: foundationColor === foundationColors[l] ? "3px solid var(--color-secondary)" : "",
            }}
            onClick={() => handleFoundationColor(l)}
          ></div>
        ))}
      </div>

      <h1>Select Eyeshadow Color:</h1>
      <div className="colorList">
        {eyeshadowColors.map((color, m) => (
          <div key={m}
            style={{
              background: color,
              border: eyeshadowColor === eyeshadowColors[m] ? "3px solid var(--color-secondary)" : "",
            }}
            onClick={() => handleEyeshadowColor(m)}
          ></div>
        ))}
      </div>

      <div className="colorTryOn">
        {file !== undefined ? (
          <>
            <img src={fileURL} alt="input" />
            <Button onClick={handleSubmission}>Try Colors</Button>
          </>
        ) : (
          <></>
        )}
        {apiSuccess === true ? (
          <div className="colorOutput">
            <img src={require("../../assets/colorOutput.png")} alt="output" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ColorTryOn;
