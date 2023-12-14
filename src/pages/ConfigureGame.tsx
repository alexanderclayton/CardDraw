import React, { useState } from "react";
import { storage, db } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

export const ConfigureGame: React.FC = () => {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imageType, setImageType] = useState<string>("small");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImageUpload(files[0]);
    }
  };

  const displayType = () => {
    console.log(imageType);
    console.log(typeof imageType);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setImageType(event.target.value);
  };

  const uploadImage = async () => {
    if (imageUpload == null) return;
    try {
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      await uploadBytes(imageRef, imageUpload);

      const downloadUrl = await getDownloadURL(imageRef);

      const imageCollection = collection(db, imageType);
      await addDoc(imageCollection, {
        imageUrl: downloadUrl,
      });
      console.log("uploaded image");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error("error uploading image", error.message);
      }
      console.error("unknown error");
    }
  };

  return (
    <div>
      <label htmlFor="type">card type:</label>
      <select name="type" id="type" onChange={handleTypeChange}>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="habitat">habitat</option>
        <option value="detail">detail</option>
      </select>
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage}>Upload Image</button>
      <button onClick={displayType}>type</button>
    </div>
  );
};
