function DateBox(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   
    
    const { Date } = props;
    
    let date = Date.getDate();
    let day = days[Date.getDay()];
    let month = months[Date.getMonth()];
    let year = Date.getFullYear();
    return (
        <div
            class="relative bg-[#BFBFBF] w-[27rem] h-4/6 py-[8%] px-5 rounded-[50px]">
            <div class="grid grid-rows-5 h-full">
            <div class="flex row-span-1 text-gray-800 font-sans text-4xl font-bold justify-center items-center text-center">
                {day}
            </div>
            <div class="flex row-span-2 text-gray-800 font-sans text-9xl font-bold justify-center items-center text-center">
                {date}
            </div>
            <div class="flex row-span-1 text-gray-800 font-sans text-5xl font-bold justify-center items-center text-center">
                {month}
            </div>
            <div class="flex row-span-1 text-gray-800 font-sans text-4xl font-bold justify-center items-center text-center">
                {year}
            </div>
            </div>
        </div>
        
    )
}


export default DateBox;