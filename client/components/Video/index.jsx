import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import style from './video.scss';
import VideoBlock from '../VideoBlock';
import VideoPlayer from '../VideoPlayer';

const transitionBlockNames = {
  enter: style.blockEnter,
  enterActive: style.blockEnterActive,
  leave: style.blockLeave,
  leaveActive: style.blockLeaveActive
};

const transitionPlayerNames = {
  enter: style.playerEnter,
  enterActive: style.playerEnterActive,
  leave: style.playerLeave,
  leaveActive: style.playerLeaveActive
};

const ANIMATION = 1000;

export default class Video extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    main: PropTypes.object.isRequired
  };

  playVideo() {
    this.props.actions.playVideo(true);
  }

  stopVideo() {
    this.props.actions.playVideo(false);
  }

  renderBlock() {
    if (!this.props.main.playVideo) {
      return (<VideoBlock key="block" playVideo={::this.playVideo} />);
    }
    return null;
  }

  renderVideo() {
    if (this.props.main.playVideo) {
      return (
        <VideoPlayer
          key="video"
          stopVideo={::this.stopVideo}
          url={this.props.main.videoUrl}
        />
      );
    }
    return null;
  }

  render() {
    const activeClassName = classnames(style.Video, {
      [style.playVideo]: this.props.main.playVideo
    });
    return (
      <div className={activeClassName}>
        <ReactCSSTransitionGroup
          transitionName={transitionBlockNames}
          transitionEnterTimeout={ANIMATION}
          transitionLeaveTimeout={ANIMATION}
        >
          {this.renderBlock()}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={transitionPlayerNames}
          transitionEnterTimeout={ANIMATION}
          transitionLeaveTimeout={ANIMATION}
        >
          {this.renderVideo()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
