import React, { useReducer, useState } from "react";

import Courses from "./Courses";
import NewCourse from "./NewCourse";

import initialCourseState from "./initialCourseState";

// could add this
const COURSE_ADD = "COURSE_ADD";
const COURSE_BUILT = "COURSE_BUILT";

const reducer = function reducer(state, action) {
  if (action.type === COURSE_ADD) {
    return [action.payload, ...state];
  }
  if (action.type === COURSE_BUILT) {
    return state.map((course) => {
      if (course.id !== action.payload.id) return course;
      return { ...course, built: !course.built };
    });
  }
  return state;
};

const CourseControl = function control() {
  const [courses, dispatch] = useReducer(reducer, initialCourseState);

  // this function is dispatching some information
  const addCourse = function add({ title, description }) {
    dispatch({
      type: COURSE_ADD,
      payload: {
        title,
        description,
        built: false,
        id: undefined,
      },
    });

    const toggleCourseBuilt = function toggle() {
      dispatch({
        type: COURSE_BUILT,
        payload: {
          title,
          description,
          built: false,
          id: undefined,
        },
      });
    };

    return (
      <div className="CourseControl">
        <NewCourse onSubmit={addCourse} />
        <Courses courses={courses} onBuilt={toggleCourseBuilt} />
      </div>
    );
  };
};
export default CourseControl;
