const state = {
  profilePage: {
    postData: [
      { message: 'Hi, man', likeCount: '1' },
      { message: 'Hi, guys', likeCount: '4' },
      { message: "Hi, i'ts me", likeCount: '5' },
      { message: "I'm here", likeCount: '51' },
    ],
  },
  messagesPage: {
    userData: [
      {
        username: 'user1',
        userId: '1',
        message: 'hello world',
        status: 'online',
        avaImg:
          'https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012',
      },
      {
        username: 'user2',
        userId: '2',
        message: 'test world!',
        status: 'online',
        avaImg:
          'https://www.daphnedemaris.com/wp-content/uploads/2017/11/ava-img.jpg',
      },
      {
        username: 'user3',
        userId: '3',
        message: 'world',
        status: 'online',
        avaImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapsczAOf7_g-ZzXikO78qCP9Ytw1eKwoLgQ&usqp=CAU',
      },
      {
        username: 'user4',
        userId: '4',
        message: 'message world',
        status: 'offline',
        avaImg:
          'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/44a6d6c4-86fd-4f93-8204-7ffd4fa4e4e4-4445-IMGWorldsofAdventure-2.JPG',
      },
    ],
  },
};

export default state;
