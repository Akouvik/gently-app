import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  initializeAuth,
  UserCredential,
  getReactNativePersistence,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKTDulMkb97XjQQluYGGUdiad5errPVC4',
  authDomain: 'gently-fb055.firebaseapp.com',
  projectId: 'gently-fb055',
  storageBucket: 'gently-fb055.appspot.com',
  appId: '1:604832811246:ios:dff394adb979987c0e4bff',
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

// Sign in with Google Popup
export const signInWithGooglePopup = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

// Sign in with Google Redirect
export const signInWithGoogleRedirect = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

// Send Password Reset Email
export const sendRestEmail = async (
  email: string
): Promise<{ state: string; status: string }> => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { state: 'Email Sent', status: 'Success' };
  } catch (error) {
    return { state: 'Email not Sent', status: 'Error' };
  }
};

// Add Collection and Documents
export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

// Get Categories and Documents
export const getCategoriesAndDocuments = async (): Promise<
  Record<string, any>
> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as Record<string, any>);

  return categoryMap;
};

// Create User Document from Auth
export const createUserDocumentFromAuth = async (
  userId: string,
  additionalInformation = {}
): Promise<void> => {
  if (!userId) return;
  const userDocRef = doc(db, 'Users', userId);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        date: createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('Error createUserDocumentFromAuth', error);
    }
  }
};

// Create Auth User with Email and Password
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
  loginUser: UserCredential | null = null
): Promise<UserCredential> => {
  if (!email || !password) return null;
  const user =
    loginUser || (await createUserWithEmailAndPassword(auth, email, password));

  const actionCodeSettings = {
    url: 'https://trygently.com',
    iOS: {
      bundleId: 'com.gently.gently',
    },
    android: {
      packageName: 'com.gently.gently',
      installApp: true,
      minimumVersion: '12',
    },
    handleCodeInApp: true,
  };

  try {
    await sendEmailVerification(auth.currentUser!, actionCodeSettings);
    console.log('Verification email sent.');
  } catch (error) {
    console.log('Error occurred. Inspect error.code', error);
  }

  return user;
};

// Sign In User with Email and Password
export const siginInUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  if (!email || !password) return null;
  const loginValue = await signInWithEmailAndPassword(auth, email, password);
  console.log('loginValue'), email, password, loginValue;

  return loginValue;
};

// Sign Out User
export const SignOutUser = async (): Promise<void> => {
  await signOut(auth);
};
