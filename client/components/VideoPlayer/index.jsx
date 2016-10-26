import React, { Component } from 'react';
import style from './style.scss';

export default class VideoPlayer extends Component {
  constructor(...args) {
    super(...args);
    this.onLoad = ::this.onLoad;
  }

  onLoad() {
    const ratio = document.documentElement.clientWidth / this.refVideo.videoWidth;
    this.refVideo.classList.remove(style.portrait, style.landscape);
    this.refVideo.classList.add(style[ratio > 1.33 ? 'portrait' : 'landscape'])
  }

  componentDidMount() {
    window.addEventListener('resize', this.onLoad, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onLoad, false);
  }

  render() {
    const { stopVideo } = this.props;
    return (
      <div className={style.VideoPlayer }>
        <button className={style.hide} onClick={stopVideo}></button>
        <video
          className={ style.video}
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
