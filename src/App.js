// // React Exercise
// // Exercise 1.1 - 1.2

import React from "react";

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   );
// };

// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         part1={part1}
//         part2={part2}
//         part3={part3}
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//       <Total
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//     </div>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part1}: {props.exercises1}
//       </p>
//       <p>
//         {props.part2}: {props.exercises2}
//       </p>
//       <p>
//         {props.part3}: {props.exercises3}
//       </p>
//     </div>
//   );
// };

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises:{" "}
//         {props.exercises1 + props.exercises2 + props.exercises3}
//       </p>
//     </div>
//   );
// };

// export default App;

// Exercise 1.3

// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = {
//     name: "Fundamentals of React",
//     exercises: 10,
//   };
//   const part2 = {
//     name: "Using props to pass data",
//     exercises: 7,
//   };
//   const part3 = {
//     name: "State of a component",
//     exercises: 14,
//   };

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1.name} {part1.exercises}
//       </p>
//       <p>
//         {" "}
//         {part2.name} {part2.exercises}
//       </p>
//       <p>
//         {part3.name} {part3.exercises}
//       </p>
//     </div>
//   );
// };

// Exercise 1.4
// const App = (props) => {
//   const course = "Half Stack application development";
//   const parts = [
//     {
//       name: "Fundamentals of React",
//       exercises: 10,
//     },
//     {
//       name: "Using props to pass data",
//       exercises: 7,
//     },
//     {
//       name: "State of a component",
//       exercises: 14,
//     },
//   ];

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   );
// };
// let Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   );
// };

// let Content = (props) => {
//   return (
//     <div>
//       <Parts name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Parts name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Parts name={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   );
// };

// let Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises:
//         {props.parts[0].exercises +
//           props.parts[1].exercises +
//           props.parts[2].exercises}
//       </p>
//     </div>
//   );
// };

// let Parts = (props) => {
//   return (
//     <p>
//       {props.name} {props.exercises}
//     </p>
//   );
// };

// Exercise 1.5
const App = (props) => {
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
let Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
let Content = (props) => {
  return (
    <div>
      <Parts name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Parts name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Parts name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

let Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises:
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

let Parts = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

export default App;
