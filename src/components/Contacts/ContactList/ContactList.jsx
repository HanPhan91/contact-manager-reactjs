import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let ContactList = () => {
  let [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: "",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    function fetchData() {
      try {
        let response = ContactService.getAllContacts();
        console.log(response.data);
      } catch (error) {}
    }
    fetchData();
  }, []);

  let { loading, contacts, errorMessage } = state;

  return (
    <React.Fragment>
      <section className="contact-search p-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold">
                Contact Manager
                <Link
                  to={"/contacts/list/add"}
                  className="btn btn-primary ms-2"
                >
                  <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                  New
                </Link>
              </p>
              <p className="fst-italic">fawfawfawfwa</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form className="row">
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Names"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input className="btn btn-outline-dark" type="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="https://www.freeiconspng.com/uploads/account-profile-icon-1.png"
                        className="img-fluid contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold"> Test</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile: <span className="fw-bold"> Test</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email: <span className="fw-bold"> Test</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        to={"/contacts/view/:contactId"}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye" />
                      </Link>
                      <Link
                        to={"/contacts/edit/:contactId"}
                        className="btn btn-primary my-1"
                      >
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="https://www.freeiconspng.com/uploads/account-profile-icon-1.png"
                        className="img-fluid contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold"> Test</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile: <span className="fw-bold"> Test</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email: <span className="fw-bold"> Test</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        to={"/contacts/view/:contactId"}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye" />
                      </Link>
                      <Link
                        to={"/contacts/edit/:contactId"}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default ContactList;
