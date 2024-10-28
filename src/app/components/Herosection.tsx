export default function Herosection() {
    return (
      <div className=" flex flex-col items-center justify-center mt-10"> {/* Added mt-10 for spacing */}
        <h1 className="text-4xl font-bold">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>
  
        {/* Horizontal Line */}
       
  
        <div className="flex flex-col md:flex-row items-center gap-36">
          <div className="text-center md:text-left">
          <div className="w-full border-t-2 border-gray-400 mb-4 ml-5 mt-3"></div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Post your ad on PakWheels</h2>
            <ul className="text-left mb-6">
              <li className="mb-2">✅ Post your Ad for free in 3 Easy Steps</li>
              <li className="mb-2">✅ Get Genuine Offers From Verified Buyers</li>
              <li className="mb-2">✅ Sell your car at the Best Price</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-red-600">
              Post your Ad
            </button>
          </div>
          

          {/* Div to Create OR in a Center */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-500 mb-4">OR</div>
          </div>
  
          {/* Middle Line */}
        
  
          <div className="text-center md:text-left">
          <div className="w-full border-t-2 border-gray-400 mb-4 mt-3"></div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Try PakWheels Sell it For Me</h2>
            <ul className="text-left mb-6">
              <li className="mb-2">✅ Dedicated Sales Expert to Sell Your Car</li>
              <li className="mb-2">✅ We Bargain for you and Share the Best Offer</li>
              <li className="mb-2">✅ We Ensure Secure and Safe Transaction</li>
            </ul>
            <button className="bg-red-500 text-white py-2 px-8 rounded hover:bg-blue-400">
              Register Your Car
            </button>
          </div>
        </div>
      </div>
    );
  }
  