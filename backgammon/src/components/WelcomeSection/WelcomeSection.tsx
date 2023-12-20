import './WelcomeSection.css';
import board from './board2.png'

function WelcomeSection() {
  return (
    <div className='welcome-wrapper'>
      <div className='welcome-text'><span>
        University of Washington's <br/>
        Undergraduate <br/>
        Backgammon Club</span></div>
      <div className='welcome-cover'></div>
      <img src={board} className='welcome-img' />
    </div>
  );
}

export default WelcomeSection;