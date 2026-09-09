import { auth, db } from '../config/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

/**
 * Register a User (Patient or Hospital)
 */
export const registerUser = async (email, password, role, extraData) => {
  try {
    // 1. Create Auth account
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    // 2. Prepare user profile document based on role
    const userProfile = {
      uid,
      email,
      role, // 'patient' or 'hospital'
      createdAt: new Date().toISOString(),
      ...extraData, // patient: { name, age, phone } | hospital: { hospitalName, address, phone }
    };

    // 3. Save profile data in Firestore under 'users' collection
    await setDoc(doc(db, 'users', uid), userProfile);

    // 4. If hospital, also add to a public 'hospitals' collection for easy patient search
    if (role === 'hospital') {
      await setDoc(doc(db, 'hospitals', uid), {
        hospitalId: uid,
        name: extraData.hospitalName,
        address: extraData.address,
        phone: extraData.phone,
        departments: extraData.departments || ['General'],
      });
    }

    return { success: true, user: userProfile };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Login User & Fetch Profile Role
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    // Fetch user role from Firestore
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return { success: true, profile: userDoc.data() };
    } else {
      throw new Error('User profile data not found.');
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Sign Out
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
