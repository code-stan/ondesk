import React from "react";
import data from "../data";

//MAP
function NavMobileContent(props) {
    return (
        <li className={`${props.nmcClass} nmc`}>
            <div className={`${props.nmcClass}__header nmc__header`}>
                <img src={props.img} alt="" />
                <h3>
                    {props.title}
                </h3>
            </div>
            <p>
                {props.content}
            </p>
        </li>
    )
}
const renderMobileMenu = data.map(item => {
    return (
        <NavMobileContent
            key={item.id}
            nmcClass={item.class}
            title={item.title}
            img={item.img}
            content={item.content}
        />
    )
})

export default function Nav(){
    const [showMoreOptions, setShowMoreOptions] = React.useState(false)
    function toggleMoreOptions(){
        setShowMoreOptions(!showMoreOptions)
    }
    return(
        <>
            <nav className="nav">
            <div className="nav-mobile">
                <div className="nav-mobile__title">
                    <p>PRODUCTS</p>
                </div>
                <ul className="nav-mobile__content">
                    {renderMobileMenu}
                </ul>
            </div>
        </nav>
        <div className="nav-desktop">
            <ul className="middle-nav-list nav-list">
                    <li className="middle-nav-item nav-item" onClick={toggleMoreOptions}>
                    Products
                        <ul className={`nav-mobile__content ${showMoreOptions &&`desktop__content`}`}>
                        {renderMobileMenu}
                    </ul>
                </li>
                <li className="middle-nav-item nav-item">
                    <a href="/" className="nav-link">
                        Challenges
                    </a>
                </li>
                <li className="middle-nav-item nav-item">
                    <a href="/" className="nav-link">
                        Resources
                    </a>
                </li>
                <li className="middle-nav-item nav-item">
                    <a href="/" className="nav-link">
                        Other Links
                    </a>
                </li>
            </ul>

            <ul className="signup-nav-list nav-list">
                <li className="signup-nav-item nav-item">
                    <a href="/">Sign in</a>
                </li>
                <li className="signup-nav-item nav-item">
                    <button className="try-btn">
                        <a href="/">Try for free</a>
                    </button>
                </li>
            </ul>
        </div>
        </>
    )
}