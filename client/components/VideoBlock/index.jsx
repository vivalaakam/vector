import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './videoBlock.scss';

export default class VideoBlock extends Component {

  static propTypes = {
    playVideo: PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);
    this.onLoad = ::this.onLoad;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onLoad, false);
    this.onLoad();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onLoad, false);
  }

  onLoad() {
    const ratioW = document.documentElement.clientWidth / this.refImage.clientWidth;
    const ratioH = 720 / this.refImage.clientHeight;
    this.refImage.classList.remove(style.portrait, style.landscape);
    this.refImage.classList.add(style[ratioW > ratioH ? 'portrait' : 'landscape']);
  }

  render() {
    const { playVideo } = this.props;
    return (
      <div className={style.VideoBlock}>
        <div className={style.main}>
          <div className={style.title}>
            Онлайн-школа городских предпринимателей
          </div>
          <div className={style.navigation}>
            <button className={classnames(style.btn, style.start)}>
              Начать обучение
            </button>
            <button className={classnames(style.btn, style.play)} onClick={playVideo}>
              Посмотреть видео
            </button>
          </div>
        </div>
        <img
          src={require('./back.png')}
          className={style.image}
          onLoad={this.onLoad}
          ref={c => (this.refImage = c)}
          alt="back"
        />
        <div className={style.scroll} />
      </div>
    );
  }
}
