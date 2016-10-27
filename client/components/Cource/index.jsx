import React, { PropTypes } from 'react';
import style from './cource.scss';

export default function Cource({ counter, description, title, image }) {
  return (
    <div className={style.Cource}>
      <div className={style.counter}>
        {counter}
      </div>

      <div className={style.description}>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.text}>
          {description}
        </div>
      </div>
      <img src={image} className={style.image} alt={title} />
    </div>
  );
}

Cource.propTypes = {
  counter: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
