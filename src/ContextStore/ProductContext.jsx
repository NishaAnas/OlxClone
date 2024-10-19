import { createContext, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { AuthContext } from "./AuthContext";

// Create Product Context
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const firestore = getFirestore(); 
  const storage = getStorage(); 

  const addProduct = async (name, category, price, description, image) => {

    if (!user) {
        console.error("User is not authenticated.");
        return; 
      }
    
    try {
      const date = new Date().toDateString();
      const storageRef = ref(storage, `/image/${image.name}`);

      // Upload image to Firebase storage
      const uploadResult = await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(uploadResult.ref); 

      // Add a new document to the "products" collection
      const productDetails = {
        name,
        category,
        price,
        description,
        url: imageUrl, // URL of the uploaded image
        userId: user.uid, // The logged-in user's ID
        createdAt: new Date().toISOString(), // Timestamp
    };

    // Add the product details to the Firestore collection
    await addDoc(collection(firestore, "products"), productDetails);

      return "Product added successfully";
    } catch (error) {
      console.error("Error adding product:", error);
      throw new Error("Failed to add product.");
    }
  };

  return (
    <ProductContext.Provider value={{ addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for ProductContext
export const useProduct = () => {
  return useContext(ProductContext);
};
