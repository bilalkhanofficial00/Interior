import Image from 'next/image';
import Link from 'next/link';
import Contact from '../images/Support/istockphoto-1178752391-612x612.jpg';
import FAQ from '../images/Support/images.jpg';
import LC from '../images/Support/images (1).jpg';
import ST from '../images/Support/help-desk-ticketing-system.png';

export default function Support () {
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4 " id="Support">
        <h2 className="font-inter font-bold text-center lg:py-16 md:py-12 py-4 text-[45px]">Support</h2>

        {/* Grid layout for support options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card with flex layout to align content */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between text-center">
            <div>
              <Image src={Contact} alt="Contact Support" width={100} height={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
              <p className="text-gray-600 mb-4">Need assistance? Contact our support team for help.</p>
            </div>
            <Link href="/contact" className="text-white bg-[#1F1F1F] hover:bg-yellow-600 px-4 py-2 rounded-lg">Get Help</Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between text-center">
            <div>
              <Image src={FAQ} alt="FAQ" width={100} height={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">FAQ</h3>
              <p className="text-gray-600 mb-4">Find answers to common questions about our services.</p>
            </div>
            <Link href="/faq" className="text-white bg-[#1F1F1F] hover:bg-yellow-600 px-4 py-2 rounded-lg">Visit FAQ</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between text-center">
            <div>
              <Image src={LC} alt="Live Chat" width={100} height={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team in real-time for quick solutions.</p>
            </div>
            <button className="text-white bg-[#1F1F1F] hover:bg-yellow-600 px-4 py-2 rounded-lg">Start Chat</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between text-center">
            <div>
              <Image src={ST} alt="Support Tickets" width={100} height={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support Tickets</h3>
              <p className="text-gray-600 mb-4">Submit a support ticket and track your request online.</p>
            </div>
            <Link href="/support-tickets" className="text-white bg-[#1F1F1F] hover:bg-yellow-600 px-4 py-2 rounded-lg">Submit Ticket</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
