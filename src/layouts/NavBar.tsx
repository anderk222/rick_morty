import { useLocation, useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"

const NavBar = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const home = (location.pathname == '/')

    return (
        <nav className="h-16 text-zinc-400 bg-neutral-950 w-full  items-center px-4   sha" >
            <ul className="flex items-center justify-between h-full" >
                <li>
                {!home &&
                    <button onClick={() => { navigate(-1) }}
                        className="" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor" className="bi bi-chevron-left"
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                }

                </li>
                <li>
                    <Sidebar />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar