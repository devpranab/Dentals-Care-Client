import './App.css';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Router';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './AuthProvider/AuthProvider';

function App() {
  const { isDarkMode } = useContext(AuthContext);
  return (
    <div className={`lg:px-20 ${isDarkMode ? "bg-gray-800 lg:text-white" : "bg-base-100 text-black"}`}>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;