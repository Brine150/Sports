function Navbar(){
return(
    <>
        <header className="header">
            <h2 className="logo">BM Sports</h2>
            <nav className="navigation">
                <a href="/" className="ahref">Home</a>
                <a href="/scores" className="ahref">Scores</a>
                <a href="/Watch" className="ahref">Watch</a>
                <a href="/ContactUs" className="ahref">Contact Us </a>
                <a href="/Login" className> <button className="btn-login">Login</button></a>
            </nav>
        </header>
        
        
    </>
    );
}

export default Navbar