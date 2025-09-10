import {
    signOut,
    signInWithPopup,
    GoogleAuthProvider
    , createUserWithEmailAndPassword,
    signInWithEmailAndPassword, getAuth
} from 'firebase/auth';
import type {LoginData} from "../utils/app-types.ts";
import {auth} from "../configurations/firebase-config.ts";


const loginWithEmail = async (data: LoginData) => {
    const result = await signInWithEmailAndPassword(auth, data.login, data.password);
    const user = result.user;
    return user.email;
}
const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user.email;
}
export const login = async (data?: LoginData) => {
    return data ? await loginWithEmail(data) : await loginWithGoogle();
}
export const logout = async () => {
    await signOut(auth);
}

export const registerWithEmailPass = async (data: LoginData) => {
    const result = await createUserWithEmailAndPassword(auth, data.login, data.password);
    return result;
};

export const getUserName = async (): Promise<string | null> => {
    const auth = getAuth();
    const user = auth.currentUser;

    return user?.displayName ?? null;
};
