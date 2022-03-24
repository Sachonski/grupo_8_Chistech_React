import React from 'react';

function Header() {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <img className="logo" src={require("../assets/images/logo.png")} alt={"Logo"}/>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Header;
