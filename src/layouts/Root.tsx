import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Root  = () => {
    return (
        <div className='bg-white text-sm min-h-screen flex flex-col items-center w-full  p-0' >
            <NavBar />
            <div className=' w-full max-w-[1900px] ' >
            <Outlet />
            </div>
        </div>
    )
}

export default Root