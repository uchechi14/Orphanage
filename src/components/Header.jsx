import { useEffect, useRef, useState } from 'react'
// import heroimg from "../assets/children.jpg"
import { RiMenu2Fill } from "react-icons/ri";
import lovehand from "../assets/lovehand.png"

const Header = () => {

    const [open, setOpen] = useState(false)
    const openRef = useRef(null)

    const toggleMenu = () =>{
        setOpen((prev) => !prev)
    }

    const handleClickOutside = (event) =>{
        if (openRef.current && !openRef.current.contains(event.target)) {
            setOpen(false)
        }
    }
    console.log(open)

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside )
        }else{
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [open])


    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () =>{
            setScrollPosition(window.scrollY)

        }

        window.addEventListener('scroll', handleScroll);

        handleScroll()

        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


  return (
    <div className="w-full h-screen flex flex-col items-center bg-[url('/src/assets/orphanagehome7.jpg')] bg-no-repeat bg-cover ">
        {/* <div className=' bg-black opacity-20 w-full absolute'> */}
        <div className={`w-full flex justify-center items-center fixed h-[70px] z-50 bg:headerBgColor ${scrollPosition > 200 ? 'bg-[#9B7EBD] shadow-md py-2 text-black' : "bg-transparent py-4 text-[#9B7EBD] "} `}>
        <div className='w-[85%] flex justify-between items-center '>
        <div className='text-[30px] hidden tablet:flex cursor-pointer text-black tablet:text-white' onClick={toggleMenu}><RiMenu2Fill /></div>
            <div className='tablet:hidden font-bold'>HEPHZIBAH HOME</div>
            <div className='flex gap-5 tablet:hidden'>
                <nav className='text-[17px] font-medium font-serif  '>Home</nav>
                <nav className='text-[17px] font-medium font-serif '>About Us</nav>
                <nav className='text-[17px] font-medium font-serif '>Program</nav>
                <nav className='text-[17px] font-medium font-serif'>Contact Us</nav>
            </div>
            <button className={`py-[10px] px-3 rounded-md font-medium tablet:hidden transition ease-in-out duration-300 ${scrollPosition > 200 ? "bg-white hover:bg-[#D4BEE4] text-[#9B7EBD] " : "bg-[#9B7EBD] hover:bg-[#D4BEE4] text-white" }`}>Donate Now</button>
            <div className='hidden tablet:flex font-bold'>HEPHZIBAH HOME</div>
            
        </div>
        </div>
        {open && (
            <div className='fixed  top-16 left-[200px] flex-col transform md:hidden -translate-x-1/2 w-[300px]  bg-white rounded-sm shadow-2xl p-6 z-50 h-[250px]'  ref={openRef}>
                <nav className='text-[17px] font-medium font-serif'>Home</nav>
                <nav className='text-[17px] font-medium font-serif mt-2'>About Us</nav>
                <nav className='text-[17px] font-medium font-serif mt-2'>Program</nav>
                <nav className='text-[17px] font-medium font-serif mt-2'>Contact Us</nav>
                <button className='py-[10px] px-3 bg-[#9B7EBD] hover:bg-[#D4BEE4]  mt-2  rounded-md font-medium transition ease-in-out duration-300'>Donate Now</button>
            </div>
            
        ) }
        <div className='flex w-[85%] items-center h-[calc(100vh-70px)] mt-[70px]  '>
            <div className='w-full tablet:flex tablet:flex-col-reverse tablet:items-center '>
                {/* <div className='hidden tablet:flex'>
                    <img src={lovehand} className='size-[300px]' />
                </div> */}
               <div className='tablet:flex tablet:flex-col tablet:items-center'>
               <h1 className='text-responsiveText font-serif tablet:text-center font-extrabold text-white'>Hope, Love, and Care for Every Child in Need</h1>
                <p className='text-[17px] font-serif text-white w-[500px] tablet:w-full'>We provide shelter, education, and hope to orphaned children across the community.Together, we can create a world where every child feels loved.</p>
                <button className='py-[10px] px-3 bg-[#9B7EBD] hover:bg-[#D4BEE4]  rounded-md font-medium mt-4 transition ease-in-out duration-300' >Learn more</button>
               </div>
            </div>
            {/* <div className='w-full tablet:mt-5  flex flex-col items-center'>  */}
                {/* <img src={heroimg}  className='h-[530px] w-[600px] rounded-xl  '/> */}
                {/* <div className='size-[200px] tablet:size-[150px] bg-red-500 rounded-full bg-[url("/src/assets/children.jpg")] bg-cover bg-no-repeat'></div>
                <div className='flex gap-5'>
                    <div className='size-[200px] tablet:size-[150px]  bg-red-500 rounded-full bg-[url("/src/assets/laugh.jpg")] bg-cover bg-no-repeat'></div>
                    <div className='size-[200px] tablet:size-[150px]  bg-red-500 rounded-full bg-[url("/src/assets/orphan2.jpg")] bg-cover bg-no-repeat'></div>
                </div>
            </div> */}
        </div>
        {/* </div> */}
    </div>
  )
}

export default Header