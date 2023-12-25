import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoopingCartProvider } from "./contexts";
import Home from "./pages/Home/index";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { CheckOutSideMenu } from "./components/CheckOutSideMenu";
import Signin from "./Auth/Signin";
// import Footer from "./pages/Footer/Footer";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/clothes",
      element: <Home />,
    },
    {
      path: "/electronics",
      element: <Home />,
    },
    {
      path: "/furnitures",
      element: <Home />,
    },
    {
      path: "/toys",
      element: <Home />,
    },
    {
      path: "/others",
      element: <Home />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/Vite-E-commerce/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/Vite-E-commerce/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/Vite-E-commerce/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <Signin />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <ShoopingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckOutSideMenu></CheckOutSideMenu>
          {/* <Footer/> */}
        </BrowserRouter>
      </ShoopingCartProvider>
    </>
  );
}

export default App;
