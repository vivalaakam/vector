import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppWidget from '../components/App/index';
import { playVideo, showCourses, hideTopbar } from '../reducers/main';

const actionsDispatch = dispatch => ({
  actions: bindActionCreators({ playVideo, showCourses, hideTopbar }, dispatch)
});

function App({ main, actions }) {
  return (
    <AppWidget {...{ main, actions }} />
  );
}

App.propTypes = {
  main: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(state => state, actionsDispatch)(App);
