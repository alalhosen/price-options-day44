import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Services', path: '/services' },
        { id: 5, name: 'Profile', path: '/profile/:username' }
    ];

    return (
        <nav className="text-black bg-yellow-300 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> 
                    :  <AiOutlineMenu className=""></AiOutlineMenu>
                }
               
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
                ${open ?'top-16':'-top-60'
                }
                bg-yellow-400 px-6 shadow-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;