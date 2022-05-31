import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {

    const navigate = useNavigate();

    const home = () => {
        // 이전 페이지로 이동
        navigate('/', { replace: true });
    }
    const myPage = () => {
        // 이전 페이지로 이동
        navigate('/mypage', { replace: true });
    }
    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);
    }

    const goArticles = () => {
        // articles 경로로 이동
        navigate('/articles', { replace: true });
    }
    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }} >
                <button onClick={home}>홈</button>
                <button onClick={myPage}>마이페이지</button>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>

    );
};


export default Layout;