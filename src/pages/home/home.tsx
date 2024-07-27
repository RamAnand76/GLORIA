import Header from '@/components/mainHeader/mainHeader';
import Navbar from '@/components/navbar';

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-primary bubble-shadow-small">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">total students</p>
                          <h4 className="card-title">1,294</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-info bubble-shadow-small">
                          <i className="fas fa-user-check"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">admissions</p>
                          <h4 className="card-title">467</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="table" id="customers_table">
                <section
                  className="table__header"
                  style={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  <h1>Top performers of the Month</h1>
                </section>
                <section className="table__body">
                  <table>
                    <thead>
                      <tr>
                        <th> Employee Name </th>
                        <th> closed admissions </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {''}
                          <img src="assets/img/sauro.jpg" alt="" />
                          Albert Einstein
                        </td>
                        <td>
                          {''}
                          <strong>29 </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {''}
                          <img src="assets/img/sauro.jpg" alt="" />
                          Elon Musk
                        </td>
                        <td>
                          {''}
                          <strong>20 </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {''}
                          <img src="assets/img/sauro.jpg" alt="" />
                          Jeff Bezos
                        </td>
                        <td>
                          {''}
                          <strong>19 </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {''}
                          <img src="assets/img/sauro.jpg" alt="" />
                          Bill Gates
                        </td>
                        <td>
                          {''}
                          <strong>19 </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {''}
                          <img src="assets/img/sauro.jpg" alt="" />
                          Nagendra jodi
                        </td>
                        <td>
                          {''}
                          <strong>16 </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {''}
                          <img src="assets/img/sauro.jpg" alt="" />
                          Someone
                        </td>
                        <td>
                          {''}
                          <strong>10 </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
