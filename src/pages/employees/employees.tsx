import Button from '@/components/button/button';

export const Employees = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="row"></div>
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
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header border-0">
                        <h5 className="modal-title">
                          <span className="fw-mediumbold"> New</span>
                          <span className="fw-light"> Row </span>
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
                        <p className="small">
                          Create a new row using this form, make sure you fill
                          them all
                        </p>
                        <form>
                          <div className="row">
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
                            <div className="col-md-6 pe-0">
                              <div className="form-group form-group-default">
                                <label>Position</label>
                                <input
                                  id="addPosition"
                                  type="text"
                                  className="form-control"
                                  placeholder="fill position"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group form-group-default">
                                <label>Office</label>
                                <input
                                  id="addOffice"
                                  type="text"
                                  className="form-control"
                                  placeholder="fill office"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <div className="modal-footer border-0">
                          <button type="button" id="addRowButton" className="btn btn-primary">
                            Add
                          </button>
                          <button type="button" className="btn btn-danger" data-dismiss="modal">
                            Close
                          </button>
                        </div> */}
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
                          <Button label="View Profile" />
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
                          <Button label="View Profile" />
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
                          <Button label="View Profile" />
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
                          <Button label="View Profile" />
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
                          <Button label="View Profile" />
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
                          <Button label="View Profile" />
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
                          <Button label="View Profile" />
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
  );
};

export default Employees;
