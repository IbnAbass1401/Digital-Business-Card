import Intro from "./intro.jsx"
import Contact from "./contact.jsx"
import About from "./about.jsx"
import Interests from "./interests.jsx"
import Footer from "./footer.jsx"
import profilePic from "./assets/profile-pics.jpeg"

export default function App() {
  return (
    <div className="container">
      <img className="img" src={profilePic} alt="Profile Picture" />
      <header className="top">
        <Intro />
        <Contact />
      </header>
      <main className="info">
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  )
}