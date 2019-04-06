import React from 'react';
import '../layout/style.css';

const Header = function(){
    return(
        <div className="header">
            <title>Your Note Storange</title>
            <h3 className="title">
                Your Note Storange
                <button onClick={() => {
                    localStorage.removeItem('list');
                    window.location.reload();
                }} className="clearButton">
                    Clear All Notes
                </button>
            </h3>
        </div>
    );
}

export default Header;