import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/project"}>Project</Link>
            <Link to={"/testimony"}>Testimony</Link>
        </header>
    )
}