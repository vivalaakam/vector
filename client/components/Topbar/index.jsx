import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './topbar.scss';

export default class Topbar extends Component {

  static propTypes = {
    main: PropTypes.object.isRequired
  };

  constructor(...args) {
    super(...args);
    this.onScroll = ::this.onScroll;
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    //  window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    /* eslint no-console: ["error", { allow: ["log"] }] */
    console.log(this.props.main);
  }

  render() {
    const mainClassName = classnames(style.Topbar, {
      [style.hidden]: this.props.main.playVideo || this.props.main.topbarHidden
    });
    return (
      <div className={mainClassName}>
        <div className={style.logo}>Vector</div>
        <ul className={style.mainNav}>
          <li>
            <a href="/" className={style.link}>Курсы</a>
          </li>
          <li>
            <a href="/" className={style.link}>Материалы</a>
          </li>
          <li>
            <a href="/" className={style.link}>Проекты</a>
          </li>
          <li>
            <a href="/" className={style.link}>Партнерство</a>
          </li>
          <li>
            <a href="/" className={style.link}>О школе</a>
          </li>
        </ul>
        <ul className={style.mainAuth}>
          <li>
            <a href="/" className={style.link}>Войти</a>
          </li>
          <li>
            <a href="/" className={classnames(style.link, style.register)}>Зарегистрироваться</a>
          </li>
        </ul>
      </div>
    );
  }
}
