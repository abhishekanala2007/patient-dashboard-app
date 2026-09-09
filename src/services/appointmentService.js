import { db } from '../config/firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';

/**
 * Patient: Book Appointment
 */
export const bookAppointment = async (
  patientId,
  patientName,
  hospitalId,
  doctorName,
  date,
  time
) => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), {
      patientId,
      patientName,
      hospitalId,
      doctorName,
      date,
      time,
      status: 'pending', // 'pending', 'confirmed', 'completed', 'cancelled'
      createdAt: serverTimestamp(),
    });
    return { success: true, appointmentId: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Fetch Appointments (Works for Patient or Hospital filter)
 */
export const getAppointments = async (idField, idValue) => {
  try {
    // idField can be 'patientId' or 'hospitalId'
    const q = query(
      collection(db, 'appointments'),
      where(idField, '==', idValue)
    );
    const querySnapshot = await getDocs(q);
    const appointments = [];
    querySnapshot.forEach((doc) => {
      appointments.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: appointments };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Hospital: Upload Medical Record / Prescription Link
 */
export const uploadMedicalRecord = async (
  patientId,
  hospitalId,
  type,
  fileUrl,
  notes
) => {
  try {
    const docRef = await addDoc(collection(db, 'medical_records'), {
      patientId,
      hospitalId,
      type, // 'report' or 'prescription'
      fileUrl,
      notes,
      uploadedAt: serverTimestamp(),
    });
    return { success: true, recordId: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
