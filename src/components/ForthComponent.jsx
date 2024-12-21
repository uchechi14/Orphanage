import image1 from "../assets/orphanagehome1.jpg"
import image2 from "../assets/orphanagehome2.jpg"
import image3 from "../assets/orphanagehome6.jpg"

const ForthComponent = () => {

  return (
    <div className='w-full flex justify-center mt-11'>
        <div className='w-[75%] flex justify-center flex-col items-center '>
            <p className='text-center text-[25px] font-serif'>Featured Campaign</p>
            <p className='w-[70%] text-center mt-2 font-serif text-[15px]'>Together, we’ve changed lives through education, meals, and care. Help us continue making a difference.</p>
            <div className="flex gap-9 flex-wrap mt-6 tablet:justify-center">
                <div className='w-[300px] h-[350px] bg-[#EEEEEE] rounded-se-3xl rounded-es-3xl flex flex-col '>
                    <div className="w-full rounded-se-3xl rounded-es-3xl">
                        <img src={image1} className="w-full rounded-se-3xl rounded-es-3xl h-[200px]"/>
                    </div>
                    <p className="font-bold font-serif text-[18px] text-center mt-5">Learning for a brighter future</p>
                    <p className="font-serif text-[15px] text-center">Love, care, and education – the foundation of a brighter future.Hope in every step, education in every dream.</p>
                </div>
                <div className='w-[300px] h-[350px] bg-[#EEEEEE] rounded-se-3xl rounded-es-3xl flex flex-col '>
                    <div className="w-full rounded-se-3xl rounded-es-3xl">
                        <img src={image2} className="w-full rounded-se-3xl rounded-es-3xl h-[200px]"/>
                    </div>
                    <p className="font-bold font-serif text-[18px] text-center mt-5">Playing Act</p>
                    <p className="font-serif text-[15px] text-center">Playful moments that make life beautiful. Little explorers discovering the world</p>
                </div>
                <div className='w-[300px] h-[350px] bg-[#EEEEEE] rounded-se-3xl rounded-es-3xl flex flex-col '>
                    <div className="w-full rounded-se-3xl rounded-es-3xl">
                        <img src={image3} className="w-full rounded-se-3xl rounded-es-3xl  h-[200px]"/>
                    </div>
                    <p className="font-bold font-serif text-[18px] text-center mt-5">Giving back to the society</p>
                    <p className="font-serif text-[15px] text-center">A loving and supportive community that helps them heal and thrive. Food, shelter, and clothing for our children</p>
                </div>
             
            </div>
      </div>
    </div>
  )
}

export default ForthComponent