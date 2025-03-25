import NavBar2 from './components/NavBar2.jsx';
import { useNavigate } from 'react-router-dom';

function Calendr() {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/Calendar');
    }

    return (
        <div>
            <NavBar2 />
            <div class="ml-2 gap-8 columns-4 pt-[13vh]"></div>
            <br />
            <h1 class="ml-5 font-bold text-6xl">React Project prototype</h1>
            <br />
            <div class="ml-5 mr-5 grid grid-cols-5 gap-4">
                <h2 class="font-bold text-2xl text-red-400">due date: TODAY!</h2>
                <div class="ml-10 col-start-1 col-end-5">
                    ใช้ react สร้างหน้าที่จำเป็นจาก prototype ใน figma
                    <br />ดูวิธีเริ่มสร้าง React Project ได้ที่ https://www.youtube.com/watch?v=zOrqi6qLgN8&list=PLHkLWR9ZVwvZ703GZ7jdas9ek5K-mQG8c&index=1
                    <br />ความคาดหวังคือสามารถคลิกทำ interaction ตาม prototype ที่ตั้งใน figma ได้ประมาณ 1-2 หน้าหลัก ๆ ที่ออกแบบไว้ (ข้ามหน้าอื่น เช่นหน้า login ได้)
                    <br />ขอให้ส่งเป็น
                    <br />- คลิป demo ไม่เกินห้านาที (เน้นอธิบายวิธีการใช้งาน ไม่จำเป็นต้องอธิบายวิธีการทำงานของโค้ด)
                    <br />- zip code file ทั้ง project</div>
                <img src="src\assets\pic_template.png" class="col-start-5 col-end-6" />
                <button onClick = {handleClick}
                    class="text-center text-xl text-white text-bold col-start-1 col-end-3 py-2 rounded-md bg-zinc-500 hover:opacity-50"
                >edit your work</button>
                <button onClick = {handleClick}
                    class="text-center text-xl text-white text-bold col-start-3 col-end-5 py-2 rounded-md bg-green-500 hover:opacity-50"
                >submit</button>
            </div>
            <br />
            <div onClick = {() => navigate('/Home')}>
                <button class="ml-5 col-start-5 col-end-6 px-4 py-2 font-semibold text-sm bg-zinc-400 hover:bg-zinc-300 text-white rounded-md shadow-sm place-items-end">
                    Home
                </button>
            </div>
        </div>
    );
}
export default Calendr;