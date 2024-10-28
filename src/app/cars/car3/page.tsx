import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function Car1() {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-8 px-4 ml-14 mr-14 mb-auto">
            <h1 className="text-4xl font-bold underline text-center">Honda Civic 2024 Price in Pakistan, Images, Reviews & </h1>
            <div className="text-center">
                <h2 className="text-4xl font-bold underline">Specs</h2>
            </div>
            <div className="flex bg-white h-56 w-56 flex-col mt-3 flex-grow justify-center items-center">
                <img src="/honda-civic.png" className="h-40 w-44" />
            </div>
        </div>
        
        {/* Buttons under the car image */}
        <div className="flex justify-center space-x-8 mt-5">
            <button className="bg-white text-blue-700 py-4 px-8 rounded border-2 border-blue-700 hover:bg-blue-500">Book a test Drive</button>
            <button className="bg-white text-blue-700 py-4 px-8 rounded border-2 border-blue-700 hover:bg-blue-500">Request Bank Finance</button>
            <button className="bg-white text-blue-700 py-4 px-8 rounded border-2 border-blue-700 hover:bg-blue-500">Visit Place</button>
            <button className="bg-white text-blue-700 py-4 px-8 rounded border-2 border-blue-700 hover:bg-blue-500">Car Inspection</button>
        </div>

        <div className="flex flex-col items-center mt-5 px-10">
            <h1 className="text-4xl font-bold">Vehicle Description</h1>
            <p className="mt-4 text-center max-w-2xl text-lg">
            The 2024 Honda Civic in Pakistan is priced between PKR 8.1 and 10.2 million, available in three variants: Standard, Oriel, and RS. Powered by a 1.5L turbocharged engine in the RS variant, it delivers exceptional performance with fuel efficiency ranging from 11 to 14 km/l. The Civic's interior
             features an 8-inch touchscreen, dual-zone climate control, and leather seats, while advanced safety includes Honda Sensing technology with adaptive cruise control, lane-keeping assist, and more. The Civic stands out with its bold design, spacious cabin, and smooth ride, making it a top choice in the premium sedan market.
            </p>
            <div className="flex justify-center font-bold text-green-500 mt-11">PKR 8,329,000</div>
        </div>

        {/* Move the Make Payment button up */}
        <div className="flex justify-center items-center mt-5 mb-5"> {/* Adjusted margins */}
            <Link href="/Form"><button className="flex rounded bg-blue-500 text-white hover:bg-blue-400 py-4 px-8">Make Payment</button></Link>
            
        </div>    

        {/* Footer */}
        <Footer />
      </div>
    );
}
