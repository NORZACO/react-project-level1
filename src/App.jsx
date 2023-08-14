// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import {Services} from "./pages/Services";
import FetchData from "./pages/Albums";
import RegistrationForm from "./component/RegistrationForm";
import { Login } from "./component/Login"







export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/albums" element={<FetchData />} />
          <Route path="/registration" element={<RegistrationForm />} />
          {/* <Route path="/login" element={<SignIn />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
