import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
} from "firebase/auth";
import { app, supabase } from "../firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

const loginSupabase = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error.message);
    } else {
      return data.session?.access_token;
    }
  } catch (e) {
    console.log(e);
  }
}

const createAccountSupabase = async (nome: string, telefone: string, email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error.message);
    } else {
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}

// const login = async (email: string, password: string) => {
//   try {
//     const data = await signInWithEmailAndPassword(auth, email, password);
//     const user = data.user.getIdToken();
//     return user;
//   } catch (e) {
//     console.log(e);
//   }
// };

// const createAccount = async (
//   nome: string,
//   telefone: string,
//   email: string,
//   password: string
// ) => {
//   try {
//     const create = await createUserWithEmailAndPassword(auth, email, password);
//     const user = create.user;
//     await addDoc(collection(db, "tb_usuario"), {
//       tb_nome: nome,
//       tb_telefone: telefone,
//       tb_email: email,
//       tb_uid: user.uid,
//     });
//     if (user) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

const forgotPasswordSupabase = async (email: string) => {
  try {
    let { data, error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) {
      console.log(error.message);
    } else {
      return true;
    }
    return true;
  } catch (e) {
    return false;
  }
};

const logoutSupabase = async () => {
  try {
    let { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error.message);
    } else {
      return true;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { forgotPasswordSupabase, logoutSupabase, loginSupabase, createAccountSupabase };
