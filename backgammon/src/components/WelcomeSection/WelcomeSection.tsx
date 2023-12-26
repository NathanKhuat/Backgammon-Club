import './WelcomeSection.css';
import board from './board2.png'

function WelcomeSection() {
  return (
    <div className='welcome-wrapper'>
      <span className='welcome-text trigger1 animate fadeLeft'>
        University of Washington's <br/>
        Undergraduate <br/>
        Backgammon Club
      </span>
      <div className='welcome-cover trigger1 animate fadeIn'>
      </div>
      <img src={board} className='welcome-img trigger3 animate fadeIn' />
      <div className='about1 trigger4 animate fadeLeftSpecial'></div>
      <span className='about-text trigger5 animate fadeIn'>About</span>
      <div className='about-bar trigger5 animate fadeIn'></div>
      <span className='about-message trigger5 animate fadeIn'>
        Welcome to the University of Washington Backgammon Club - 
        a vibrant community where students of all skill levels come 
        together to enjoy the strategic excitement of backgammon. Join 
        us for inclusive play, friendly competition, and a shared 
        passion for the game!</span>
      <div className='about2 trigger4 animate fadeLeftSpecial'></div> 
      <span className='statement-text trigger5 animate fadeIn'>
        We are Washington's Premier Backgammon Society for
        casual & competitive Backgammon
      </span>
    </div>
  );
}

export default WelcomeSection;