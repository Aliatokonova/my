import React from 'react';

const Header = () => {
    return (
        <section>
            <div className="container">
                <nav className='nav_list'>
                    <h1>Todo</h1>
                    <button type="submit">New tasks</button>
                </nav>
            </div>
        </section>
    );
};

export default Header;