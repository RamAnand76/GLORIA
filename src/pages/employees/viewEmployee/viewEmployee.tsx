import Header from '@/components/mainHeader/mainHeader';
import Navbar from '@/components/navbar/navbar';

export const viewEmployee = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="p-20 h-screen w-screen bg-orange-200">
            <h3 className="text-orange-400 font-bold mb-4">
              3. Horizontal &amp; Responsive Card
            </h3>
            <div className="bg-white rounded-lg shadow-2xl md:flex">
              <img
                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
                alt="Laptop on Desk"
                className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
              <div className="p-6">
                <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
                  Horizontal Card
                </h2>
                <p className="text-orange-700">Look at me go sideways!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default viewEmployee;
