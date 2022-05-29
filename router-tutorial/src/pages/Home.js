import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
        
            <ul>
                <li>
            <Link to={"/about"}>about</Link>
            </li>
            <li>
            <Link to={"/profiles/velopert"}>velopert님 소개</Link>
            </li>
            <li>
            <Link to={"/profiles/hyebinyu1110"}>hyebinyu1110님 소개</Link>
            </li>
            <li>
            <Link to={"/profiles/bairachtaris"}>bairachtaris님 소개</Link>
            </li>
            </ul>
    </div>
    )
}


export default Home;