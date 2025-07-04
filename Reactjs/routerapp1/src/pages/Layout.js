import {Link,Outlet} from 'react-router-dom';

const Layout=()=>{
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/nopage">NoPage</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
        );
}
export default Layout;