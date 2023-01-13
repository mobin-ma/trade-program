import React from 'react'
import Online from '../../Utilities/Online';
import RankTA from '../../Utilities/RankTA';
import RankT from '../../Utilities/RankT';
import RankM from '../../Utilities/RankM';

const TeamMembers = () => {
    // Users List
    let users = [
        { id: 1, userName: 'Samira Torkaman', userImg: '/images/user-2.jpg', online: true, rankTA: false, rankT: true, rankM: false },
        { id: 2, userName: 'Fateme Hamidi', userImg: '/images/user-3.jpg', online: false, rankTA: false, rankT: false, rankM: true },
        { id: 3, userName: 'Afshin Ahmadi', userImg: '/images/user-4.jpg', online: true, rankTA: false, rankT: false, rankM: true },
        { id: 4, userName: 'Hanane Momeni', userImg: '/images/user-5.jpg', online: false, rankTA: true, rankT: true, rankM: false },
        { id: 5, userName: 'Amir Jafari', userImg: '/images/user-6.jpg', online: true, rankTA: true, rankT: true, rankM: false }
    ]

    return (
        <div className='team_members'>
            <h4>Team Members</h4>
            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>
                            <Online online={user.online} />
                            <img src={user.userImg} alt="userImg" />
                            <div className='user_name'>
                                <p>{user.userName}</p>
                                {user.online ? <span className='online-'>Online</span> : <span>3h ago</span>}
                            </div>
                            <div className='rank'>
                                <RankTA rank={user.rankTA} />
                                <RankT  rank={user.rankT} /> 
                                <RankM  rank={user.rankM} />
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default TeamMembers