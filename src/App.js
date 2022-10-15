import{BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import FeedBackList from "./components/FeedbackList"
import FeedStats from "./components/FeedStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutLink"
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
 
  return (
    <FeedbackProvider>
    <Router>
    <Header/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
            <FeedbackForm />
           <FeedStats />
           <FeedBackList/>
           <AboutIconLink />
            </>
          }>

          </Route>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </div>
  </Router>
  </FeedbackProvider>
  )
}

export default App
