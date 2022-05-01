import React, { useState } from "react";
import { COMMENTS } from "../../shared/comments";
import Footer from "../ui/Footer";
import { useFormik } from "formik";
import "../../styles/components/ConnectComponent.css";

const Connect = (props) => {
  //import comments data from shared folder
  const commentsArray = COMMENTS;

  //state management
  const [comment, setComment] = useState({
    name: "",
    comment: "",
    forum: "all",
  });
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
      } else if (all) {
        console.log(all)
        return commentsArray.map((comment, id) => {
          <div key={id}>{comment.message}</div>;
        });
      }
    });
  };

  const addCommentHandler = (values) => {
    console.log(values);
    setCommentList([...commentsArray, comment])
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
      forum: "all",
    },
    onSubmit: (values, { resetForm }) => {
      addCommentHandler({
        name: values.name,
        comment: values.comment,
        forum: values.forum,
      });
      setComment(values.name,values.comment,values.forum)
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
                onClick={(e) => setAll(commentsArray)}
              >
                All
              </button>
              <button
                className="connect__forum-option"
                value="chat"
                onClick={(e) => setForum(e.target.value)}
              >
                Chat
              </button>
              <button
                className="connect__forum-option"
                value="events"
                onClick={(e) => setForum(e.target.value)}
              >
                Events
              </button>
              <button
                className="connect__forum-option"
                value="trade"
                onClick={(e) => setForum(e.target.value)}
              >
                Trade
              </button>
              <button
                className="connect__forum-option"
                value="other"
                onClick={(e) => setForum(e.target.value)}
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
                  onChange={formik.handleChange}
                  className="form-control"
                />
                <label htmlFor="name">Comment</label>
                <input
                  type="text"
                  name="comment"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <button
              onClick={addCommentHandler}
              type="submit"
              className="connect__form-submit"
            >
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
