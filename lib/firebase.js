import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  updateDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!getApps().length) initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

export async function registerUser(email, password, name = "") {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCred.user;
  await setDoc(doc(db, "users", user.uid), {
    email,
    name,
    hasAccess: false,
    createdAt: new Date().toISOString()
  });
  return user;
}

export async function loginUser(email, password) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export async function getUserDoc(uid) {
  const d = await getDoc(doc(db, "users", uid));
  return d.exists() ? d.data() : null;
}

export async function submitPayment(uid, name, method, txnId, courseId = "default-course") {
  const paymentsRef = collection(db, "payments");
  const docRef = await addDoc(paymentsRef, {
    uid,
    name,
    method,
    txnId,
    courseId,
    status: "pending",
    createdAt: new Date().toISOString()
  });
  return docRef.id;
}

export async function fetchPayments() {
  const paymentsRef = collection(db, "payments");
  const q = query(paymentsRef, orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function approvePayment(paymentId, uid) {
  await updateDoc(doc(db, "payments", paymentId), { status: "approved", approvedAt: new Date().toISOString() });
  await updateDoc(doc(db, "users", uid), { hasAccess: true });
}

export async function rejectPayment(paymentId) {
  await updateDoc(doc(db, "payments", paymentId), { status: "rejected", reviewedAt: new Date().toISOString() });
}
