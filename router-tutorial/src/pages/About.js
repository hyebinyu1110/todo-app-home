import {useSearchParams} from 'react-router-dom';

const About = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();

    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    console.log(detail);
    console.log(mode);
    
    const onToggleDetail = ()=>{
        setSearchParams({mode, detail: detail==='true'? false: true});
    }

    const onIncreaseMode = ()=>{
        const nextMode = mode === null? 1: parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail});
    };

    return(
    <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해보는 프로젝트 입니다.</p>
        <p>detail: {detail}</p>
        <p>mode: {mode}</p>
        <button onClick={onToggleDetail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
    )
}


export default About;