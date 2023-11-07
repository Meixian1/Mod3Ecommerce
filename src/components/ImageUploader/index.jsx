import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = ({ onImagesUploaded }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const maxImageCount = 16; // Define the maximum image count

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxImageCount = 16;
  
    if (files.length > 0) {
      if (selectedImages.length + files.length > maxImageCount) {
        console.error('You can upload a maximum of 16 images.');
        return;
      }
  
      const uploadedImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (validImageTypes.includes(file.type)) {
          // Use the Blob constructor to create a Blob from the File object
          const blob = new Blob([file], { type: file.type });
          const imageUrl = URL.createObjectURL(blob); // Convert Blob to URL
          uploadedImages.push(imageUrl);
        } else {
          console.error('Invalid file selected:', file.name);
        }
      }
  
      // Update the selectedImages state
      setSelectedImages(uploadedImages);
  
  
      try {
        setUploading(true);
        const formData = new FormData();
        for (let i = 0; i < uploadedImages.length; i++) {
          formData.append('images', uploadedImages[i]);
        }

        // Rest of your code for uploading to the server
      } catch (error) {
        console.error('There was an error sending the request:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  // Rest of your component code

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        disabled={uploading || selectedImages.length >= maxImageCount}
      />
      {uploading && <p>Uploading images...</p>}
      {selectedImages.map((image, index) => (
        <img
          key={index}
          src={URL.createObjectURL(image)}
          alt={`Uploaded Image ${index + 1}`}
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
      ))}
      {selectedImages.length >= maxImageCount && (
        <p>You have reached the maximum limit of 16 images.</p>
      )}
    </div>
  );
};

export default ImageUploader;
