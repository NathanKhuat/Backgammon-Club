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
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
