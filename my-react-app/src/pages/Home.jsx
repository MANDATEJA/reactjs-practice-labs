import { useAuth } from "../state/AuthContext";
import { DisplayBooks } from "../components/DisplayBooks";
import DisplayItems from "../components/Items";
import ParentComponent from "../components/ParentComponent";
import DebounceDemo from "../components/DebounceDemo";
import NestedList from "../components/NestedList";
import WindowResize from "../components/WindowResize";
import DemoUseMemo from "../components/DemoUseMemo";
import MemoizationExample from "../components/MemoizationExample";

const Home = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <h2>Welcome, {user?.name}</h2>
      <img src={user?.picture} alt="User Profile" />
      <button onClick={logout}>Logout</button>
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
