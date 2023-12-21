import './WelcomeSection.css';
import board from './board2.png'

function WelcomeSection() {
  return (
    <div className='welcome-wrapper'>
      <span className='welcome-text'>
        University of Washington's 
        Undergraduate <br/>
        Backgammon Club
      </span>
      <div className='welcome-cover'></div>
      <img src={board} className='welcome-img' />
    </div>
  );
}

export default WelcomeSection;