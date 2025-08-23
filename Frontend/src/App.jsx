import './App.css'
import Navbar from './Components/Navbar/navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import HomeScreen from './Components/Home/Home.jsx';
import LivestockPage from './Components/Livestock/Livestock.jsx';
import PetsPage from './Components/Pets/Pets.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar />
        <HomeScreen />
        <PetsPage />
        <LivestockPage />
        <About />
        <Contact />
        <Footer /> */}
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.services} element={<Services />} />
          <Route path={routes.contact} element={<Contact />} />
        </Routes>
      </Router>
    </>
  )

}

export default App
