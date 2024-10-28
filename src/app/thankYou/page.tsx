import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Thanks() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex justify-center flex-col items-center font-bold flex-grow">
                <h1 className="text-6xl mt-5 text-blue-400">
                    <em>Thank You For Shopping</em>
                </h1>
                <p className="text-gray-600 font-semibold text-2xl mt-8">
                    Your order will be delivered in 3 business days
                </p>
            </div>
            <Footer />
        </div>
    );
}
