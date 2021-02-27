import logo from './logo.svg';
import './App.scss';
import Button from "comps/Button/default";
import RoundButton from 'comps/Button/round';
import ProfileInfo from 'comps/ProfileInfo';
import Input from 'comps/Input';
import MultiLineInput from 'comps/MultiLineInput';
import SinglePost from 'comps/SinglePost';
import TopNav from 'comps/TopNav';

//Brittany's Comps
import AddPhoto from "comps/AddPhoto";
import Backdrop from 'comps/Backdrop';
import Comment from 'comps/Comment';
import HomeFeed from 'comps/HomeFeed';
import NavBar from 'comps/NavBar';


function App() {
  return <div>
    <MultiLineInput />
    <Button />
    <RoundButton />
    <ProfileInfo />
    <AddPhoto />
    <Backdrop />
    <Comment />
    <HomeFeed />
    <NavBar />
  </div>
}

export default App;
