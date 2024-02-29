import { useState } from "react";
import "./App.css";
import { AppRoutes } from "./services/routes/Routes";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <AppRoutes user={user} setUser={setUser} />
    </>
  );
}

export default App;
