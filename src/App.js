import React,{useState,useReducer}  from 'react'

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
import UseContextComponentC from './useContext/UseContextComponentC';
import CounterOne from './useReducer/CounterOne';
import CounterTwo from './useReducer/CounterTwo';
import CounterThree from './useReducer/CounterThree';
import ComponentA from './useReducer/ComponentA';
import ComponentB from './useReducer/ComponentB';
import ComponentC from './useReducer/ComponentC';
import UseStateDatafetching from './useReducer/UseStateDatafetching';
import UseReducerDataFetching from './useReducer/UseReducerDataFetching';
import ParentComponent from './useCallBack/ParentComponent';
import Counter from './useMemo/Counter';
import FocusInput from './useRef/FocusInput';
import HookTimer from './useRef/HookTimer';
import DocTitleOne from './useCustomHooks/DocTitleOne';
import DocTitleTwo from './useCustomHooks/DocTitleTwo';
import CustomCounterOne from './useCustomHooks/CustomCounterOne';
import CustomCounterTwo from './useCustomHooks/CustomCounterTwo';
import UserForm from './useCustomHooks/UserForm';

export const CountContext = React.createContext()

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const initialState = 0
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialState
        default:
             return state
    }
}

function App(){
  const [ count, dispatch ] = useReducer(reducer,initialState)

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
      <UserForm/>

      {/* <CustomCounterOne/>
      <CustomCounterTwo/> */}

      {/* <DocTitleOne/>
        <DocTitleTwo/> */}

      {/* <HookTimer/> */}

      {/* <FocusInput/> */}

      {/* <Counter/> */}

      {/* <ParentComponent/> */}

      {/* <UseReducerDataFetching/> */}

      {/* <UseStateDatafetching/> */}

      {/* <CountContext.Provider value={{countState : count, countDispatch: dispatch}}>
        <div>
        Count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </div>
        
      </CountContext.Provider> */}

      {/* <CounterThree/> */}

      {/* <CounterTwo/> */}

      {/* <CounterOne/> */}

      {/* <UserContext.Provider value={'jefff'}>
        <ChannelContext.Provider value={'codeEvolution'}>
           <UseContextComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

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