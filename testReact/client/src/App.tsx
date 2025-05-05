import * as React from 'react';
//import logo from './logo.svg';
import './App.css';

type User = {
  id: number;
  name: string;
};

function App() {

  const [user, setUser] = React.useState<User[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api");
        const json: React.SetStateAction<User[] | null> = await res.json();
        setUser(json);
      } catch (e: unknown) {
        console.error("error");
      };
    }

    fetchData();
  }, []);

  return (
    <>
    <div>
      <p>Expressのデータの中身</p>
      {user?.map((user) => (
        <div key = { user.id }>
          <p>{ user.id }</p>
          <p>{ user.name }</p>
        </div>
      ))}
    </div>
    </>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
