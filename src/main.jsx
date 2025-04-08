import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// const router = createBrowserRouter([
//   { path: '/', element: <Home/>},
//   { path: '/transactions/withdraw', element: <Transactions/>},
//   { path: '/transactions/deposit', element: <Transactions/>},
//   { path: '/login', element: <Auth/>},
//   { path: '/register', element: <Auth/>}
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )

