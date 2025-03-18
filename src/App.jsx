import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth);
  console.dir(user)

  return (
    <div>
      {user ? <SignOut user={user}/> : <SignIn />}
    </div>
    
  );
}

export default App;
