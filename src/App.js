import logo from './logo.svg';
import './App.scss';
import react, { useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";
import Button from "comps/Button/default";
import RoundButton from 'comps/Button/round';
import ProfileInfo from 'comps/ProfileInfo';
import Input from 'comps/Input';
import MultiLineInput from 'comps/MultiLineInput';
import SinglePost from 'comps/SinglePost';
import TopNav from 'comps/TopNav';

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [user, setUser] = useState();

  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, [token]);

  return <div>
    <MultiLineInput />
  </div>
}

export default App;
