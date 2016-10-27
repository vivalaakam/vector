import { createAction } from 'redux-actions';

const MAIN = 'main/MAIN_UPDATE';
const PLAY_VIDEO = 'main/PLAY_VIDEO';
const SHOW_COURSES = 'main/SHOW_COURSES';

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
    default:
      return state
  }
}

const updateMain = createAction(MAIN);

const playVideo = createAction(PLAY_VIDEO);

const showCourses = createAction(SHOW_COURSES);

export {
  updateMain, playVideo, showCourses
}
