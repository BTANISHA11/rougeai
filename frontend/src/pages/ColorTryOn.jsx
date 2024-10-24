import React, { useState } from "react";
import "./styles/ColorTryOn.css"; // Make sure this file exists for styles

const hairColors = [
  "#aa8866",
  "#debe99",
  "#241c11",
  "#4f1a00",
  "#9a3300",
  "#5a3214",
  "#505050",
  "#11642f",
  "#c2a070",
  "#b68a67",
];

const lipColors = [
  "#840016",
  "#3A4763",
  "#D53763",
  "#CC0000",
  "#BF8445",
  "#DAA074",
  "#C0428A",
  "#642209",
  "#E55E58",
  "#EA6770",
];

const ColorTryOn = () => {
  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();
  const [apiSuccess, setApiSuccess] = useState(false);
  const [hairColor, setHairColor] = useState();
  const [lipColor, setLipColor] = useState();

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile));
    console.log(selectedFile); // Log the selected file
  };

  const handleHairColor = (i) => {
    setHairColor(hairColors[i]);
  };

  const handleLipColor = (j) => {
    setLipColor(lipColors[j]);
  };

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("haircolor", hairColor);
    console.log("Selected Hair Color:", hairColor);
    formData.append("lipcolor", lipColor);
    console.log("Selected Lip Color:", lipColor);

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
          <div
            key={i}
            style={{
              background: color,
              border:
                hairColor === hairColors[i]
                  ? "3px solid var(--color-secondary)"
                  : "",
            }}
            onClick={() => handleHairColor(i)}
          ></div>
        ))}
      </div>
      <h1>Select Lipstick Color:</h1>
      <div className="colorList">
        {lipColors.map((color, j) => (
          <div
            key={j}
            style={{
              background: color,
              border:
                lipColor === lipColors[j]
                  ? "3px solid var(--color-secondary)"
                  : "",
            }}
            onClick={() => handleLipColor(j)}
          ></div>
        ))}
      </div>

      <div className="colorTryOn">
        {file && (
          <>
            <img src={fileURL} alt="input" />
            <button onClick={handleSubmission}>Try Colors</button>
          </>
        )}
        {apiSuccess && (
          <div className="colorOutput">
            <img src={require("../assets/colorOutput.png")} alt="output" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorTryOn;
