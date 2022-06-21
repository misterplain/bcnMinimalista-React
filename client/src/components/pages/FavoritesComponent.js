import React from "react";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../styles/components/FavoritesComponent.css";

const Favorites = (props) => {
  return (
    <div className='favorites__title'>
      <p className='favorites__title-text'>my favorites</p>
      {/* {props.favorites.map((favorite) => {
        <div className='inform__list-row' key={favorite.id}>
          <img src={favorite.img} alt={favorite.alt} className='inform__list-img' />

          <div className='inform__list-body'>
            <a href={favorite.src} target='_blank' rel='noreferrer'>
              <p className='inform__list-body-header'>{favorite.title}</p>
              <p className='inform__list-body-caption'>{favorite.caption}</p>
            </a>
          </div>
        </div>;
      })} */}
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
