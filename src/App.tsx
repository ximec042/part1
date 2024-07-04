const Header = ({ course }: any) => {
  console.log("Course", course);
  return <h1>{course}</h1>;
};
const Part = ({ name, exercises }: any) => {
  console.log("part", name);
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }: any) => {
  console.log({ parts });
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};



const Total = ({ totalExercises }:any) => {
  return <p>Number of exercises {totalExercises}</p>;
}


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,                                                                        
      },
    ],
  };

  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <div>
        <Content parts={course.parts} />
      </div>
      <Total  totalExercises={totalExercises}  />
    </div>
  );
};

export default App;
