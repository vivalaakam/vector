import React, { Component } from 'react';
import style from './style.scss';

export default class Cource extends Component {
  render() {
    const { counter, description, title, image } = this.props;
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
        <img src={image} className={style.image} />
      </div>
    );
  }
}
