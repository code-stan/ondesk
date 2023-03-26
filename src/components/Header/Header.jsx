/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Nav from "./Nav";
import HeaderContent from "./HeaderContent";

// LOOP PROPS
export default function Header() {
    // USE STATE TO ENABLE NAV ITEMS
    const body = document.body;
    const [isOpen, setIsOpen] = React.useState(false);
    
    console.log(isOpen)
    function openMenu() {
        setIsOpen(!isOpen)
    }

    // USE EFFECT
    React.useEffect(() => {
        if (window.innerWidth >= 880) {
            setIsOpen(true)
        }

    }, [])
    if(isOpen){
        body.classList.add("openedMenu")
    }
    else{
        body.classList.remove("openedMenu")

    }

    return (
        <header>
            <section className="header">
                <div className="web-logo">
                    <img src="../Assets/Logo.svg" alt="Ondeck Logo" draggable="false" />
                </div>

                {/* NavBar */}
                {isOpen && <Nav/>}
                {isOpen && <div className="overlay"></div>}

                <button className={`menu ${isOpen && `opened`}`} role="menu" onClick={openMenu}>
                    <img src={`../Assets/${isOpen?"Close":"Menu"}.svg`} alt="" />
                </button>
            </section>
            <HeaderContent/>
        </header>
    )
}
