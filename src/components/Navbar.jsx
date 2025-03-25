import './Navbar.css'
    
function Navbar() {
    return (
    <div class="bg-[#ABE5E5] w-screen flex relative justify-between items-center mx-auto px-8 rounded-b-2xl py-3">
        <div class="inline-flex">
            <a class="_o6689fn">
                <div class="pl-1 justify-center content-center place-content-center">
                    <div class="shrink space-y-2">
                        <div class="w-8 h-1 bg-[#21AFAF]"></div>
                        <div class="w-8 h-1 bg-[#21AFAF]"></div>
                        <div class="w-8 h-1 bg-[#21AFAF]"></div>
                    </div>
                </div>
                </a>
                <h2 class="ml-5 text-lg flex justify-end items-center relative text-cyan-700 text-xl">
                    Google classroom organizer app
                </h2>
        </div>
        {/*end logo*/}
        
        {/*login*/}
        
        <div class="flex-initial">
            <div class="flex justify-end items-center relative">
            <div class="block">
                <div class="inline relative">
                <button
                    type="button"
                    class="inline-flex items-center relative p-2 border rounded-full hover:shadow-lg"
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
        </div>
    );
}

export default Navbar;