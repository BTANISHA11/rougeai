import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/ImageEditor.css'; // Import the CSS file
import img6 from "../img/gifs (6).svg"

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (image) {
          setPreviousImage(image); // Store the previous image
        }
        setImage(reader.result);
        setShowComparison(false); // Reset comparison when a new image is uploaded
      };
      reader.readAsDataURL(file);
    }
  });

  const handleAnalyze = () => {
    setShowComparison(true); // Show comparison when analyze button is clicked
  };

  return (
    <div className="image-editor">
      <div {...getRootProps()} className="dropzone">
        <img src={img6} className='uploadimg' alt="Upload" />
        <input {...getInputProps()} />
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <p className="dropzone-text">Drag & drop an image here, or click to select one</p>
        )}
      </div>

      {image && (
        <button className="analyze-button" onClick={handleAnalyze}>
          Analyze
        </button>
      )}

      {showComparison && previousImage && (
        <div className="comparison-section">
          <h3>Comparison</h3>
          <div className="comparison-images">
            <div>
              <h4>Previous Image</h4>
              <img src={previousImage} alt="Previous" className="comparison-image" />
            </div>
            <div>
              <h4>New Image</h4>
              <img src={image} alt="Current" className="comparison-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
