import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import StatsCards from '../components/StatsCards';

import Footer from '../components/Footer';




const Home = () => {
  return (
    <div className="">
      <Navbar />

      <main className="">
        <Herosection />

        <div className="">

          <StatsCards />

        </div>
      </main>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Home;