import './NavBar2.css'
import { useNavigate } from 'react-router-dom';
    
function NavBar2() {
    const navigate = useNavigate();
    function handleClick(event, target) {
        navigate(target);
    }
    return (
        <nav class="navbar bg-[#ABE5E5] flex relative justify-between items-center rounded-b-2xl py-2">
            <div class="navbar-container container  ml-[3%]">
                <input type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
                </div>
                <h2 class="ml-5 text-lg h-full flex justify-center items-center relative text-cyan-700 text-xl">
                    Google Classroom Organizer App
                </h2>
                <ul class="menu-items">
                    <li><div onClick={() => navigate('/Home')}>Home</div></li>
                    <li><div onClick={() => navigate('/App')}>Events</div></li>
                    <li><div onClick={() => navigate('/Calendar')}>Calendar</div></li>
                </ul>
            </div>

            <div class="flex-initial mr-[3%]">
            <div class="flex justify-end items-center relative">
            <div class="block">
                <div class="inline relative">
                <button
                    type="button"
                    class="inline-flex items-center relative p-2 border rounded-full hover:shadow-lg"
                    onClick={() => navigate('/')}
                >
                    <div
                    class="block flex-grow-0 flex-shrink-0 h-8 w-8 bg-[#21AFAF] rounded-full"
                    >
                    </div>
                </button>
                </div>
            </div>
            </div>
        </div>
        {/*end login*/}

        </nav>
    );
}

export default NavBar2;