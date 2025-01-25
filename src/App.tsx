import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login"
import OauthCallback from "./OauthCallback"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/oauth/callback' element={<OauthCallback />}></Route>
      </Routes>
    </Router>
  )
}

export default App
