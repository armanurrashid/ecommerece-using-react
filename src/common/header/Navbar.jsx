import React from 'react';

const Navbar = () => {
    return (
        <>
            <header className='header'>
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className='fa-solid fa-border-all'></span>
                        <h4>Categories <i className='fa fa-chevron-down'></i></h4>
                    </div>
                </div>

            </header>
        </>
    );
};

export default Navbar;