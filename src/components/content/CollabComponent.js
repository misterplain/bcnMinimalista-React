import React, { useState } from "react";
import Footer from "../ui/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "react-modal/lib/components/Modal";
import "../../styles/components/CollabComponent.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Your name should have more than 3 characters")
    .required("Required"),
  // phoneNum: Yup.string()
  //   .min(
  //     9,
  //     "Phone number should have more than 3 characters, please include country code"
  //   )
  //   .required("Required"),
  email: Yup.string().min(3, "Too short").required("Required"),
  message: Yup.string()
    .min(2, "You can do better than that")
    .required("Required"),
});

const Collab = (props) => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contact, setContact] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNum: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setContact({
        name: values.name,
        phoneNum: values.phoneNum,
        email: values.email,
        message: values.message,
      });
      setModalIsOpen(true);
      console.log(values);
      resetForm();
    },
  });
  return (
    <React.Fragment>
      <div className="collab-container">
        <div className="collab__title">
          <div className="collab__title-text">
            <p>share your ideas</p>
          </div>
          <div className="collab__title-caption">
            <p>We'd love to hear from you!</p>
          </div>
        </div>
        <div className="collab__form-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="form-control"
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="collab__errors">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                type="number"
                name="phoneNum"
                value={formik.values.phoneNum}
                onChange={formik.handleChange}
                className="form-control"
              />
              {/* {formik.errors.phoneNum && formik.touched.phoneNum ? (
                <div className="collab__errors">{formik.errors.phoneNum}</div>
              ) : null} */}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="form-control"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="collab__errors">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="message">Enter your message here</label>
              <textarea
                type="text"
                name="message"
                rows="4"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="form-control"
              />
              {formik.errors.message && formik.touched.message ? (
                <div className="collab__errors">{formik.errors.message}</div>
              ) : null}
            </div>
            <div className="collab__form-button">
              <button type="submit">Send Feedback</button>
            </div>
          </form>
        </div>
        <div className="collab__modal">
          <Modal
            isOpen={modalIsOpen}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "white",
                overlayClassName: "inform__modal-suggest",
              },
              content: {
                position: "absolute",
                top: "28%",
                left: "10%",
                right: "10%",
                bottom: "30%",
                border: "3px solid green",
                background: "white",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "10px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
            <div className="collab__modal">
              <div className="collab__modal-header">
                <p>Thanks for the collab, {contact.name}!</p>
              </div>
              <div className="collab__modal-body">
                <div className="collab__contact-confirm">
                  We'll contact you at {contact.email} {contact.phoneNum ? "or " +  contact.phoneNum : null} ASAP! 
                </div>
                <button
                onClick={() => {
                  setModalIsOpen(false);
                }}
              >
                close
              </button>
              </div>

            </div>

            {/* <div>name={contact.name}</div>
            <div>number={contact.phoneNum}</div>
            <div>email={contact.email}</div>
            <div>message={contact.message}</div> */}
          </Modal>
        </div>
        <div className="collab__list-container">
          <div className="collab__list-header">
            <p>a big shout out to all our collaborators!</p>
          </div>
          <div className="collab__list">
            {props.collab.map((collab) => {
              return (
                <div key={collab.id} className="collab__list-card">
                  <a href={collab.src} target="_blank" rel="noreferrer">
                    <p className="collab__list-card-text">{collab.name}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Collab;
