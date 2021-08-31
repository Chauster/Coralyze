import { Link } from "react-router-dom";
import '../styles/pagenotfound.css';
import pageredirect from "../images/404_v2.svg";
import { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from 'gsap';
const PageNotFound = () => {

let errorimages = useRef(null);
let tl = new TimelineLite();
useEffect(() => {
    // Image Variable
    const errorImage = errorimages.firstElementChild;
    // Image Animation
    tl.from(errorImage, 1.2, {y: 280, ease:Power3.easeOut}, 'Start')
      .from(errorImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
})


    return ( 
        <div class="error-container">
            <div class="error-content">
                <h2>That wasnt supposed to happen... unless you have a time machine, this page doesnt exist yet.</h2>
            </div>
            <div class="error-link">
                <Link to='/'>Back to homepage</Link>
            </div>
            <div class="error-image" ref={element => errorimages = element}>
                <img src={pageredirect} alt="404" className="404-img" height="400px" width="1024px"></img>
            </div>
            
        </div>
     );
}
 
export default PageNotFound;

