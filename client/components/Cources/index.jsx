import React, { Component } from 'react';
import classnames from 'classnames';
import Cource from '../Cource';
import Close from '../UI/Close';
import style from './style.scss';

export default class Cources extends Component {

  hideCourses() {
    this.props.showCourses(false);
  }

  showCourses() {
    this.props.showCourses(true);
  }

  render() {
    const classname = classnames(style.Cources, { [style.top]: this.props.main.showCourses });
    return (
      <div className={classname}>
        <div className={style.wrapper}>
          <div className={style.info}>
            <h2 className={style.title}>Онлайн-курсы</h2>
            <p className={style.text}>
              Наши курсы — практические, они помогают в формировании образа мышления у горожанина, и формировании спроса
              на городские инициативы
            </p>
            <button className={style.showAll} onClick={::this.showCourses}>
              Посмотреть все курсы
            </button>
          </div>
          <div className={style.cources}>
            <div className={style.courcesWrapper}>
              <Cource
                counter="6"
                title="Экскурсии как бизнес"
                description="Новый курс о том, как стать независимым гидом и проводить экскурсии"
                image="/cource_6.png"
              />
              <Cource
                counter="5"
                title="Как создать спортивный проект"
                description="Новый курс о том, как стать независимым гидом и проводить экскурсии"
                image="/cource_5.png"
              />
              <Cource
                counter="4"
                title="Экскурсии как бизнес"
                description="Новый курс о том, как стать независимым гидом и проводить экскурсии"
                image="/cource_6.png"
              />
              <Cource
                counter="3"
                title="Как создать спортивный проект"
                description="Новый курс о том, как стать независимым гидом и проводить экскурсии"
                image="/cource_5.png"
              />
            </div>
          </div>
        </div>
        <div className={style.back}>
          <Close className={style.close} onClick={::this.hideCourses}></Close>
        </div>
      </div>
    );
  }
}
