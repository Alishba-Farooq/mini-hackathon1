import Link from 'next/link';
export default function Feature() {
    return (
        <div className="flex flex-col justify-start w-full mt-8 px-2">
        {/* Main Heading with View All Link */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl ml-6 font-semibold">Feature New Cars</h1>
          <span className="text-blue-400 mr-6 cursor-pointer hover:underline">View all new Cars</span>
        </div>

  
        {/* Subheadings */}
        <div className="flex justify-start w-full ml-6 space-x-10 items-center">
          {/* Popular Heading with Blue Line */}
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold hover:underline">Popular</h2>
            <div className="border-t-4 w-20 border-blue-500 mt-1"></div> {/* Blue Line */}
          </div>
          
          
          <h2 className="text-xl font-semibold hover:underline">Upcoming</h2>
          <h2 className="text-xl font-semibold hover:underline">Newly Launched</h2>
        </div>
  
        {/* Cards Section */}
        <div className="flex w-auto mt-14 items-start pl-7 space-x-16 px-7">
          
          {/* Card 1 */}
          <div className="flex bg-white h-80 flex-grow justify-center items-center flex-col">  
            {/* car image */}
            <img src="/toyota.png" className="h-32 w-40" />
             {/* Link for routing the car details */}
            <Link href="/cars/car1" className="flex justify-center mt-7 mr-8 font-bold text-blue-600 hover:underline" >Toyota Corolla</Link>
            
            <div className="flex justify-center mt-0 mr-8 font-bold text-green-400">PKR-59.7-75.5lacs</div>
            <div className="flex justify-center mt-0 mr-8 font-semibold text-gray-600">⭐️⭐️⭐️☆☆ 621 Reviews</div>
          </div>   
          
          {/* Card 2 */}
          <div className="flex bg-white h-80 flex-grow justify-center items-center flex-col">
             {/* car image */}
            <img src="/honda-city.png" className="h-28 w-40" />
            {/* Link for routing the car details */}
            <Link href="/cars/car2" className="flex justify-center mt-7 mr-8 font-bold text-blue-600 hover:underline">Honda City</Link>
            
            <div className="flex justify-center mt-0 mr-8 font-bold text-green-400">PKR-23.3-30.5lacs</div>
            <div className="flex justify-center mt-0 mr-8 font-semibold text-gray-600">⭐️⭐️⭐️☆☆ 199 Reviews</div>
          </div>
          
          {/* Card 3 */}
          <div className="flex bg-white h-80 flex-grow justify-center items-center flex-col">
            <img src="/honda-civic.png" className="h-28 w-40" />
             {/* Link for ruting the car details */}
            <Link href="/cars/car3"   className="flex justify-center mt-7 mr-8 font-bold text-blue-600 hover:underline">Honada Civic</Link>

            
            <div className="flex justify-center mt-0 mr-8 font-bold text-green-400">PKR-46.5-58.5lacs</div>
            <div className="flex justify-center mt-0 mr-8 font-semibold text-gray-600">⭐️⭐️⭐️☆☆ 458 Reviews</div>
          </div>
          
          {/* Card 4 */}
          <div className="flex bg-white h-80 flex-grow justify-center items-center flex-col">
            <img src="/suzuki.png" className="h-28 w-40" />
             {/* Link for ruting the car details */}
             <Link href="/cars/car4" className="flex justify-center mt-7 mr-8 font-bold text-blue-600 hover:underline">Suzuki</Link>
            
            <div className="flex justify-center mt-0 mr-8 font-bold text-green-400">PKR-86.6-99.0lacs</div>
            <div className="flex justify-center mt-0 mr-8 font-semibold text-gray-600">⭐️⭐️⭐️☆☆ 357 Reviews</div>
          </div>
        </div>
      </div>
    );
  }
  