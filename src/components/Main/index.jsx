import {Link} from 'react-router-dom'
import "./index.css"

const Main=()=>(
    <div className="main">


  
      <div class="main-card">

      <div className='card1'> 

        <Link to="/journey">
          <img src="https://i.pinimg.com/736x/c1/36/bd/c136bd5ea976b8cac6d8fd10cb6c13a1.jpg"   alt="cover-page" className="wishespage"/>
          <div>
          <button type="button" className="cover-button2"> click cheyyava🤌🤌🤌</button>
          </div>
        </Link>
      </div>

      <div className='card2'> 
      <Link to="/wishes">
        <img src="https://tse2.mm.bing.net/th?id=OIP.qmGcQicmZYqrS2yo2USVCwHaE8&pid=Api&P=0&h=180"   alt="cover-page" className="wishespage"/>
        <div>
        <button type="button" className="cover-button">click here for open</button>
        </div>
      </Link>
      </div> 
2
    

      </div>
    </div>
)

export default Main;