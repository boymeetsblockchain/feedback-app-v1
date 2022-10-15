import Card from "../shared/Card"
import{Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
       <h1>This is about the project</h1>
       <p>This is an app for customer reviews on a service on a project</p>
       <p>Version 1.0.0</p>
       <p>Project from Brad Traversy React front to back course on Udemy</p>
       <Link to='/'>Back to Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage