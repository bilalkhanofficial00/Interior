import Image from 'next/image'
import Logo from '../images/Footer/Logo 2.png'
import F from '../images/Footer/Facebook (1).png'
import T from '../images/Footer/X.png'
import I from '../images/Footer/Instagram.png'
import L from '../images/Footer/Linkdin.png'
import M from '../images/Footer/fi-br-envelope.png'
export default function Footer() {
    return (
        <>
            <div className='bg-[#1F1F1F]'>
                <div class="container py-5" id="bottom">

                    <div className="relative">

                        <div className="flex justify-center items-center shadow-lg rounded-lg relative">

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="py-3 pl-14  rounded-lg lg:w-[50%] md:w-[80%] w-full mx-auto"
                            />


                            <div className="absolute inset-y-0 lg:left-80 left-4 md:left-24 flex items-center pointer-events-none">
                                <Image src={M} alt="Mail Icon" />
                            </div>


                            <div className="absolute inset-y-0 lg:right-[315px] md:right-20 right-2 flex items-center">
                                <button className="bg-[#1F1F1F] shadow-lg hover:bg-yellow-600 py-2 px-5 font-inter font-semibold md:text-lg text-sm text-white rounded-r-lg">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-4  grid-cols-1 lg:pt-24 md:pt-16 pt-16 gap-5 gap-y-20 lg:gap-y-0  '>
                        <div className=' grid grid-cols-1 gap-5 justify-center items-center lg:text-start text-center '  >
                            <div className=' flex justify-center lg:justify-start items-center'>
                                <Image src={Logo} alt="Logo" />
                            </div>
                            <p className='font-inter text-[#D1D1D1] font-medium text-[20px] py-8'>
                                VivaDecor your premier destination for luxury and modern interior design
                            </p>
                            <div className='flex justify-center lg:justify-start items-center space-x-8'>
                                <Image src={F} alt="Facebook" className='cursor-pointer' />
                                <Image src={T} alt="Twitter"   className='cursor-pointer'/>
                                <Image src={I} alt="Instagram"  className='cursor-pointer'/>
                                <Image src={L} alt="Linkedin"  className='cursor-pointer'/>
                            </div>
                        </div>

                        <div className='  grid grid-cols-1 gap-5 justify-center  lg:text-start text-center items-center '>

                            <p className='  font-inter font-semibold text-[20px] text-white'>Our Services</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1] '>Interior design</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1]'>Outdoor design</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1]'>Lightning design</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1]'>Office design</p>
                        </div>


                        <div className=' grid grid-cols-1 gap-5 justify-center  lg:text-start text-center items-start  '>

                            <p className='  font-inter font-semibold text-[20px] text-white'>Our Services</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1]'>Reviews</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1]'>Careers</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1]'>Pricing</p>
                            <p className=' cursor-pointer font-inter font-medium text-[20px] text-[#D1D1D1]'>Press inquires</p>
                        </div>



                        <div className=' grid grid-cols-1 gap-5 justify-center lg:text-start text-center items-start  '>

                            <p className='  font-inter font-semibold text-[20px] text-white'>Our Services</p>
                            <p className='  font-inter font-medium text-[20px] text-[#D1D1D1]'>info@vivadecor.com</p>
                            <p className='  font-inter font-medium text-[20px] text-[#D1D1D1]'>Design Avenue Cityville, <br></br>CA 90210 United States</p>

                        </div>
                    </div>





                </div>
            </div>
        </>
    )
}