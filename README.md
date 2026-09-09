# 🏥 Patient Dashboard App

A comprehensive healthcare application built with **React Native** and **Firebase** that enables patients to manage appointments, view medical records, and access prescriptions from hospitals.

## 📋 Features

✅ **User Authentication**
- Patient registration and login with Firebase Auth
- Hospital account management
- Persistent sessions with AsyncStorage

✅ **Patient Dashboard**
- View hospital information and timing
- Book appointments with doctors
- View upcoming appointments
- Access medical reports
- View prescriptions

✅ **Appointment Management**
- Book appointments with specific doctors
- Real-time appointment status tracking (pending, confirmed, completed)
- Hospital-side appointment management

✅ **Medical Records**
- Upload and manage medical reports
- Share prescriptions securely
- HIPAA-compliant access controls

✅ **Security**
- Firebase Firestore security rules
- Role-based access control (Patient/Hospital)
- End-to-end encryption support

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekanala2007/patient-dashboard-app.git
   cd patient-dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages**
   ```bash
   npx expo install firebase @react-native-async-storage/async-storage
   ```

4. **Setup Firebase Configuration**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Go to **Project Settings** → **Web App**
   - Copy your Firebase config keys
   - Update `src/config/firebaseConfig.js` with your credentials:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

5. **Setup Firestore Security Rules**
   - In Firebase Console, go to **Firestore Database** → **Rules**
   - Copy content from `firestore.rules` file
   - Publish the rules

6. **Run the application**

   **On your phone (Recommended):**
   ```bash
   npm start
   ```
   Scan the QR code with Expo Go app (iOS) or your phone camera (Android)

   **On Android Emulator:**
   ```bash
   npm run android
   ```

   **On iOS Simulator (Mac only):**
   ```bash
   npm run ios
   ```

## 📁 Project Structure

```
patient-dashboard-app/
├── src/
│   ├── config/
│   │   └── firebaseConfig.js       # Firebase initialization
│   ├── screens/
│   │   ├── LoginScreen.js          # Login page
│   │   ├── RegisterScreen.js       # Registration page
│   │   └── PatientDashboard.js     # Main dashboard
│   └── services/
│       ├── authService.js          # Authentication functions
│       └── appointmentService.js   # Appointment & medical records
├── App.js                          # App navigation
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── firestore.rules                 # Firestore security rules
└── README.md
```

## 🔐 Security Features

- **Firebase Authentication**: Secure email/password authentication
- **Firestore Security Rules**: Role-based access control
- **Data Encryption**: All sensitive data is encrypted in transit
- **Session Persistence**: Secure token storage with AsyncStorage

## 📱 API Reference

### Authentication Service

```javascript
// Register a patient
registerUser(email, password, 'patient', {
  name: 'John Doe',
  age: 30,
  phone: '+1234567890'
})

// Login
loginUser(email, password)

// Logout
logoutUser()
```

### Appointment Service

```javascript
// Book appointment
bookAppointment(patientId, patientName, hospitalId, doctorName, date, time)

// Get appointments (for patient or hospital)
getAppointments('patientId', patientId)

// Upload medical record
uploadMedicalRecord(patientId, hospitalId, 'report', fileUrl, notes)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 📧 Support

For support, please open an issue on GitHub or contact us at support@patientdashboard.app

## 🎯 Future Enhancements

- [ ] Video consultation feature
- [ ] Telemedicine integration
- [ ] Prescription delivery tracking
- [ ] Health insurance integration
- [ ] Multilingual support
- [ ] Push notifications
- [ ] Payment gateway integration

---

**Made with ❤️ by Abhishek Anala**
