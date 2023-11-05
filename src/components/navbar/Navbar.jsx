import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <div className="wrapper"></div>
            <span>Salamon Szilard</span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="Salamon Szilard facebook link"/></a>
                <a href="#"><img src="/facebook.png" alt="Salamon Szilard facebook link"/></a>
            </div>
        </div>
    );
};

export default Navbar;