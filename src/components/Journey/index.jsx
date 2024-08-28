import {Link} from 'react-router-dom'
import './index.css'

const Journey=()=>(
  <div className='journey-container'>
    <div className='text-card'>
        <p className='text'> 
          Hai Mahi, It's really happy to have a Friend like you. You are really god gifted Friend to me.
          You are so Special in my life not only being my cute and lovely Friend but also as a Good Supporter.
          If you ever need a shoulder to cry, I am here for you.
          If you ever need to some one laugh and share memories with I am here for you.
          If ever want just some one there without ever saying a word, I am here for you. 
        </p>
       <Link to="/main">
        <button>get wishes</button>
        </Link>
    </div>
  </div>
)


export default Journey