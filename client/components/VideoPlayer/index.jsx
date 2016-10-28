import React, { Component, PropTypes } from 'react';
import getCapture from '../../helpers/getCapture';
import Close from '../UI/Close';
import style from './videoPlayer.scss';

export default class VideoPlayer extends Component {
  static propTypes = {
    stopVideo: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor(...args) {
    super(...args);

    this.waitAnimation = new Promise(resolve => setTimeout(resolve, 1000));
    this.onLoad = ::this.onLoad;
    this.resize = ::this.resize;
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize, false);
  }

  onLoad() {
    this.waitAnimation.then(() => {
      this.refVideo.play();
    });
    this.resize();
  }

  stopVideo() {
    const { stopVideo } = this.props;
    this.refVideo.pause();
    this.refVideo.poster = getCapture(this.refVideo);
    stopVideo();
  }

  resize() {
    const ratio = document.documentElement.clientWidth / this.refVideo.videoWidth;
    this.refVideo.classList.remove(style.portrait, style.landscape);
    this.refVideo.classList.add(style[ratio > 1.33 ? 'portrait' : 'landscape']);
  }

  ended() {
    this.stopVideo();
  }

  render() {
    return (
      <div className={style.VideoPlayer}>
        <Close className={style.hide} onClick={::this.stopVideo} />
        <video
          crossOrigin="Anonymous"
          className={style.video}
          muted
          onLoadedMetadata={::this.onLoad}
          onEnded={::this.ended}
          ref={c => (this.refVideo = c)}
        >
          <source
            src={this.props.url}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}
