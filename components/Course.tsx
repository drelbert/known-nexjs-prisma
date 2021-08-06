import React from "react";

const Course = function handleCourse({ course, onBuilt }) {
  const build = function handleBuild() {
    onBuilt(course.id);
  };

  return (
    <article className="Course">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="Course-controls">
        <label className="Course-built">
          <input type="checkbox" checked={course.built} onChange={build} />
        </label>
      </div>
    </article>
  );
};

export default Course;
