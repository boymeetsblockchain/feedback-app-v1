import {Link} from 'react-router-dom'

function Header({title,bgColor,textColor}) {
  const headerStyle ={
    backgroundColor:bgColor,
    color:textColor
  }
  return (
    <header style={headerStyle}>
      <div className="container">
         <h2><Link to='/' style={{textDecoration:'none', color:'#ff6a95'}}>
          {title}
         </Link></h2>
         </div>
     
    </header>
  )
}

Header.defaultProps = {
  title:"FeedBack App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: '#ff6a95'
}
export default Header
