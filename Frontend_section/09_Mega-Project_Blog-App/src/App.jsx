import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  ) : null;
};

export default App;
