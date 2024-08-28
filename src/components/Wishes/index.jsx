import {Link} from "react-router-dom"

import "./index.css"

const Wishes=()=>(
   <div className="wishes-container">
    <marquee>Mahima Mounika</marquee>
   <div className="videos-container">
    <iframe
           src="https://www.youtube.com/embed/6uKof9B86Rk"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen>
     </iframe>

     
     <iframe
           src="https://www.youtube.com/embed/_a1slXeX_3A"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen>
     </iframe>

     <iframe
           src="https://www.youtube.com/embed/8Inat2juzeo"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen>
     </iframe>
     </div>

     <div >
       <ul>

       <li>
           Friendship is a treasure, and I’m so grateful to have you in my life. Wishing you the happiest of birthdays!
           </li>
           <li>Wishing you many ✨more Happy returns of the day😍, my dear Friend🎂 Stay blessed and may God bless you always🥳.</li>
           <li> Happy Birthday on Your special day!💫 Take a moment to enjoy✨the day and <br/>Be grateful 🖤for all the wonders that life has to offer. To my favourite person.<br/>Be safe every day. Once again,
            I wish you many more Happy returns of the day, my friend .....🥰🥰🥰
           </li>
           <li>
           May your birthday be as fabulous as you are and filled with everything you love. Here’s to a year full of new adventures and dreams come true!
           </li>
           <li>May this year be you bless you with happiness and peace...🤍☮</li>
           <li>Every year with you is a new adventure. Here’s to more memories, more laughter, and another fantastic year ahead. Happy birthday!</li>
           <li>Surrounded by happiness, wrapped in pleasure, blessed with love, remembered with joy—Happy Birthday... ✨💫⭐</li>
           
           <li>
           You’re more than a friend; you’re family. I hope your birthday is as amazing as you are.
           </li>
       </ul>

     </div>
     <Link to="/"><button  type='button'>back</button></Link>

   </div>
)


export default Wishes;