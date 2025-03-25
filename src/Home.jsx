import NavBar2 from './components/NavBar2.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/Calendar');
    }

    return (
        <div>
            <NavBar2 /> 
            <div class = 'pt-[13vh]'>
            <div onClick={handleClick}>
                <br/><button class="ml-5 px-4 py-2 font-semibold text-sm bg-zinc-400 hover:bg-zinc-300 text-white rounded-md shadow-sm opacity-100">
                click for warp
                </button>
            </div>
            <br/><br/>
            <div class = "ml-5 mr-5 grid grid-rows-10 grid-flow-col gap-4">
                <button onClick={handleClick}
                class="text-center text-xl text-white rounded-md row-span-6 py-20 bg-orange-400 hover:opacity-50"
                >01</button>
                <button onClick={handleClick}
                class="text-center text-xl text-white rounded-md row-span-6 py-20 bg-cyan-500 hover:opacity-50">02</button>
                <button onClick={handleClick} class="text-center text-xl text-white rounded-md row-span-6 py-20 bg-blue-500 hover:opacity-50">03</button>
                <button onClick={handleClick} class="text-center text-xl text-white rounded-md row-span-6 py-20 bg-red-400 hover:opacity-50">04</button>
                <button onClick={handleClick} class="text-center text-xl text-white rounded-md row-span-6 py-20 bg-lime-500 hover:opacity-50">05</button>
                </div>
                </div>
        </div>
        
    );
}

export default Home;