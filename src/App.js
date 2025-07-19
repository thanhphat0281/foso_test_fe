import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routerLink";

import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


function App() {
  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API}product/getAll`);
    return res.data
  };
   const query = useQuery({ queryKey:['React-app'], queryFn: fetchApi});
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ?DefaultComponent: Fragment ;
            return (
              <>
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              </>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
