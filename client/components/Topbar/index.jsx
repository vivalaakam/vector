import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './topbar.scss';

export default class Topbar extends Component {

  static propTypes = {
    main: PropTypes.object.isRequired,
    hideTopbar: PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);

    this.scroll = ::this.scroll;
    this.initScroll = ::this.initScroll;
    this.toggleTop = ::this.toggleTop;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.initScroll, false);
    if (window.pageYOffset > 100) {
      this.props.hideTopbar(true);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.initScroll, false);
  }

  toggleTop() {
    this.refTop.classList.toggle(style.toggled);
  }

  initScroll() {
    if (!this.scrollEvent) {
      this.scrollEvent = new Promise((resolve) => {
        const curr = window.pageYOffset;
        setTimeout(() => {
          resolve(curr - window.pageYOffset);
        }, 500);
      }).then(this.scroll);
    }
  }

  scroll(distance) {
    if (distance < -100 && !this.props.main.topbarHidden) {
      this.props.hideTopbar(true);
    } else if (distance > 10 && this.props.main.topbarHidden) {
      this.props.hideTopbar(false);
    }

    this.scrollEvent = null;
  }

  render() {
    const mainClassName = classnames(style.Topbar, {
      [style.hidden]: this.props.main.playVideo || this.props.main.topbarHidden,
      [style.tooltip]: this.props.main.topbarHidden === false && window.window.pageYOffset > 200
    });
    return (
      <div className={mainClassName} ref={c => (this.refTop = c)}>
        <input id="hmbrgr" type="checkbox" className={style.checkbox} onChange={this.toggleTop} />
        <div className={style.logo}>
          <label className={style.hamburger} htmlFor="hmbrgr" />
          Vector
        </div>
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
