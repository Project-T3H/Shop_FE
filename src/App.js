import { ReactNotifications } from "react-notifications-component";
import './App.css';
import Admin from "./pages/Admin/Admin";
import Page from "./pages/Page/Page";
function App() {
  return (
    <div>
      <ReactNotifications/>
      <Page />
      <Admin />
    </div>
  );
}

export default App;
