// import { useState } from 'react';
import { Refine, Authenticated, WelcomePage } from '@refinedev/core';
import { dataProvider } from './providers/data-provider';
import { authProvider } from './providers/auth-provider';

import { ShowProduct } from './pages/products/show';
import { EditProduct } from './pages/products/edit';
import { ListProducts } from './pages/products/list';


import {Login} from "./pages/login";
import {Header} from "./components/header";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function App(): JSX.Element {
  // const [count, setCount] = useState(0)

  return (
    <Refine 
    dataProvider={dataProvider}
    authProvider={authProvider}
    >
      <Authenticated key="protected" fallback={<Login />}>
        <Header />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <WelcomePage/> */}
      {/* <ShowProduct/> */}
      {/* <EditProduct/> */}
         <ListProducts/>
      </Authenticated>
    </Refine>
  );
}


