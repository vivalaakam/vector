import React, { Component, PropTypes } from 'react';
import Topbar from '../Topbar/Topbar.jsx';
import Video from '../Video/Video.jsx';
import style from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Topbar main={this.props.main} />
        <Video actions={this.props.actions} main={this.props.main} />
      </div>
    );
  }
}
