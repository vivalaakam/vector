import { createAction } from 'redux-actions';

const MAIN = 'main/MAIN_UPDATE';
const PLAY_VIDEO = 'main/PLAY_VIDEO';
const SHOW_COURSES = 'main/SHOW_COURSES';
const HIDE_TOPBAR = 'main/HIDE_TOPBAR';

const $$initialState = {
  playVideo: false
};

export default function main(state = $$initialState, { type, payload }) {
  switch (type) {
    case MAIN:
      return { ...state, ...payload };
    case PLAY_VIDEO:
      return { ...state, playVideo: payload };
    case SHOW_COURSES:
      return { ...state, showCourses: payload };
    case HIDE_TOPBAR:
      return { ...state, topbarHidden: payload };
    default:
      return state
  }
}

const updateMain = createAction(MAIN);

const playVideo = createAction(PLAY_VIDEO);

const showCourses = createAction(SHOW_COURSES);

const hideTopbar = createAction(HIDE_TOPBAR);

export {
  updateMain, playVideo, showCourses, hideTopbar
}
