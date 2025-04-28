import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserProvider } from '../../LandingPage/src/context/UserContext'; // Import UserProvider

createRoot(document.getElementById("root")!).render(
  <UserProvider> {/* Wrap the App with UserProvider */}
    <App />
  </UserProvider>
);
