import React from 'react';
import { Navbar } from 'reactstrap';
import '././styles.css'


const Header = () => {

    return (
        <div>
            <Navbar className="header" style={{
                color: "white",
                fontSize: "1.5rem",
                display: "flex",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <span className="text">Header</span>
            </Navbar>
        </div>
    )
}

export default Header
