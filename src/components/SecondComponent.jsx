
import help from "../assets/help.png"
import earth from "../assets/earth.png"
import love from "../assets/love (1).png"
import children from "../assets/children.png"

const SecondComponent = () => {
  return (
    <div className='w-full flex justify-center mt-11'>
        <div className='w-[80%] flex flex-col items-center '>
            <p className='text-center text-[25px] font-serif'>Sponsor a Child</p>
            <p className='w-[50%] text-center mt-2 font-serif text-[20px] tablet:w-full'>You can make this christmas memorable for the children by making donations</p>
            <div>
                <div className="flex mt-4 gap-4 tablet:flex-col tablet:items-center">
                    <p className="font-medium">RCCG-HEPHZIBAH HOMES </p>
                    <p className="font-medium">1014542663 (Naira) Zenith Bank </p>
                </div>
                <div className="flex mt-4 gap-4 tablet:flex-col tablet:items-center ">
                <p className="font-medium">RCCG Tree Of Life </p>
                <p className="font-medium ml-20 tablet:ml-0">5366041069 (Dollar) Zenith Bank </p>
                </div>
            </div>
            <div className='flex gap-3 flex-wrap mt-6 justify-center'>
                <div className='w-[250px] h-[300px] justify-center bg-[#EEEEEE] rounded-se-3xl rounded-es-3xl flex flex-col items-center'>
                    <div><img src={help} /></div>
                    <p className='text-[18px] font-medium mt-2'>Make a Difference</p>
                    <p className='text-[15px] text-center'>Your support will ensure they have access to education, healthcare, and a nurturing environment, giving them a chance at a brighter future.</p>
                </div>
                <div className='w-[250px] h-[300px] justify-center bg-[#EEEEEE] rounded-se-3xl rounded-es-3xl flex flex-col items-center'>
                    <div><img src={earth} /></div>
                    <p className='text-[18px] font-medium mt-2'>A Better World</p>
                    <p className='text-[15px] text-center'>Together, we can create a world where no child is left behind—one filled with hope, love, and endless possibilities.</p>
                </div>
                <div className='w-[250px] h-[300px] justify-center bg-[#EEEEEE] rounded-se-3xl rounded-es-3xl flex flex-col items-center'>
                <div><img src={love} /></div>
                    <p className='text-[18px] font-medium mt-2'>Loving Hands</p>
                    <p className='text-[15px] text-center'>We believe in a world where every child has the opportunity to thrive, regardless of their circumstances. </p>
                </div>
                <div className='w-[250px] h-[300px] justify-center bg-[#EEEEEE] rounded-se-3xl rounded-es-3xl flex flex-col items-center'>
                <div><img src={children} /></div>
                    <p className='text-[18px] font-medium mt-2'>Every Child Matters</p>
                    <p className='text-[15px] text-center'>At our orphanage, we are committed to ensuring that every child receives the support they need to grow, learn, and dream. </p>
                </div>
            </div>
      
        </div>
    </div>
  )
}

export default SecondComponent