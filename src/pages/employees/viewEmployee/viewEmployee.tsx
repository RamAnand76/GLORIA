import Header from '@/components/mainHeader/mainHeader';
import Navbar from '@/components/navbar/navbar';

export const viewEmployee = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="p-20 h-screen ">

            <div className="bg-white rounded-lg shadow-3xl md:flex">
              <img
                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
                alt="Laptop on Desk"
                className="md:w-1/3 rounded-2xl"
              />
              <div className="p-6 flex flex-col gap-2">
                <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
                  Employee Name
                </h2>
                <a className="text-black-700">employeemail@abc.com</a>
                <a className="text-black-700">+91 9999999999</a>
                <p>Admissions clossed : 36</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default viewEmployee;
