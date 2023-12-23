import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import MeetingSection from './components/MeetingSection/MeetingSection';
import WinnerSection from './components/WinnerSection/WinnerSection';
import FooterSection from './components/FooterSection/FooterSection';
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <WelcomeSection></WelcomeSection>
      <MeetingSection></MeetingSection>
      <WinnerSection></WinnerSection>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
