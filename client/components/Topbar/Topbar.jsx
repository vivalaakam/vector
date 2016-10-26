import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './Topbar.scss'

export default class Topbar extends Component {
  render() {
    const mainClassName = classnames(style.Topbar, {
      [style.hidden]: this.props.main.playVideo
    });
    return (
      <div className={mainClassName}>
        <div className={style.logo}>Vector</div>
      </div>
    )
  }
}
