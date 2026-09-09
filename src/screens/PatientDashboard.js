import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function PatientDashboard({ navigation }) {
  const [hospitalInfo] = useState({
    name: "City Care General Hospital",
    address: "123 Healthcare Ave, Medical District",
    timing: "24/7 Emergency | OPD: 8:00 AM - 8:00 PM",
    phone: "+1 (555) 019-2834"
  });

  const [appointments] = useState([
    { id: '1', doctor: 'Dr. Sarah Smith (Cardiology)', date: 'Oct 24, 2026', time: '10:30 AM', status: 'Confirmed' }
  ]);

  const handleBookAppointment = () => {
    Alert.alert('Book Appointment', 'Appointment booking feature coming soon!');
  };

  const handleViewReports = () => {
    Alert.alert('Medical Reports', 'Your medical reports will appear here');
  };

  const handleViewPrescriptions = () => {
    Alert.alert('Prescriptions', 'Your prescriptions will appear here');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Patient Dashboard</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => Alert.alert('Logout', 'Logged out successfully')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Hospital Overview */}
      <View style={styles.card}>
        <Text style={styles.hospitalName}>{hospitalInfo.name}</Text>
        <Text style={styles.subText}>{hospitalInfo.address}</Text>
        <Text style={styles.subText}>🕒 {hospitalInfo.timing}</Text>
        <Text style={styles.subText}>📞 {hospitalInfo.phone}</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionGrid}>
        <TouchableOpacity style={styles.actionBtn} onPress={handleBookAppointment}>
          <Text style={styles.btnText}>📅 Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handleViewReports}>
          <Text style={styles.btnText}>📑 Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handleViewPrescriptions}>
          <Text style={styles.btnText}>💊 Prescriptions</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Appointments */}
      <Text style={styles.sectionHeader}>Upcoming Appointments</Text>
      {appointments.length > 0 ? (
        appointments.map((item) => (
          <View key={item.id} style={styles.appointmentCard}>
            <Text style={styles.doctorText}>{item.doctor}</Text>
            <Text style={styles.appointmentDetails}>{item.date} at {item.time}</Text>
            <Text style={styles.status}>✓ Status: {item.status}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>No upcoming appointments</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  logoutBtn: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hospitalName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionBtn: {
    backgroundColor: '#1a73e8',
    padding: 12,
    borderRadius: 8,
    flex: 0.3,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  appointmentCard: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
  },
  appointmentDetails: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  status: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 4,
    fontSize: 12,
  },
  noDataText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    marginVertical: 20,
  },
});
