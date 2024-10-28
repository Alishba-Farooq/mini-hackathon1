import Navbar from './Navbar';
import Footer from './Footer';
import Herosection from './Herosection'; // Import the HeroSection
import Feature from './Feature';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Herosection /> {/* Add the HeroSection right below the Navbar */}
      <Feature/>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
