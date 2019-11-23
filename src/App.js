import React,{useState}  from 'react'

import '../src/App.css'
import Heading from './component/Heading'
import StudentList from './component/StudentList';
import StudentForm from './component/StudentForm';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Stylesheets from './component/Stylesheets'
import StyleInlineStyling from './component/StyleInlineStyling';
import './appStyles.css'
import styles from './appStyles.module.css';
import Form from './component/Form';
import LifecycleA from './LifecycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table'
import PureComp from './component/PureComp';
import PureParentComponent from './component/PureParentComponent';
import RefsDemo from './component/RefsDemo';
import ImplementingFocusInput from './component/ImplementingFocusInput';
import ForwardingParentRefs from './component/ForwardingParentRefs';
import ErrorHandling from './component/ErrorHandling';
import ErrorBoundary from './component/ErrorBoundary';
import ClassCounter from './hooks/ClassCounter';
import HookCounter from './hooks/HookCounter';
import HookCounterTwo from './hooks/HookCounterTwo';
import HookCounterThree from './hooks/HookCounterThree';
import HookCounterFour from './hooks/HookCounterFour';
import HookCounterOne from './useEffect/HookCounterOne';
import HookMouse from './useEffect/HookMouse';
import MouseContainer from './useEffect/MouseContainer';
import IntervalHookCounter from './useEffect/IntervalHookCounter';
import DataFetching from './dataFetching/DataFetching';
import DataFetchingIndividual from './dataFetching/DataFetchingIndividual'
import ComponentC from './useContext/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

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
    <div className = "App">

      <ul>
      <UserContext.Provider value={'jefff'}>
        <ChannelContext.Provider value={'codeEvolution'}>
           <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* <DataFetchingIndividual/> */}

      {/* <DataFetching/> */}

      {/* <IntervalHookCounter/> */}

      {/* <MouseContainer/> */}

      {/* <HookMouse/> */}

      {/* <HookCounterOne/> */}

      {/* <HookCounterFour/> */}

      {/* <HookCounterThree/> */}

      {/* <HookCounterTwo/> */}

      {/* <HookCounter/> */}

      {/* <ClassCounter/> */}

     {/* <ErrorBoundary>
          <ErrorHandling heroName="batman"/>
      </ErrorBoundary>
      
      <ErrorBoundary>
         <ErrorHandling heroName="superman"/>
      </ErrorBoundary>
      
      <ErrorBoundary>
          <ErrorHandling heroName="Joker"/>
      </ErrorBoundary> */}
      
        {/* <PortalDemo/> */}

        {/* <ForwardingParentRefs/> */}

        {/* <ImplementingFocusInput/> */}

        {/* <RefsDemo/> */}

        {/* <PureParentComponent/> */}

        {/* <Table/> */}

        {/* <FragmentDemo/> */}

        {/* <LifecycleA/> */}

        {/* <Form/> */}
        
        {/* <h1 className='error'>error </h1>
        <h1 className= {styles.success}> success</h1> */}

        {/* <StyleInlineStyling/>
        <Stylesheets primary = {true} /> */}

        {/* <NameList/>
        <br/>
        <UserGreeting/> */}

        {/* <Heading/>
        <StudentForm addStudent = {addStudent}/>
        <StudentList students = {students}/> */}
        </ul>
        
    </div>
  );



}
export default App;