
import Image from "next/image"
import I1 from './images/HeroSection/Image 1.png'
import I2 from './images/HeroSection/Image 2.png'
import Rec from './images/HeroSection/Rectangle 60.png'
import Arrow from './images/HeroSection/Arrow down.png'
import Lighting from './images/Services/Lighting design icon.png'
import Interior from './images/Services/Interior design icon.png'
import Outdoor from './images/Services/Outdoor design icon.png'
import Mask from './images/Dream Section/Mask group.png'
import Mask2 from './images/Dream Section/Mask group 2.png'
import Group7 from './images/Dream Section/Group 7.png'
import Group25 from './images/Dream Section/Group 25.png'
import Group26 from './images/Dream Section/Group 26.png'
import Group27 from './images/Dream Section/Group 27.png'
import { ContactUs } from "./Contactus/ContactUs"
import { Services } from "./Services/Services"
import { Footer } from "./Footer/Footer"
import { Support } from "./Support/Support"
import { Slider } from "./SliderComponents/page"




export default function Home() {

  return (
    <>



      {/* Hero Section */}

      <div class="container lg:mt-28 mt-20" id="home">
        <div className=" lg:flex lg:py-12 grid gap-y-10 py-8 w-full ">
          <div className="lg:w-[65%] w-full lg:justify-start lg:text-start  text-center justify-center items-center">
            <p className="font-inter font-medium text-[#1F1F1F] lg:text-[120px] md:text-[100px] text-[80px]">Interior Design</p>
            <p className="font-inter font-medium text-xl leading-9 text-[#545454]">Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge
              modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication</p>
            <div className="flex lg:justify-start justify-center">
              <button className="bg-[#1F1F1F] shadow-lg hover:bg-yellow-600 mt-20 py-2 px-5 font-inter   font-semibold text-2xl text-white text-center rounded-lg ">Start Project</button>
            </div>
            <div className="md:flex md:space-x-12 lg:mt-28 mt-20 grid gap-y-10 lg:justify-start justify-center text-center items-center">
              <span className="font-inter leading-10">
                <p className="text-5xl font-semibold text-[#545454]">400+</p>
                <p className="text-2xl font-normal text-[#545454]">Project Complete</p>
              </span>
              <span className="font-inter leading-10">
                <p className="text-5xl font-semibold text-[#545454]">600+</p>
                <p className="text-2xl font-normal text-[#545454]">Satisfied Clients</p>
              </span>
              <span className="font-inter leading-10">
                <p className="text-5xl font-semibold text-[#545454]">100+</p>
                <p className="text-2xl font-normal text-[#545454]">Unique Styles</p>
              </span>
            </div>


          </div>
          <div className="lg:w-[35%] w-full relative">
            <div className=" space-y-6 justify-center items-center md:shrink-0 object-cover object-center">
              <Image src={I1} alt="Hero Section Image 1" className=" lg:h-[345px] mt-5 w-full " />
              <Image src={I2} alt="Hero Section Image 1" className="absolute z-10 lg:-left-[150px] w-full " />
              <Image src={Rec} alt="Rectangle 60" className="absolute lg:bottom-[47px] bottom-[-45px] left-0  lg:-left-[165px]" />
              <a className="block" href="#bottom">
              <Image  src={Arrow} alt="Arrow down" className="cursor-pointer duration-300 hover:scale-105 z-20 absolute md:right-5 md:bottom-[-530px] md:size-32 lg:-bottom-14 size-20 bottom-[-272px] right-0" />
              </a>
            </div>

          </div>
        </div>
      </div>


      {/* Service Section */}


      <div className="container">

        <div className="flex lg:justify-start justify-center space-x-5 md:mt-[550px] lg:mt-[90px] lg:mb-16 mt-[280px]">
          <div className="border-b-2 h-5 md:w-20 w-12  lg:mt-5  mt-3  border-[#1F1F1F]" ></div>
          <p className="text-[#1F1F1F] font-inter lg:font-semibold font-bold text-[40px] lg:text-[55px]">
            Our Services
          </p>
        </div>
        <div className="w-full lg:justify-between justify-center text-center lg:text-start h-auto my-12 lg:my-5 lg:flex grid gap-y-16 ">
          <div className="flex lg:flex-row lg:space-x-5  flex-col items-center lg:items-start ">
            <div className="lg:shrink-0">
              <Image src={Lighting} alt="Lighting design icon" className="w-[70px] h-[70px] object-cover" />
            </div>
            <div className="mt-4 lg:mt-0">
              <p className="text-[#1F1F1F] font-inter mb-8 font-semibold text-[30px]">
                Lighting Design
              </p>
              <p className="line-clamp-3 font-inter tracking-tight font-medium text-[22px] text-[#545454]">
                Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row lg:space-x-5  flex-col items-center lg:items-start ">
            <div className="lg:shrink-0 ">
              <Image src={Interior} alt="Lighting design icon" className=" size-[70px]  object-cover object-center " />
            </div>
            <div>
              <p className="text-[#1F1F1F] font-inter mb-8 font-semibold text-[30px]">
                Interior Design
              </p>
              <p className="line-clamp-3 font-inter tracking-tight font-medium text-[22px] text-[#545454]">From concept to completion, we oversee every detail to bring your vision to life efficiently</p>
            </div>
          </div>


          <div className="flex lg:flex-row lg:space-x-5  flex-col items-center lg:items-start">
            <div className="lg:shrink-0 ">
              <Image src={Outdoor} alt="Lighting design icon" className="size-[70px] object-cover object-center " />
            </div>
            <div>
              <p className="text-[#1F1F1F] font-inter mb-8 font-semibold text-[30px]">
                Outdoor Design
              </p>
              <p className="line-clamp-3 font-inter tracking-tight font-medium text-[22px] text-[#545454]">Celebrate the changing seasons with our seasonal outdoor decor services</p>
            </div>
          </div>




        </div>
      </div>



      {/* Designing Your Dream Section */}


      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-12 lg:gap-12 items-start justify-center text-center lg:my-24 md:my-20 my-16 ">
          <div className="flex justify-center ">
            <Image src={Mask} alt="Mask Picture" className="object-cover object-center md:shrink-0" />
          </div>

          <div>
            <p className="font-inter text-[#1F1F1F] font-semibold  md:text-[50px] text-[35px] lg:text-start text-center">Designing Your Dream With Brilliance</p>


            <p className="lg:text-start text-center leading-8 pt-8 tracking-tight text-[#545454] font-inter font-medium text-xl">Elevate your spaces with bespoke interior designs that reflect <br></br> your unique style and aspirations, crafted with precision <br></br> and brilliance for an unforgettable living experience</p>


            <div className="flex justify-between items-center  pt-16">
              <span className="text-[#1F1F1F] text-start font-semibold text-[20px] md:text-[24px]">
                Living Room Interior Design
              </span>
              <span className=" md:size-[20px] size-[15px] cursor-pointer"> <Image src={Group7} alt="Group7" /> </span>
            </div>
            <div className="flex  justify-between md:items-center  pt-16">
              <span className="text-[#1F1F1F] font-semibold text-start text-[20px] md:text-[24px]">
                Commercial Office Room Interior Design
              </span>
              <span className=" md:size-[20px] size-[15px] md:mt-0 mt-3 cursor-pointer"> <Image src={Group7} alt="Group7" /> </span>
            </div>
            <div className="flex lg:justify-start justify-center">
              <button className="bg-[#1F1F1F] shadow-lg hover:bg-yellow-600 mt-16 py-2 px-5 font-inter   font-semibold text-2xl text-white text-center rounded-lg ">Learn More</button>
            </div>
          </div>


        </div>
      </div>



      {/* Designing Your Dream Steps Section */}


      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-14 lg:gap-12 items-start justify-center text-center lg:my-24 md:mt-20 md:mb-12 mt-16 mb-8 ">
          <div className="grid grid-cols-1">
            <p className="font-inter text-[#1F1F1F] font-semibold  md:text-[50px] text-[35px] lg:text-start text-center">Designing Your Dream in Three Simple Steps</p>

            <div className="flex lg:flex-row lg:space-x-8 flex-col mt-10">
              <div className="lg:shrink-0 flex justify-center gap-3 flex-col items-center">
                <div>
                  <Image src={Group25} alt="Lighting design icon" className="w-[70px] h-[70px] object-cover" />
                </div>
                <div className="w-[1px] h-[100px] lg:block hidden mt-4 bg-[#9B9B9B]"></div>
              </div>
              <div className="lg:text-start text-center flex flex-col ">
                <p className="text-[#1F1F1F] font-inter mb-5 font-bold text-[30px]">
                  Start Project
                </p>
                <p className="line-clamp-3 font-inter tracking-tight font-medium text-[22px] text-[#545454]">
                  Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.
                </p>
              </div>
            </div>


            <div className="flex lg:flex-row lg:space-x-8 flex-col mt-10 lg:mt-5">
              <div className="lg:shrink-0 flex justify-center gap-3 flex-col items-center">
                <div>
                  <Image src={Group26} alt="Lighting design icon" className="w-[70px] h-[70px] object-cover" />
                </div>
                <div className="w-[1px] h-[100px] mt-4  lg:block hidden bg-[#9B9B9B]"></div>
              </div>
              <div className=" lg:text-start text-center flex flex-col ">
                <p className="text-[#1F1F1F] font-inter mb-5 font-bold text-[30px]">
                  Craft
                </p>
                <p className="line-clamp-3 font-inter tracking-tight font-medium text-[22px] text-[#545454]">
                  Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space.
                </p>
              </div>
            </div>


            <div className="flex lg:flex-row lg:space-x-8 flex-col mt-10 lg:mt-5">
              <div className="lg:shrink-0 flex justify-center">
                <Image src={Group27} alt="Lighting design icon" className="w-[70px] h-[70px] object-cover" />
              </div>
              <div className=" lg:text-start text-center flex flex-col  ">
                <p className="text-[#1F1F1F] font-inter mb-5 font-bold text-[30px]">
                  Execute
                </p>
                <p className="line-clamp-3 font-inter tracking-tight font-medium text-[22px] text-[#545454]">
                  Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.
                </p>
              </div>
            </div>


          </div>

          <div className="flex items-center  justify-center grid-cols-1 ">
            <Image src={Mask2} alt="Mask Picture" className="object-cover object-center md:shrink-0" />
          </div>
        </div>
      </div>


      {/* What Our Customers Say About Us Section */}
     
     <Slider/>



    


     {/* Services */}


     <Services/>
  

   {/* ContactUs */}

   <ContactUs/>

   {/* Support */}
   <Support/>

     {/* Footer */}


     <Footer/>






     

      
     
    </>
  )
}
