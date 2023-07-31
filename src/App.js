
import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile'
import MyButton from './components/myButton'
import Navbar from './components/navbar'
function App() {
  return (
    <>
      <Navbar name="HIHI" />
      <Profile />
      <Introduction name="Mario" />
      <Introduction name="Ariel" />
      <MyButton />
    </>
  );
}

export default App;
