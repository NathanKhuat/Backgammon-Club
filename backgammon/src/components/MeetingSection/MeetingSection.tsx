import './MeetingSection.css';
import dice from './dice.png'

function MeetingSection() {
  return (
    <div className='wrapper trigger1 animate fadeIn'>
      <div className='text'>
        <span className='header-text'>Meetings</span> <br/>
        <span className='meeting-text'>
          Weekly Meetings on Tuesdays <br/>
          Big Time Brewery @5 <br/>
          Quarterly tournaments @ somewhere</span>
      </div>
      <div className='media'>
        <img src={dice} className="img"></img>
        <button className="btn">Join our Discord!</button>
      </div>
    </div>
  );
}

export default MeetingSection;
