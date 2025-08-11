import StudentList from './StudentList';

function ClassList({ classes }) {
  return (
    <>
      {classes.map((cls, index) => (
        <div key={index}>
          <p>{cls.classname}</p>
          <StudentList students={cls.students} />
        </div>
      ))}
    </>
  );
}

export default ClassList;
