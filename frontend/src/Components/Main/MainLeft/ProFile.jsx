import React from 'react';
import Btn from '../../Utilities/Btn';
import RankT from '../../Utilities/RankT';
import RankTA from '../../Utilities/RankTA';

const ProFile = () => {
    return (
        <div className='profile'>

            {/* top section profile */}
            <div className='profile_top'>
                <div>
                    <p>Welcome Back Mobin!</p>
                    <span>Nurafin Dashboard</span>
                </div>
                <img src="/images/vector-1.png" alt="vector" />
            </div>

            {/* top section profile */}
            <div className='profile_bottom'>
                <p>
                    <span>Mobin Madadi</span>
                    <RankTA />
                    <RankT />
                </p>
                <Btn value={'Trading Team'} />
            </div>
            <img className='profile_img' src="/images/user-1.jpg" alt="user" />
        </div>
    )
}

export default ProFile