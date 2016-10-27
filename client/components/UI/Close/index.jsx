import React, { PropTypes } from 'react';
import classnames from 'classnames';
import style from './close.scss';

export default function Close({ onClick, className = '' }) {
  return (
    <button className={classnames(style.Close, className)} onClick={onClick} />
  );
}

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
