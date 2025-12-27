import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Master() {
    return (
        <div>
            <h1>REACT ROUTER DOM</h1>
            <p>This is the master page.</p>
            <Header />
            <Outlet />
            <Footer />

        </div>
    ); 
}

export default Master;

