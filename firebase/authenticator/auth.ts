import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const auth = getAuth(app);
const db = getFirestore(app);

const login = async (email: string, password: string) => {
    try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        const user = data.user;
        return user;
    } catch (e) {
        console.log(e);
    }
}

const createAccount = async (nome: string, telefone: string, email: string, password: string) => {
    try {
        const create = await createUserWithEmailAndPassword(auth, email, password);
        const user = await create.user.getIdToken();
        await addDoc(collection(db, "tb_usuario"), {
            tb_nome: nome,
            tb_telefone: telefone,
            tb_email: email
        })
        return user;
    } catch (e) {
        console.log(e);
    }
}

const forgotPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (e) {
        console.log(e);
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    } catch (e) {
        console.log(e);
    }
}

export { login, createAccount, forgotPassword, logout };