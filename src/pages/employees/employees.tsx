import Button from '@/components/button/button';
import Header from '@/components/mainHeader/mainHeader';
import Navbar from '@/components/navbar';
import { Link } from 'react-router-dom';

export const Employees = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex align-items-center">
                      <h4 className="card-title">Current Employees</h4>
                      <a
                        className="btn btn-primary btn-round ms-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#addRowModal"
                      >
                        <i className="fa fa-plus"></i>
                        Add Employee
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Modal  */}
                    <div
                      className="modal fade"
                      id="addRowModal"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header border-0">
                            <h5 className="modal-title">
                              <span className="text-xl"> New Employee</span>
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p className="small">Fill the employee details</p>
                            <form>
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="form-group form-group-default">
                                    <label>Employee image</label> <br />
                                    <input type="file" />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="form-group form-group-default">
                                    <label>Name</label>
                                    <input
                                      id="addName"
                                      type="text"
                                      className="form-control"
                                      placeholder="fill name"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="form-group form-group-default">
                                    <label>Email</label>
                                    <input
                                      id="addEmail"
                                      type="email"
                                      className="form-control"
                                      placeholder="fill email"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="form-group form-group-default">
                                    <label>Phone </label>
                                    <input
                                      id="addPhone"
                                      type="tel"
                                      className="form-control"
                                      placeholder="fill phone"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="form-group form-group-default ">
                                    <label>Adress </label>
                                    <input
                                      id="addAdress"
                                      type="text"
                                      className="form-control"
                                      placeholder="fill Adress"
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer border-0">
                            <button
                              type="button"
                              id="addRowButton"
                              className="btn btn-primary"
                            >
                              Add
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table
                        id="add-row"
                        className="display table table-striped table-hover"
                      >
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Employee</th>
                            <th></th>
                            <th style={{ width: '10%' }}>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>123</td>
                            <td>
                              {''}
                              <img src="assets/img/sauro.jpg" alt="" />
                              Someone
                            </td>
                            <td>
                              <Link className="text-white btn btn-primary" to="/view-profile">View Profile</Link>
                            </td>
                            <td>
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-primary btn-lg"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-danger"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>123</td>
                            <td>
                              {''}
                              <img src="assets/img/sauro.jpg" alt="" />
                              Someone
                            </td>
                            <td>
                            <Link className="text-white btn btn-primary" to="/view-profile">View Profile</Link>
                            </td>
                            <td>
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-primary btn-lg"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-danger"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>123</td>
                            <td>
                              {''}
                              <img src="assets/img/sauro.jpg" alt="" />
                              Someone
                            </td>
                            <td>
                            <Link className="text-white btn btn-primary" to="/view-profile">View Profile</Link>
                            </td>
                            <td>
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-primary btn-lg"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-danger"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>123</td>
                            <td>
                              {''}
                              <img src="assets/img/sauro.jpg" alt="" />
                              Someone
                            </td>
                            <td>
                            <Link className="text-white btn btn-primary" to="/view-profile">View Profile</Link>
                            </td>
                            <td>
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-primary btn-lg"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-danger"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>123</td>
                            <td>
                              {''}
                              <img src="assets/img/sauro.jpg" alt="" />
                              Someone
                            </td>
                            <td>
                            <Link className="text-white btn btn-primary" to="/view-profile">View Profile</Link>
                            </td>
                            <td>
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-primary btn-lg"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-danger"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>123</td>
                            <td>
                              {''}
                              <img src="assets/img/sauro.jpg" alt="" />
                              Someone
                            </td>
                            <td>
                            <Link className="text-white btn btn-primary" to="/view-profile">View Profile</Link>
                            </td>
                            <td>
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-primary btn-lg"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-danger"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>123</td>
                            <td>
                              {''}
                              <img src="assets/img/sauro.jpg" alt="" />
                              Someone
                            </td>
                            <td>
                            <Link className="text-white btn btn-primary" to="/view-profile">View Profile</Link>
                            </td>
                            <td>
                              <div className="form-button-action">
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-primary btn-lg"
                                  data-original-title="Edit Task"
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  title=""
                                  className="btn btn-link btn-danger"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times"></i>
                                </button>
                              </div>
                            </td>
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
    </div>
  );
};

export default Employees;
