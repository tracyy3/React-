// Exercise 1.3 (App function and refactor to display elements inside App function)

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//     <h1>{course}</h1>
//     <p>{part1.name} {part1.exercises }</p>
//     <p> {part2.name} {part2.exercises}</p>
//     <p>{part3.name} {part3.exercises}</p>

//     </div>
//   )
// }

// Exercise 1.4 (Put objects into arrays and modify the application to display the information)
// const App = (props) => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }
// let Header = (props) => {
// return (
//   <div>
//     <h1>{props.course}</h1>
//   </div>
// )
// }
//  let Content = (props) => {
// return(
//   <div>
//     <Parts name={props.parts[0].name} exercises={props.parts[0].exercises}/>
//     <Parts name={props.parts[1].name} exercises={props.parts[1].exercises}/>
//     <Parts name={props.parts[2].name} exercises={props.parts[2].exercises}/>
//   </div>
// )
// }

// let Parts = (props) => {
//   return (
// <p>
//   {props.name} {props.exercises}
// </p>
//   )
// }

// let Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises:
//         {props.parts[0].exercises +
//         props.parts[1].exercises +
//         props.parts[2].exercises}
//         </p>
//     </div>
//   )
// }
// Exercise 1.5 (Put all into one object and fix the application to display the infor)
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

  return (
    <div>
      <h1>{course.name}</h1>
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
