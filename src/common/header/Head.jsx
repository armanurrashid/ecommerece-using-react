import React from 'react';

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className="container d_flex">
                    <div className="left row">
                        <i className='fa fa-phone'></i>
                        <label>+88012 3456 7890</label>
                        <i className='fa fa-envelope'></i>
                        <label>example@gmail.com</label>
                    </div>
                    <div className="right row">
                        {/* <span>🏴</span> */}
                        <label>Theme FAQ's</label>
                        <label>Needs Helps</label>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;