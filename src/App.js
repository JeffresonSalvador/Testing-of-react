import React,{useState}  from 'react'

import '../src/App.css'
import Heading from './component/Heading'
import StudentList from './component/StudentList';
import StudentForm from './component/StudentForm';
import UserGreeting from './component/UserGreeting';

function App(){
    const [students,setStudents] = useState ([
      {
        id: 1,
        name: 'jeff',
        year: 1
      },
      {
        id: 2,
        name: 'jen',
        year: 2
      },
      {
        id: 3,
        name: 'lenar',
        year: 3
      },

    ]);

    const addStudent = (student)=>{
      setStudents([...students,student])

    }
   

    return(
    <div>
      <ul>
        <UserGreeting/>
        {/* <Heading/>
        <StudentForm addStudent = {addStudent}/>
        <StudentList students = {students}/> */}
        </ul>
        
    </div>
  );



}
export default App;