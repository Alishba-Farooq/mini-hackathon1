import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function Car1() {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-8 px-4 ml-14 mr-14 mb-auto">
            <h1 className="text-4xl font-bold underline text-center">Suzuki 2024 Price in Pakistan, Images, Reviews & </h1>
            <div className="text-center">
                <h2 className="text-4xl font-bold underline">Specs</h2>
            </div>
            <div className="flex bg-white h-56 w-56 flex-col mt-3 flex-grow justify-center items-center">
                <img src="/suzuki.png" className="h-40 w-44" />
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
            The 2024 Suzuki Alto in Pakistan is priced between **PKR 2.26 million and PKR 2.94 million**, featuring a compact 660cc engine that emphasizes fuel efficiency, achieving approximately **22 km/l**. It is available in multiple variants, including the VXR and VXL, equipped with essential features such as dual airbags, ABS, and a basic infotainment system. The **2024 Suzuki Wagon R** is priced from **PKR 3.21 million to PKR 3.94 million**, boasting a spacious interior and a 1.0L engine, making it a practical choice for families. The **Suzuki Cultus** ranges from **PKR 3.72 million to PKR 4.33 million**, offering a 1.0L engine and modern comfort features. Meanwhile, the **Suzuki Swift**, priced between **PKR 4.26 million and PKR 4.96 million**, delivers sporty performance with a 1.2L engine, advanced safety features, and a stylish design, making it an attractive option for urban drivers. 
            These Suzuki models are known for their reliability and value, appealing to a wide range of customers in Pakistan.
            </p>
            <div className="flex justify-center font-bold text-green-500 mt-11">4,256,000</div>
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
