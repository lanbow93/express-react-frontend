import { Link } from "react-router-dom"
import '../styles.scss'

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to='/'> 
            <div>People App</div>
            </Link>
        </nav>
    )
}

export default Header