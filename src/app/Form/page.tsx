import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link";

export default function Forms(){
    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
           <h1 className="text-5xl font-bold text-center uppercase mt-5" >enter your details</h1>
           <div >
               <form className=" mt-10 flex gap-5 justify-center items-center flex-col border">

               <input type="email"className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter your name"/>

               <input type="password"className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter your Email"/>

               <input type="Card Number"className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Card Number"/>

               <input type="Address"className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Address"/>
               <Link href="/thankYou" className=" py-3 px-7 rounded-2xl  bg-blue-500 text-white">Place your order</Link>
               
           </form>
           </div>
           <Footer/>
        </div>
    )
}