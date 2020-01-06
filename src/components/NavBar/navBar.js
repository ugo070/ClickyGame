import React from 'react';
import './navBar.css'

const NavBar = props => {
    return (
        <nav className="navBar navbar-expand-lg">
            <div className=""> Clicky Game</div>
            <div>{props.scores.topMessage} </div>
            <div>Score: {props.scores.score} |
             Top Score: {props.scores.topScore} </div>
        </nav>
    );
};

export default NavBar;