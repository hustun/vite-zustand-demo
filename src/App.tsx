import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-700 text-white w-screen h-screen flex justify-center items-center">
      <Login />
    </div>
  );
}

export default App;
