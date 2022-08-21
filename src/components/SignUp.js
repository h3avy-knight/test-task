import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addData } from "../features/form state/appState";
const SignUp = () => {
  const dispatch = useDispatch();

  const name = "";
  const dateOfBirth = "";
  const sex = "";

  const formik = useFormik({
    initialValues: {
      name,
      dateOfBirth,
      sex,
    },
    onSubmit: (values, { resetForm }) => {
      console.log("FORM SUBMITED SIGNUP", values);
      dispatch(
        addData({
          values,
        })
      );
      resetForm({ values: "" });
    },
  });

  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <p className="fw-bold">
        <u>Personal Details</u>
      </p>
      <div className="row">
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Name
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputDateOfBirth" className="col-form-label">
                Date of Birth or Age
              </label>
            </div>
            <div className="col-auto">
              <input
                type="Date"
                placeholder="Enter Name"
                name="dateOfBirth"
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
                id="inputDateOfBirth"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputSelectSex" className="col-form-label">
                Sex
              </label>
            </div>
            <div className="col">
              <select
                className="form-select"
                id="inputSelectSex"
                name="sex"
                value={formik.values.sex}
                onChange={formik.handleChange}
                aria-label="Default select example"
              >
                <option selected>Enter Sex</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="row pt-2">
        <div className="col-6">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Mobile
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Enter Mobile"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row d-flex justify-content-between">
            <div className="col-6">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    Govt Issued ID
                  </label>
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>ID Type</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Govt ID"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <p className="fw-bold mt-3">
        <u>Contact Details</u>
      </p>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    Guardian Details
                  </label>
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Enter Label</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Guardian Name"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    Email
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="password"
                    placeholder="Enter Email"
                    id="inputPassword6"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row d-flex justify-content-between">
                <div className="col-6 fs-6">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    Emergency Contact No.
                  </label>
                </div>
                <div className="col-6">
                  <input
                    type="password"
                    placeholder="Emergency Contact No"
                    id="inputPassword6"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <p className="fw-bold mt-3">
        <u>Address Details</u>
      </p>
      <div className="row">
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Name
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Enter Name"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                State
              </label>
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Enter State</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                City
              </label>
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Enter city/town/villege</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col text-center">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Country
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Enter Name"
                value="India"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Pincode
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Enter Pincode"
                value="India"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <p className="fw-bold mt-3">
        <u>Other Details</u>
      </p>
      <div className="row">
        <div className="col-3">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Occupation
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Enter Occupation"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Religion
              </label>
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Enter Religion</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Maritial Status
              </label>
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Enter Marital Status</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Blood Group
              </label>
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Group</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <p className="fw-bold mt-3">
        <u>Other Details</u>
      </p>
      <div className="row">
        <div className="col-4">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Nationality
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Enter Name"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-outline-danger px-4 py-2 m-4"
          >
            Cancel
          </button>
          <button type="Submit" className="btn btn-outline-success px-4 py-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
