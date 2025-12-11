
function Navbar({onOpenLogin}){
return(
    <>


        <header className="header">
            <h2 className="logo">BM Sports</h2>
            <nav className="navigation">
                <a href="/" className="ahref">Home</a>
                <a href="/scores" className="ahref">Scores</a>    
                <a href="/ContactUs" className="ahref">Contact Us</a>
                <a href="/Watch" className="ahref">Watch</a>
                <button onClick={onOpenLogin} className="btn-login">Login</button>
        
            </nav>
        </header>
        
        
    </>
    );
}

export default Navbar