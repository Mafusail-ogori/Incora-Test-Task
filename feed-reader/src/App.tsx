import { Provider } from "react-redux";
import LogInPage from "./pages/LogInPage";
import store from "../src/store/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import FeedPage from "./pages/FeedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <LogInPage /> },
      {
        path: "feed",
        element: <FeedPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
