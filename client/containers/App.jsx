import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppWidget from '../components/App/index';
import { playVideo, showCourses } from '../reducers/main';

@connect(
  state => ({
    main: state.main
  }),
  dispatch => ({
    actions: bindActionCreators({ playVideo, showCourses }, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {};

  render() {
    const { main, actions, dispatch } = this.props;

    return (
      <AppWidget {...{ main, actions, dispatch }} />
    );
  }
}
