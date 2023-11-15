import { Provider } from "react-redux";
import LogInPage from "./pages/LogInPage";
import store from "../src/store/index";
const App = () => {
  return (
    <Provider store={store}>
      <LogInPage />
    </Provider>
  );
};

export default App;
