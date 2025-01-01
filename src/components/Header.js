const HeaderComponent = () => {
    return (
        <div className="main-header">
            <div>
                <img className="main-logo" src="https://static.vecteezy.com/system/resources/previews/002/103/001/non_2x/american-fast-food-dark-mode-glyph-icon-vector.jpg" />
            </div>
            
            <div className="main-title">
                <h1 id="title1">Food</h1>
                <h1>Galaxy</h1>
            </div>

            <nav className="main-nav">
                <ul className="list">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact Us</li></a>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent;