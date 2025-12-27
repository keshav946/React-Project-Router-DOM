import { Link } from 'react-router-dom';

    
function Header() {
    return (
        <header>
            <div className="container">
                <ul className = "nav">

                    <li className='nav-item'><Link className="nav-link text-green" to ={"/"}>Home</Link></li>
                    <li className='nav-item'><Link className="nav-link text-green" to ={"/about"}>About</Link></li>
                    <li className='nav-item'><Link className="nav-link text-green" to ={"/services"}>Services</Link></li>
                    <li className='nav-item'><Link className="nav-link text-green" to ={"/gallery"}>Gallery</Link></li>
                    <li className='nav-item'><Link className="nav-link text-green" to ={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );                
}   

export default Header;


 
