const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  userData: [
    {
      username: 'user1',
      userId: '1',
      status: 'online',
      country: 'Ukraine',
      city: 'Kiev',
      profileStatus: 'mmm',
      photoUrl:
        'https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012',
    },
    {
      username: 'user2',
      userId: '2',
      status: 'online',
      country: 'Ukraine',
      city: 'Odessa',
      profileStatus: 'mmm',
      photoUrl: 'https://www.daphnedemaris.com/wp-content/uploads/2017/11/ava-img.jpg',
    },
    {
      username: 'user3',
      userId: '3',
      status: 'online',
      profileStatus: 'mmm',
      country: 'Russia',
      city: 'Moscow',
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapsczAOf7_g-ZzXikO78qCP9Ytw1eKwoLgQ&usqp=CAU',
    },
    {
      username: 'user4',
      userId: '4',
      status: 'offline',
      profileStatus: 'mmm',
      country: 'Belarus',
      city: 'Minsk',
      photoUrl:
        'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/44a6d6c4-86fd-4f93-8204-7ffd4fa4e4e4-4445-IMGWorldsofAdventure-2.JPG',
    },
  ],
  messages: [
    {
      content: 'hello world',
      recipient: 'user2',
      author: 'user1',
      owner: false,
      date: '11.06.2021',
    },
    {
      content: 'new message',
      recipient: 'user2',
      author: 'user1',
      owner: false,
      date: '11.05.2021',
    },
    {
      content: 'second wind',
      recipient: 'user2',
      author: 'user1',
      owner: false,
      date: '11.04.2021',
    },
    {
      content: 'test world',
      recipient: 'user3',
      author: 'user2',
      owner: false,
      date: '11.09.2021',
    },
    {
      content: 'new message user 2',
      recipient: 'user3',
      author: 'user2',
      owner: false,
      date: '11.08.2021',
    },
    {
      content: 'second wind',
      recipient: 'user3',
      author: 'user2',
      owner: false,
      date: '11.07.2021',
    },
    {
      content: 'from world',
      recipient: 'user1',
      author: 'user3',
      owner: false,
      date: '13.09.2021',
    },
    {
      content: 'new message user 3',
      recipient: 'user1',
      owner: false,
      date: '12.08.2021',
    },
    {
      content: 'wind',
      recipient: 'user1',
      owner: false,
      date: '01.07.2021',
    },
    {
      content: 'message world',
      recipient: 'user2',
      author: 'user4',
      owner: false,
      date: '06.09.2021',
    },
    {
      content: 'new message user 4',
      recipient: 'user3',
      author: 'user4',
      owner: false,
      date: '08.08.2021',
    },
    {
      content: 'second wind',
      recipient: 'user1',
      author: 'user4',
      owner: false,
      date: '09.07.2021',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            content: action.newMessageBody,
            recipient: `user${action.id}`,
            owner: true,
            author: `user1`,
            date: '10.11.2020',
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  id: 1,
  newMessageBody,
});

export { sendMessage };

export default dialogsReducer;