import React from "react";
import Course from "./Course";

const Courses = function courses({ courses = [], onBuilt }) {
  return (
    <section className="Courses">
      <h2>Courses ({courses.length})</h2>
      {courses.map((course) => (
        <Course key={course.id} course={course} onBuilt={onBuilt} />
      ))}
    </section>
  );
};

export default Courses;
