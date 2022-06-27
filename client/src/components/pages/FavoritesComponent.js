import React from "react";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFavorites } from '../../actions/favorites';
import "../../styles/components/FavoritesComponent.css";
import axios from "axios";

const Favorites = ({ getFavorites }) => {
  const [favorites, setFavorites] = React.useState([]);
  function deleteFavorite(blogId) {
    console.log(blogId);
    axios.delete(
      `${process.env.REACT_APP_API}/v1/api/favorites/${blogId}`,
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        }
      }
    )
      .then((data) => setFavorites(data.data))
      .catch((e) => console.log(e));
  }
  React.useEffect(() => {
    axios.get(
      `${process.env.REACT_APP_API}/v1/api/favorites`,
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        }
      }
    )
      .then((data) => setFavorites(data.data))
      .catch((e) => console.log(e));
  }, [])
  return (
    <div className='favorites__title'>
      <p className='favorites__title-text'>my favorites</p>
      {
        favorites.map((inform) => (
          <div className='inform__list-row' key={inform.id}>
            <img
              src={inform.img}
              alt={inform.alt}
              className='inform__list-img'
            />

            <div className='inform__list-body'>
              <a href={inform.src} target='_blank' rel='noreferrer'>
                <p className='inform__list-body-header'>{inform.title}</p>
                <p className='inform__list-body-caption'>
                  {inform.caption}
                </p>
              </a>
            </div>
            <button
              onClick={() => deleteFavorite(inform._id)
              }
              className='inform__fav-btn'
              style={{ padding: 4 }}
              outline
            >
              <i className='fa fa-heart' />
            </button>
          </div>
        ))
      }
    </div>
  );
};

Favorites.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.error,
});
export default connect(mapStateToProps)(Favorites);
