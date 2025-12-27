import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './Master';
import Home from './Home';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact'

function RouteManager() {
        return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Master />} >
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='services' element={<Services />} />
                    <Route path='gallery' element={<Gallery />} />      
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}   

export default RouteManager;