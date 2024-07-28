import Header from '@/components/mainHeader/mainHeader';
import Navbar from '@/components/navbar/navbar';

export const viewEmployee = () => {

  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="p-20 ">
            <div className="row">
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
          <div className="row">
          <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Multi Filter Select</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="multi-filter-select"
                        className="display table table-striped table-hover"
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>
                              <select className="form-select" >
                                <option value="pending"  >Pending</option>
                                <option value="positive">Proceeding to admission</option>
                                <option value="negative">Negative</option>
                              </select>
                            </th>
                            <th>Date</th>
                            <th>Response</th>
                          </tr>
                        </thead>
                       
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Student 1</td>
                            <td>+91 9090909090</td>
                            <td>Proceed to admission <span style={{color:'green'}} >{'\u2B24'}</span></td>
                            <td>2011/04/25</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque placeat, omnis delectus perferendis dignissimos incidunt veniam quia iusto iste architecto laudantium eaque dolorum? Itaque unde autem perspiciatis. Magnam, corrupti molestiae!</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Student 2</td>
                            <td>+91 9090909090</td>
                            <td>Negative <span style={{color:'red'}} >{'\u2B24'}</span></td>
                            <td>2011/04/25</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque placeat, omnis delectus perferendis dignissimos incidunt veniam quia iusto iste architecto laudantium eaque dolorum? Itaque unde autem perspiciatis. Magnam, corrupti molestiae!</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Student 3</td>
                            <td>+91 9090909090</td>
                            <td>Pending <span style={{color:'yellow'}} >{'\u2B24'}</span></td>
                            <td>2011/04/25</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque placeat, omnis delectus perferendis dignissimos incidunt veniam quia iusto iste architecto laudantium eaque dolorum? Itaque unde autem perspiciatis. Magnam, corrupti molestiae!</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default viewEmployee;
