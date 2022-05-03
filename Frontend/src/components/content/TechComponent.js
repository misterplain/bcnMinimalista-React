import React, { useState } from "react";
import { TOOLS } from "../../shared/tools";
import Footer from "../ui/Footer";
import Modal from "react-modal/lib/components/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/components/TechComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tools = TOOLS

const validationSchema = Yup.object({
  kilometers: Yup.string().required("Required. If none, impressive, you may set to 0"),
  fastFashion: Yup.string().required("Required. If none, impressive, you may set to 0"),
  flightHours: Yup.string().required("Required. If none, impressive, you may set to 0"),
  meat: Yup.string().required("Required. If none, impressive, you may set to 0"),
});

const Tech = (props) => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [answer, setAnswer] = useState(0);
  const formik = useFormik({
    initialValues: {
      kilometers: "",
      fastFashion: "",
      flightHours: "",
      meat: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setAnswer(
        values.kilometers * 1.2 +
          values.fastFashion * 100.96 +
          values.flightHours * 24 +
          values.meat * 125
      );
      setModalIsOpen(true);
      console.log(answer);
      resetForm();
    },
  });

  let answerMonth = answer * 4;
  let answerYear = answer * 52;

  return (
    <React.Fragment>
      <div className="tech-container">
        <div className="tech__title">
          <p className="tech__title-text">tech and tools</p>
        </div>
        <div className="tech__caption-body">
          <div className="tech__caption-text">
            Megacorporations must be held accountable for their contribution to
            global warming through policy and taxation, don’t lose sight of
            that! However, on an individual basis, it’s helpful to check in on
            your part too. Check in below with your water footprint, measured in
            gallons of water.
          </div>
        </div>
        <div className="tech__form-container">
          <form className="tech__form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="kilometers" md={2}></label>
              <div md={10}>
                <input
                  type="number"
                  id="kilometers"
                  name="kilometers"
                  placeholder="Kilometers driven per week"
                  value={formik.values.kilometers}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                              {formik.errors.kilometers && formik.touched.kilometers ? (
                <div className="tech__errors">{formik.errors.kilometers}</div>
              ) : null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="fastFashion" md={2} />
              <div>
                <input
                  type="number"
                  id="fastFashion"
                  name="fastFashion"
                  placeholder="Fast fashion items purchased per year"
                  value={formik.values.fastFashion}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.fastFashion && formik.touched.fastFashion ? (
                <div className="tech__errors">{formik.errors.fastFashion}</div>
              ) : null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="flightHours" md={2}></label>
              <div md={10}>
                <input
                  type="number"
                  id="flightHours"
                  name="flightHours"
                  placeholder="Flight hours over a year"
                  value={formik.values.flightHours}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.flightHours && formik.touched.flightHours ? (
                <div className="tech__errors">{formik.errors.flightHours}</div>
              ) : null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="meat" md={2}></label>
              <div md={10}>
                <input
                  type="number"
                  id="meat"
                  name="meat"
                  placeholder="Servings of meat consumed per week"
                  value={formik.values.meat}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.meat && formik.touched.meat ? (
                <div className="tech__errors">{formik.errors.meat}</div>
              ) : null}
              </div>
            </div>
            <div className="tech__form-buttons">
              <button type="submit">Check Footprint</button>
            </div>
          </form>
        </div>
        <div className="tech__modal">
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
                bottom: "25%",
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
            <div className="tech__modal">
              <div className="tech__modal-header">
                <p>Water Footprint</p>
              </div>
              <div className="tech__modal-body">
                <p className="tech__modal-text">
                  Your weekly water footprint is {answer} gallons
                </p>
                <p className="tech__modal-text">
                  Which is {answerMonth} over the course of a month
                </p>
                <p className="tech__modal-text">
                  And {answerYear} over the course of a year
                </p>
                <button
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                  className="tech__modal-button"
                >
                  close
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="tech__tools-container">
          {tools.map((tools) => {
            return (
              <div key={tools.id} className="tech__tools-card">
                <a href={tools.src} target="_blank" rel="noreferrer">
                  <p className="tech__tools-text">{tools.name}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Tech;
