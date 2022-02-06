import React from 'react';
import Header from '../components/Header';
import "./Home.css"
import {IoMdPlay} from "react-icons/io";
import {MdPause} from "react-icons/md";
function Home() {

    const [played,setPlayed] = React.useState(false);



    

    const handlePlay = ()=>{
        const video = document.querySelector('.video_hero');
        video.play();
        setPlayed(true);
    }
    const handlePause = ()=>{
        const video = document.querySelector('.video_hero');
        video.pause();
        setPlayed(false);
    }
  return <div className="home">
            <div className="hero">
                <img src="/hero_image.png" alt="hero" />
                <Header/>
            </div>

            <div className="home-screen-two">
                <div className="home-screen-two-image1">
                    <img src="/Red_Coat.png" alt="red_coat" />
                </div>

                <div className="home-screen-two-content">
                    <h2>Special Photography Studio Based in Berlin, Germany</h2>
                    <p>Always taking great pleasure in the work we do, we find satisfaction in the simple acts of thinking and making. Since 2005, we’ve worked to build strategies and craft solutions for our collaborators, applying reason and rationality to the process of design.</p>
                    <a href="#about" className="about-link">About us <img src="/arrow_long.svg" alt="arrow-icon" /></a>
                </div>

                <div className="home-screen-two-image2">
                    <img src="/red_coat_gray.png" alt="gray_coat" />
                </div>
            </div>

            <div className="home-screen-three">
                <div className="home-screen-three-body">
                    <div className="home-screen-three-content">
                        <div className="home-screen-three-content-top">
                            <p>03</p>
                        </div>
                        <div className="home-screen-three-content-bottom">
                            <p>Featured Project</p>
                            <h3 className='home-scren-three-title'>Project title</h3>
                            <p className='home-scren-three-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#view" className="view_project_btn">View Project <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z" fill="black"/>
</svg>
</a>
                        </div>
                    </div>
                    <div className="home-screen-three-image">
                        <img src="/white_tshirt_women.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="home-screen-four">
                {/* <img src="/video_thumb.png" alt="" /> */}
                <video src="/video_hero.mp4" className='video_hero' loop onClick={!played?handlePlay:handlePause}></video>
                <div className="home-screen-content">
                    <p className="screen-number">04</p>
                    <p>Featured Project</p>
                    <h2>Project title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#view" className="view_project_btn">View Project <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z" fill="black"/>
</svg>
</a>
                </div>

                <div className="video-controls">
                    {/* <div className="buttons-wrapper">
                        <button onClick={!played?handlePlay:handlePause}>{!played?"Play":"Pause"}</button>
                    </div> */}

                    <button className="play-pause-btn" onClick={!played?handlePlay:handlePause}>
                       {!played? <IoMdPlay/>:<MdPause/>}
                    </button>
                </div>
            </div>

            <div className="home-screen-five">
                <div className="home-screen-five-header">
                    <p>Featured Project</p><span className="screen-number">05</span>
                </div>

                <div className="home-screen-five-body">
                    <div className="home-screen-five-content">
                        <h3>Project title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a href="#view" className="view_project_btn">View Project <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z" fill="black"/>
</svg>
</a>
                    </div>
                    <div className="home-screen-five-image">
                        <img src="/men-shirt.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="home-screen-six">
                <div className="home-screen-six-left">
                    <div className="home-screens-size-left-header">
                        <p>04</p>
                        <p>Featured Project</p>
                    </div>

                    <div className="home-screen-six-image">
                        <img src="/shorts_purple.png" alt="" />
                    </div>

                    <div className="home-screen-six-left-footer">
                        <h3>Ordinary Challenge</h3>
                        <p>Oridnary is a Gothenburg-based creative development studio. Through technology and design they differentiate artists, creatives and brands to help them break through the noise. Oridnary likes to challenge the ordinary.</p>
                        <a href="#view" className="view_project_btn">View Project <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z" fill="black"/>
</svg>
</a>
                    </div>
                </div>

                <div className="home-screen-six-right">
                    <div className="home-screen-slider">
                        <img src="/group_photo.png" alt="" />
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-body">
                    <div className="footer-copyright">
                        <p>© 2021 - ITERVIEW / All Rights Reserved</p>
                    </div>
                    <div className="footer-links">
                        <div className="links-wrapper">
                            <span>Find us online</span>
                            <div className="links-footer">
                                <a href="#insta">Instagram</a>
                                <a href="#linkedin">Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
         </div>;
}

export default Home;
