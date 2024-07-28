import Header from '@/components/header/header';
import Navbar from '@/components/navbar/navbar';
import './viewEmployee.scss';

export const viewEmployee = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="profile-pic">
            <label className="-label" htmlFor="file">
              <span className="glyphicon glyphicon-camera"></span>
              <span>Change Image</span>
            </label>
            <input id="file" type="file" />
            <img
              src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg"
              id="output"
              width="200"
            />
          </div>
          <div className="profile mt-4 flex flex-col justify-center items-center">
            <strong className="font-Manrope text-2xl">
              Name : Samuel john
            </strong>
            <strong className="font-Manrope text-2xl">
              Phone : +91 9999999999
            </strong>
            <strong className="font-Manrope text-2xl">
              Email : Samueljohn999@abc.com
            </strong>
            <strong className="font-Manrope text-2xl">
              Admissions Clossed : 50
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default viewEmployee;
