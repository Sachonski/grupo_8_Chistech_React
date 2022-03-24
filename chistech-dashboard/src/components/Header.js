import React from 'react';

function Header() {
    return (
        <React.Fragment>
            <nav className='header'>
                <img className="logo" src={require("../assets/images/logo-gris.png")} alt={"Logo"} />
                <h1 style={{ color: '#383838' }} >DASHBOARD</h1>
            </nav>
        </React.Fragment>
    );
}

export default Header;
