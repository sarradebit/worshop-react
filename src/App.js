import './App.css';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';
import ProfilPhoto from './Components/Profile/ProfilPhoto';

function App() {
  return (
    <div className="App">
    <ProfilPhoto/>
    <FullName/>
     <Adress/>
     
    </div>
  );
}

export default App;
