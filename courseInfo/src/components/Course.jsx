const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      <strong>
        {name} {exercises}
      </strong>
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => (sum += part.exercises), 0);

  return (
    <div>
      <p>
        <strong>Total of {total} exercises</strong>
      </p>
    </div>
  );
};

const Course = (props) => {
  const { course } = props;
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
