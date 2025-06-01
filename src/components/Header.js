const HeaderComponent = () => {
    return (
        <div className="main-header">
            <div className="logo-title-container">
                <img
                    className="main-logo"
                    src="https://static.vecteezy.com/system/resources/previews/002/103/001/non_2x/american-fast-food-dark-mode-glyph-icon-vector.jpg"
                    alt="Logo"
                />
                <div className="main-title">
                    <h1 id="title1">Food</h1>
                    <h1>Gallery</h1>
                </div>
            </div>

            <nav className="main-nav">
                <ul className="list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderComponent;
