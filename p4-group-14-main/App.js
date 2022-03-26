import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Welcome from './screens/onboarding/welcome';
import Profile from './screens/profilePage/profile'
import Resources from './screens/resourcesPage/resources'
import Dashboard from './screens/dashboard'

export default function App() {
  const [onboard, toggleOnboard] = useState(false);
  let challengeList = ['ADHD', 'Slow Processing', 'Dyslexia', 'Non-Verbal', 'Dyscalculia', 'Dysgraphia']
  const initialState = {name: '', gender: '', year: '', major: '', challenges: challengeList.map((c) => ({name: c, clicked: false})), email: '', username: '', password: ''};
  const [userProfile, setUserProfile] = useState({name: '', gender: '', year: '', major: '', challenges: challengeList.map((c) => ({name: c, clicked: false})), email: '', username: '', password: ''});

  return (
    <SafeAreaView>
      {onboard ? (<Welcome userProfile={userProfile} setUserProfile={setUserProfile} toggleOnboard={toggleOnboard} />) : <Dashboard userProfile={userProfile} toggleOnboard={toggleOnboard}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
