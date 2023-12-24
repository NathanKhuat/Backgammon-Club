import './WinnerSection.css';
import playing from "./playing.png"

function WinnerSection() {
  return (
    <div className='winner-wrapper'>
      <div className='winner-box'>
        <div className='winner-text-wrapper'>
          <span className='winners-text1'>Our Backgammon</span>
          <span className='winners-text2'> Community </span>
        </div>
        <div className='community-message'>
        <span>
            Within the UW Backgammon Club, our competitive edge 
            fuels a constant drive to improve. Every match is a 
            chance to up our game and refine our moves. But it's 
            not all about strategy; our thriving community turns 
            our game nights into a mix of friendly rivalry and 
            good times.
          </span>
        </div>
        {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={playing} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={playing} alt="Second slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div> */}
        </div>
    </div>
  );
}

export default WinnerSection;