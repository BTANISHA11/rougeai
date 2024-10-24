import React from "react";
import "./App.css";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/home/Home";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ColorTryOn from "./containers/colorTryOn/ColorTryOn";
import Occasions from "./pages/Occasions";
import FeaturesPage from "./pages/FeaturesPage";
import HealthcarePage from "./pages/Healthcare";

// import { Route } from "react-router-dom";


function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    
    {
      path: "/color-tryon",
      element: <ColorTryOn />,
    },
    
    {
      path:"/occasions",
      element:<Occasions/>
    },
    {
      path:"/features",
      element:<FeaturesPage/>
    },
    {
      path:"/healthcare",
      element:<HealthcarePage/>
    }
    
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>BeautyBuzz</title>
      </Helmet>
      <Router>
        <Navbar />
        <App />
      </Router>
    </HelmetProvider>
  );
};

export default AppWrapper;
