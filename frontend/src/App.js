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
import PersonalizedRecommendationsPage from "./pages/PersonalizedRecommendationsPage";
import AIPoweredAnalysisPage from "./pages/AIPoweredAnalysisPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

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
    },
    {
      path:"/personalized-recommendations",
      element:<PersonalizedRecommendationsPage/>
    },
    {
      path:"/ai-powered-analysis",
      element:<AIPoweredAnalysisPage/>
    },
    {
      path: "/login",
      element: <LoginPage />,
    }, 
    {
      path: "/register",
      element: <RegisterPage />,
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
