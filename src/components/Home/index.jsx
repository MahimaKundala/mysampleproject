import { Link } from 'react-router-dom';
import './index.css';

const Home = () => (
    <div className='bgContainer'>
        <h1 className='heading'>A true friend is someone who is always there for you, no matter what. Happy birthday to my dear friend.</h1>
        <div className="card">
            <Link to="/main">
                <button className="button">Welcome My Friend</button>
            </Link>
        </div>
    </div>
);

export default Home;