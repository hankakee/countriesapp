import React from 'react';

const Logo = () => {
    return (
        <div className='logo' style={{"marginTop":"2em"}}>
            {/* //les images importes depuis la balise img seront acessibles
            depuis le public */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React world</h3>
        </div>
    );
};

export default Logo;