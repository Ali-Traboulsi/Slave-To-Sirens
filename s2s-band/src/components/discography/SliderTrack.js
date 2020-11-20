import React, {useState} from 'react';
import './slider.scss';
import ReactPlayer from 'react-player';
// import logo from '../../images/slogan-white.png'

const SliderTrack = () => {

    let sliderArr = [
    <ReactPlayer className='react-player-disc' url="https://soundcloud.com/slave-to-sirens/slave-to-sirens"/>
    ,
    <ReactPlayer className='react-player-disc' url="https://soundcloud.com/slave-to-sirens/01-terminal-leeches"/>
    ,
    <ReactPlayer className='react-player-disc' url="https://soundcloud.com/slave-to-sirens/humanesticide"/>
    ,
    <ReactPlayer className='react-player-disc' url="https://soundcloud.com/slave-to-sirens/congenital-evil"/>
    ]

    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        console.log(x);
        // setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
        console.log(x);
    };

    return (

        <div className="wrapper-disc">
           <div className="album-list-disc"> 
                <select className="album-disc" name="Album" id="album">
                    <option value="terminal leaches">Terminal Leaches</option>
                </select>
            </div>

    <div class="player-wrapper-disc">
            <button className="btn-disc" id="goRight" autoFocus onClick={goRight}>
                {/* <img className="logo-right" alt="logo" src={logo}  onClick={goRight} /> */}
            </button>


        <div className="slider-disc">
        {sliderArr.map((item, index) => {
            return(
                <div key={index} className="slide-disc" style={{transform:`translateX(${x}%)`}}>
                    {item}
                </div>
            );
            })}
            </div>
                <button className="btn-disc" onClick={goLeft} id="goLeft"> 
                    {/* <img className="logo-left" alt="logo" src={logo}  onClick={goLeft}/> */}
                </button>
            
        </div>

            <div className="album-info-disc">
                <div className="tracks-info-disc">
                    <div className="right-info-disc">
                        <p className="content-disc">
                            <strong>Release date:</strong>
                            <br/> March 11, 2018</p>
                            <br/>
                            <p className="content-disc"><strong>Recorded at:</strong>
                            <br/> Dream Catcher Studios
                            <br/> (Lebanon)</p>
                            <br/>
                            <p className="content-disc"><strong>Mixed & Mastered at:</strong>
                            <br/> Dyne Engine Studios Italiy)
                            <br/> by Manuele Pesaresi
                        </p>

                    </div>
                    <div class="left-info-disc">
                        <p className="content-disc"> <strong>EP:</strong> Terminal Leeches
                            <br/><strong>Duration:</strong> 19 minutes
                            <br/><strong>Tracks:</strong> 4
                        </p>
                        <br/>
                        <p className="content-disc"><strong>Track List:</strong>
                            <br/>Terminal Leaches
                            <br/>Humanesticide
                            <br/>Slave To sirens
                            <br/>Congenital Evil
                        </p>
                    </div>
                </div>
                <div className="paragraph-info-disc">
                    <p className="content-disc">
                        Terminal Leeches narrates the ideas that the band tries to deliver to its listeners, depicting themes that focus on destructive societies built on hate, war and false religion. Although it is not considered a “concept album”, the songs are strongly related lyrically. Musically however, diversity is what distinguishes every so creating different atmospheres and feelings to the listener.
                    </p>
                    <br/>
                    <p className="content-disc">
                        The overall sound of the EP combines fast paced thrashy riffs with the brutality of death metal, along with strident and aggressive vocals and frequent tempo changes. The addition of acoustic passages and clean vocals that unexpectedly occur give off an atmospheric ambience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SliderTrack;
