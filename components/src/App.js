import logo from './logo.svg';
import './App.css';
import MountLifeCycleA from './Components-LifeCycles/Mounting-LifeCycle/MountLifeCycleA';
import UpdatingLifeCycleA from './Components-LifeCycles/UpdatingLifeCycle/UpdatingLifeCycleA';
import Table from './Components-LifeCycles/Fragment/Table';
import ParentComp from './Components-LifeCycles/Pure-Components/ParentComp';
import ParentMemo from './Components-LifeCycles/Memo/ParentMemo';
import RefDemo from './Components-LifeCycles/Refs/RefDemo';
import FocusInput from './Components-LifeCycles/RefswithClassComponents/FocusInput';
import FRParent from './Components-LifeCycles/FRRefs/FRParent';
import ClickCounter from './HOC/ClickCounter';
import HOverCounter from './HOC/HOverCounter';
import WithCounterTwo from './HOC/WithCounterTwo';
import WithCounter from './HOC/WithCounter';

function App() {
  return (
    <div className="App">
      {/* <MountLifeCycleA/> */}
      {/* <UpdatingLifeCycleA/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <ParentMemo/> */}
      {/* <RefDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParent/> */}
      <ClickCounter/>
      <HOverCounter/>
      {/* <WithCounterTwo/> */}
      <WithCounter/>
    </div>
  );
}

export default App;
