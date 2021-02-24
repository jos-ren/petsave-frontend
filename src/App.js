import logo from './logo.svg';
import './App.scss';
import NavBar from './comps/NavBar';
import AddPhoto from './comps/AddPhoto';
import Backdrop from './comps/Backdrop';
import Comment from './comps/Comment';

function App() {
  return (
    <div>
      <NavBar/>
      <AddPhoto />      
      <Comment />
      <Backdrop />

    </div>
  );
}

export default App;
