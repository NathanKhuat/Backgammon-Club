import './WinnerSection.css';
import playing from "./playing.png"

function WinnerSection() {
  return (
    <div className='winner-wrapper'>
      <div className='winner-box'>
        <span className='winners-text1'>Our Backgammon</span>
        <span className='winners-text2'> Winners</span>
        {/* <img src={playing} className='playing-img' /> */}
      </div>
    </div>
  );
}

export default WinnerSection;