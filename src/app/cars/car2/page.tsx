import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function Car1() {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-8 px-4 ml-14 mr-14 mb-auto">
            <h1 className="text-4xl font-bold underline text-center">Honda City 2024 Price in Pakistan, Images, Reviews & </h1>
            <div className="text-center">
                <h2 className="text-4xl font-bold underline">Specs</h2>
            </div>
            <div className="flex bg-white h-56 w-56 flex-col mt-3 flex-grow justify-center items-center">
                <img src="/honda-city.png" className="h-40 w-44" />
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
            The 2024 Honda City in Pakistan is priced between PKR 46.5 and 58.5 lacs, available in five variants: 1.2L M/T, 1.2L CVT, 1.5L M/T, 1.5L CVT, and 1.5L Aspire CVT. It offers a smooth driving experience with two engine options, a 1.2L and a 1.5L SOHC i-VTEC, known for delivering a fuel efficiency of 15 to 18 km/l. Key features include dual airbags, ABS, climate control, and a 7-inch infotainment system. With a spacious 510-liter trunk and a sleek exterior, it competes
             well against rivals like the Toyota Yaris, providing comfort, style, and performance at a competitive price.
            </p>
            <div className="flex justify-center font-bold text-green-500 mt-11">PKR 6,529,000 </div>
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
