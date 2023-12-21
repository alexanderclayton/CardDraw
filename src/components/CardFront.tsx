import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

interface CardFrontProps {
  cardType: string;
}

export const CardFront: React.FC<CardFrontProps> = ({ cardType }) => {
  const [cardImage, setCardImage] = useState<string>("");

  useEffect(() => {
    const fetchRandomCardImageUrl = async () => {
      try {
        const cardsCollection = collection(db, cardType);
        const cardsQuery = query(cardsCollection);
        const cardsSnapshot = await getDocs(cardsQuery);

        if (!cardsSnapshot.empty) {
          // Get a random index
          const randomIndex = Math.floor(Math.random() * cardsSnapshot.size);

          // Get the document data at the random index
          const randomCardData = cardsSnapshot.docs[randomIndex].data();
          setCardImage(randomCardData.imageUrl);
        } else {
          console.error("No cards found in the collection");
        }
      } catch (error) {
        console.error(
          "Error fetching random card image URL:",
          (error as FirebaseError).message
        );
      }
    };

    fetchRandomCardImageUrl();
  }, []);

  if (!cardImage) {
    // Handle loading state or display a placeholder **Add Static Wildcard Here
    return <div>Loading...</div>;
  }

  return (
    <img
      src={cardImage}
      alt="small card front"
      className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
    />
  );
};
