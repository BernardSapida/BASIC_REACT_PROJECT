import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state: any) => state.auth);

  return (
    <>
      <Header />
      {!auth.isLogin && <Auth />}
      <Counter />
      {auth.isLogin && <UserProfile />}
    </>
  );
}

export default App;
