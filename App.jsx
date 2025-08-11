
import Category from './Category';
import ClassList from './ClassList';
import Students from './Students';


function App() {
  const names = ['Aarav', 'Bhavna', 'Chirag', 'Deepa'];
  const students = [
    {
      name: 'Aarav',
      age: 20,
    },
    {
      name: 'Bhavna',
      age: 22,
    },
    {
      name: 'Chirag',
      age: 19,
    },
  ];

  const classes = [
    {
      classname: 'Class A',
      students: ['Aarav', 'Bhavna'],
    },
    {
      classname: 'Class B',
      students: ['Chirag', 'Deepa'],
    },
  ];

  const Categories = [
    {
      CName: 'Fruits',

      products: ['Apple', 'Banana', 'Mango'],
    },
    { CName: 'Vegetables', products: ['Potato', 'Tomato', 'Carrot'] },
  ];

  return (
    <>
      <h1>Practice of Looping</h1>
      {names.map((name, index) => (
        <ul>
          <li key={index}>{name}</li>
        </ul>
      ))}
      <h2>Student Details</h2>
      {students.map((student, index) => (
        <Students key={index} name={student.name} age={student.age} />
      ))}
      <h2>School Roster</h2>
      {classes.map((cls, clsindex) => (
        <div key={clsindex}>
          <p>{cls.classname}</p>
          <ul>
            {cls.students.map((students, stuindex) => (
              <li key={stuindex}>{students}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Rendering using components</h2>
      <ClassList classes={classes} />

      <h2>Shop by Category</h2>
      {
        Categories.map((cat,index) => (
          <Category key ={index} categoryName = {cat.CName}
          products = {cat.products}/>
        ))
      }

      
    </>
  );
}
export default App;
