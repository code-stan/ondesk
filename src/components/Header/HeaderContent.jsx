import { React, useState} from "react";

export default function HeaderContent() {
    const [playAudio, setPlayAudio] = useState(true)
    const audio = document.querySelector("audio");
    function playVoice() {
        setPlayAudio(!playAudio)
        if(playAudio) {
            audio.play()
        }
        else {
            audio.pause()
        }
    }

    return (
        <section className="headerContent">

            {/* LEFT SECTION */}
            <section className="headerContent__left">
                <div className="hc__head">
                    <h1>
                        Ondeck is your remote <span>conference calling tool</span>
                    </h1>
                    <p className="clr-gray-text">
                        Ondeck is a service that allows you to create beautiful, online, and encrypted video calls for you and your remote team.
                    </p>
                    <button className="try-btn">
                        Try for free
                    </button>
                </div>
                <div className="hc__rating">
                    <p className="clr-gray-text">5.0 Rating based on reviews from:
                        <img src="../Assets/Capterra Logo.svg" alt="" />
                        <img src="../Assets/AlternativeTo Logo.svg" alt="" />
                    </p>
                </div>
            </section>

            {/* RIGHT SECTION */}
            <section className="headerContent__right user">
                <button className="user__option__button dark-bg">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                </button>
                <div className={`user__image ${!playAudio && `animation`}`}>
                    <img className= "user__profile" src="./Assets/Sara profile.png" alt="Sara Johnson" draggable = "false" />
                </div>
                <div className="user__bottom">
                    <div className="user__audio">
                        <img className="user__audio | dark-bg user__border" src={`./Assets/${playAudio?`mute`:`mic`}.svg`} alt={`${playAudio ? `Muted` : `Mic`}`} onClick={playVoice} />
                        <audio src="./Assets/sara's voice.mp3"></audio>
                    </div>
                    <div className="user__name | dark-bg user__border">Sara Johnson</div>
                </div>
            </section>
        </section>
    )
}