import {useParams} from 'react-router-dom';

const data = {
    velopert:{
        name: "김민준",
        description: "리액트를 좋아하는 개발자"
    },
    hyebinyu1110:{
        name:"유혜빈", 
        description: "리액트를 배우고있는 개발자",
    },
    bairachtaris:{
        name:"bairachtaris", 
        description: "리액트를 모르는 멋진 사람",
    },
};


const Profile = () =>{
    const params = useParams();
    const profile = data[params.username];
    return(
        <div>
            <h1> 사용자 프로필</h1>
            {
            profile? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ):(
                <p>존재하지 않는 프로필입니다.</p>
            )
            }
            
        
        </div>
    )
}

export default Profile;