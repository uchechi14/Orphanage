
import charity from "../assets/orphanagehome5.jpg"
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ThirdComponent = () => {
  return (
    <div className='w-full flex justify-center mt-11'>
        <div className='w-[75%] flex justify-center gap-4  items-center tablet:flex-col-reverse'>
            <div className="w-full">
                <img src={charity} className="w-full rounded-2xl" />
            </div>
            <div className='w-full flex flex-col items-center'>
                <div>
                    <h1 className='text-[20px] font-medium font-serif text-[#9B7EBD] tablet:text-center'>About Us</h1>
                <p className='tablet:text-center text-responsiveText font-serif leading-[50px]'>Changing Lives In Our Community</p>
                <p className='tablet:text-center'>At HEPHZIBAH HOME, we provide a loving and nurturing environment for orphaned and vulnerable children, empowering them to reach their full potential. Our mission is to offer a safe haven, education, and care, fostering a brighter future for every child.</p>
              <button className='py-[10px] px-3 bg-[#9B7EBD] hover:bg-[#D4BEE4] rounded-md font-medium tablet:hidden transition ease-in-out duration-300 mt-2 flex items-center gap-1' >Learn More <MdOutlineArrowRightAlt className='text-[25px]' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdComponent