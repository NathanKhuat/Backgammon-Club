import './WelcomeSection.css';
import board from './board2.png'

function WelcomeSection() {
  return (
    <div className='welcome-wrapper'>
      <span className='welcome-text'>
        University of Washington's <br/>
        Undergraduate <br/>
        Backgammon Club
      </span>
      <div className='welcome-cover'>
      </div>
      <img src={board} className='welcome-img' />
      <div className='about1'></div>
      <div className='about2'>
        <span className='statement-text'>
          We are Washington's Premier Backgammon society for casual & competitive Backgammon
        </span>
      </div>
    </div>
  );
}

export default WelcomeSection;