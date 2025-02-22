import { DisplayBooks } from "../components/DisplayBooks";
import DisplayItems from "../components/Items";
import ParentComponent from "../components/ParentComponent";
import DebounceDemo from "../components/DebounceDemo";
import NestedList from "../components/NestedList";
import WindowResize from "../components/WindowResize";
import DemoUseMemo from "../components/DemoUseMemo";
import MemoizationExample from "../components/MemoizationExample";

const Home = () => {
  return (
    <>
      <DisplayBooks />
      <DisplayItems />
      <ParentComponent />
      <DebounceDemo />
      <NestedList />
      <WindowResize />
      <DemoUseMemo />
      <MemoizationExample />
    </>
  );
}

export default Home;