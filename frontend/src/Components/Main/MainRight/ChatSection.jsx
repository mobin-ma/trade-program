import React, { useState } from 'react'

// Add Utilities Component
import Online from '../../Utilities/Online'

// Add Apolloclient
import { gql, useMutation, useQuery } from '@apollo/client'
import Loading from '../../Utilities/Loading';

// build Query variable 
const GET_MESSAGE = gql`
  query Chats {
    chats {
      id
      message
      from
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation SendMessage($from: String!, $message: String!) {
    sendMessage(from: $from, message: $message) {
        from
      message
    }
  }
`;

const ChatSection = () => {
    // state input value and name
    const [inputValue, setInputValue] = useState('')
    const [inputName, setInputName] = useState('')

    const { loading, error, data } = useQuery(GET_MESSAGE);
    const [sendMessage] = useMutation(SEND_MESSAGE, {
        refetchQueries: [
            { query: GET_MESSAGE }, // DocumentNode object parsed with gql
            'Chats' // Query name
        ],
    });
    console.log(data);

    // onSubmit function
    const onSubmit = (e) => {
        e.preventDefault();
        sendMessage({ variables: { from: inputName, message: inputValue } });
        setInputValue('');
    }

    // onChange function
    const onChange = (e) => {
        setInputValue(e.target.value)
        setInputName(e.target.name)
    }

    return (
        loading || error ? <Loading /> :  <div className='chat'>
            {/* search box */}
            <div className='search_box'>
                <input type="search" placeholder='Search...' />
                <i className='bx bx-search'></i>
            </div>

            {/* chat body */}
             <div className='chat_body'>
                {/* static */}
                <p>Today</p>
                <div className="item">
                    <div className='user_profile-img'>
                        <Online online={true} />
                        <img src="/images/user-2.jpg" alt="user" />
                    </div>
                    <div className="user_message">
                        <p className='user_name'>Samira Torkaman</p>
                        <p className="message">Hello!</p>
                        <p className="time">9:43 AM</p>
                    </div>
                </div>
                <div className="item">
                    <div className='user_profile-img'>
                        <Online online={true} />
                        <img src="/images/user-4.jpg" alt="user" />
                    </div>
                    <div className="user_message">
                        <p className='user_name'>Afshin Ahmadi</p>
                        <p className="message">Hello!</p>
                        <p className="time">9:43 AM</p>
                    </div>
                </div>

                {
                   data.chats.map(user => {
                        return <div className="item-me" key={user.id}>
                            <div className='user_message-me'>
                                <p className="user_name">{user.from}</p>
                                <p className="message">{user.message}</p>
                                <p className="time">9:43 AM</p>
                            </div>
                        </div>
                    })
                }

            </div>

            {/* form section */}
            <div className='form_section'>
                <input type="text" placeholder='Enter Message' value={inputValue} name='mobin' onChange={onChange} />
                <button onClick={onSubmit}>
                    <i class='bx bxs-send'></i>
                </button>
            </div>
        </div>
    )
}

export default ChatSection