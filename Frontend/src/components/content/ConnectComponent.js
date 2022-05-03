import React, { useState, useEffect } from "react";
import { COMMENTS } from "../../shared/comments";
import Footer from "../ui/Footer";
import { useFormik } from "formik";
import "../../styles/components/ConnectComponent.css";

const Connect = (props) => {
  //import comments data from shared folder
  const commentsArray = COMMENTS;

  //state management
  const [all, setAll] = useState(commentsArray);
  const [commentList, setCommentList] = useState(commentsArray);
  const [forum, setForum] = useState("");

  //set forum value in form / filter comments in comments list
  const filterItems = () => {
    return commentList.map((comment, id) => {
      if (comment.forum === forum) {
        return (
          <div key={id} className="connect__comment-body">
            <div className="connect__comment-user">{comment.name}</div>
            <div className="connect__comment-message">{comment.message}</div>
            <div className="connect__comment-date">
              Posted on {comment.date} to {comment.forum}
            </div>
          </div>
        );
      }
      if (all === true) {
        return (
          <div key={id} className="connect__comment-body">
            <div className="connect__comment-user">{comment.name}</div>
            <div className="connect__comment-message">{comment.message}</div>
            <div className="connect__comment-date">
              Posted on {comment.date} to {comment.forum}
            </div>
          </div>
        );
      } 
    });
  };

  useEffect(() => {
    console.log(forum);
    console.log(formik.values);
  }, [forum]);


  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
      forum: "all",
    },
    onSubmit: (values, { resetForm }) => {
      setCommentList([...commentList, values]);
      console.log(commentList);
      resetForm();
    },
  });

  return (
    <React.Fragment>
      <div className="connect-container">
        <div className="connect__title">
          <p className="connect__title-text">chat with your community</p>
        </div>
        <div className="connect__form-container">
          <form className="connect__form" onSubmit={formik.handleSubmit}>
            <div className="connect__forum-options">
              <button
                className="connect__forum-option"
                value="all"
                onClick={(e) => {
                  setForum(e.target.value);
                  setAll(true);

                  formik.setFieldValue("forum", e.target.value);
                  console.log(forum);
                }}
              >
                All
              </button>
              <button
                className="connect__forum-option"
                value="chat"
                onClick={(e) => {
                  setForum(e.target.value);
                  setAll(false);
                  formik.setFieldValue("forum", e.target.value);
                  console.log(forum);
                }}
              >
                Chat
              </button>
              <button
                className="connect__forum-option"
                value="events"
                onClick={(e) => {
                  setForum(e.target.value);
                  setAll(false);
                  formik.setFieldValue("forum", e.target.value);
                  console.log(forum);
                }}
              >
                Events
              </button>
              <button
                className="connect__forum-option"
                value="trade"
                onClick={(e) => {
                  setForum(e.target.value);
                  setAll(false);
                  formik.setFieldValue("forum", e.target.value);
                  console.log(forum);
                }}
              >
                Trade
              </button>
              <button
                className="connect__forum-option"
                value="other"
                onClick={(e) => {
                  setForum(e.target.value);
                  setAll(false);
                  formik.setFieldValue("forum", e.target.value);
                  console.log(forum);
                }}
              >
                Other
              </button>
            </div>
            <div className="connect__form-input">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  required={true}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                <label htmlFor="name">Comment</label>
                <input
                  type="text"
                  name="comment"
                  required={true}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="connect__form-submit">
              submit
            </button>
          </form>
        </div>
        <div className="connect__comments-container">{filterItems()}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Connect;