import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User
} from 'firebase/auth';
import {
	collection,
	CollectionReference,
	doc,
	DocumentReference,
	getFirestore,
	Timestamp
} from 'firebase/firestore';

import { Winner } from '../hooks/useGame';

// Initialize Firebase
initializeApp({
	apiKey: 'AIzaSyBuQoNYMQj-K2Co9o5elG_NtDFE6PD8xJM',
	authDomain: 'task-08-931c0.firebaseapp.com',
	projectId: 'task-08-931c0',
	storageBucket: 'task-08-931c0.appspot.com',
	messagingSenderId: '503366499212',
	appId: '1:503366499212:web:858a49616a121a97caf4a9'
});

// Authentication
const auth = getAuth();

// Sign up handler
export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

// Sign in handler
export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

// Sign out handler
export const signOut = () => authSignOut(auth);

// Subscribe to auth state changes
export const onAuthChanged = (callback: (u: User | null) => void) =>
	onAuthStateChanged(auth, callback);

// Firestore
const db = getFirestore();

// Reviews collection
export type Review = {
	by: string;
	stars: number;
	description?: string;
};

export const reviewsCollection = collection(
	db,
	'reviews'
) as CollectionReference<Review>;

export const reviewsDocument = (id: string) =>
	doc(db, 'reviews', id) as DocumentReference<Review>;

// Matches collection
export type Match = {
	by: string;
	winner: Winner;
	date: Timestamp;
};

export const matchesCollection = collection(
	db,
	'matches'
) as CollectionReference<Match>;
