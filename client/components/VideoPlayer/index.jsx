import React, { Component, PropTypes } from 'react';
import Close from '../UI/Close';
import style from './videoPlayer.scss';

export default class VideoPlayer extends Component {
  static propTypes = {
    stopVideo: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor(...args) {
    super(...args);
    this.onLoad = ::this.onLoad;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onLoad, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onLoad, false);
  }

  onLoad() {
    const ratio = document.documentElement.clientWidth / this.refVideo.videoWidth;
    this.refVideo.classList.remove(style.portrait, style.landscape);
    this.refVideo.classList.add(style[ratio > 1.33 ? 'portrait' : 'landscape']);
  }

  render() {
    const { stopVideo } = this.props;
    return (
      <div className={style.VideoPlayer}>
        <Close className={style.hide} onClick={stopVideo} />
        <video
          className={style.video}
          muted
          onLoadedMetadata={::this.onLoad}
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
