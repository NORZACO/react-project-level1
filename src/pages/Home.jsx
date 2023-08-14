import FetchData from "../pages/Albums";
import { HeroSections } from "../component/HeroSection";

import RegistrationForm from "../component/RegistrationForm.jsx"

const Home = () => {
  return (
    <>
      <HeroSections
        heading="Welcome to the world of React"
       />
      <FetchData />
      <RegistrationForm />
    </>
  );
};

export default Home;
