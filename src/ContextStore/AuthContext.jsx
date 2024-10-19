import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/fireBaseConfig"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,  signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currUser) => {
            if (currUser) {
                const updatedUser = {
                    uid: currUser.uid,
                    email: currUser.email,
                    displayName: currUser.displayName,
                };
                console.log("Current User:", updatedUser); 
                setUser(updatedUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe(); 
    }, []);

    const Login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const loggedInUser = userCredential.user;
            // After login, set the user with their displayName
            setUser({
                uid: loggedInUser.uid,
                email: loggedInUser.email,
                displayName: loggedInUser.displayName || "Guest", 
            });
        } catch (error) {
            console.error("Login error: ", error);
            throw error;
        }
    };

    const Signup = async (email, password, displayName) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName });
            console.log("Display Name Set:", displayName);
            // Set user state after signup
            setUser({
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName,
            });
        } catch (error) {
            console.error("Signup error: ", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth); 
            setUser(null);
        } catch (error) {
            console.error("Logout error: ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, Login, Signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
