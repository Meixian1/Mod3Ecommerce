import React from "react";
import ImageUploader from "../ImageUploader";

const Images = ({ uploadedImages, onImagesUploaded }) => {
  return (
    <div>
      <ImageUploader onImagesUploaded={onImagesUploaded} />
      {uploadedImages && uploadedImages.length > 0 ? (
        <div className="image-container">
          {uploadedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded Image ${index + 1}`}
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          ))}
        </div>
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default Images;
