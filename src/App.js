import logo from './logo.svg';
import './App.css';
import Page from "./pages/Page";
import { ReactNotifications } from 'react-notifications-component';

function App() {
  return (
    <div>
      <ReactNotifications />
      <Page />
    </div>
  );
}

export default App;
