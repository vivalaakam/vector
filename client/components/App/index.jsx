import React, { PropTypes } from 'react';
import Topbar from '../Topbar';
import Video from '../Video';
import Cources from '../Cources';
import style from './app.scss';

export default function App({ main, actions }) {
  return (
    <div className={style.App}>
      <Topbar hideTopbar={actions.hideTopbar} main={main} />
      <Video actions={actions} main={main} />
      <Cources showCourses={actions.showCourses} main={main} />
    </div>
  );
}

App.propTypes = {
  main: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
