import React from 'react';
import classnames from 'classnames';
import style from './style.scss';

export default function Close({ onClick, className = '' }) {
  return (
    <button className={classnames(style.Close, className) } onClick={onClick}></button>
  );
}
