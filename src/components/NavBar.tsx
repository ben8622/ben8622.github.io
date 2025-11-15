import './NavBar.css'
import SwordSvg from './SwordSvg'
function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/" >
                        <SwordSvg/>
                    </a>
                </li>
                <li><a href="/">Home</a></li>
                <li><a href="/blogs">Blogs</a></li>
            </ul>
        </nav>
    )
}

export default NavBar