const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      userId: 1,
      username: 'Andrew',
      followed: true,
      location: {
        country: 'Ukraine',
        city: 'Kiev',
      },
      profileStatus: 'I am a status',
      photoUrl:
        'https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012',
    },
    {
      userId: 2,
      username: 'Sasha',
      followed: true,
      location: {
        country: 'Ukraine',
        city: 'Odessa',
      },
      profileStatus: 'mmm',
      photoUrl: 'https://www.daphnedemaris.com/wp-content/uploads/2017/11/ava-img.jpg',
    },
    {
      userId: 3,
      username: 'Jerax',
      followed: false,
      location: {
        country: 'Russia',
        city: 'Moscow',
      },
      profileStatus: 'mmm i think it is new status many long omg wow trest',
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapsczAOf7_g-ZzXikO78qCP9Ytw1eKwoLgQ&usqp=CAU',
    },
    {
      userId: 4,
      username: 'Vitaliy',
      followed: false,
      location: {
        country: 'Belarus',
        city: 'Minsk',
      },
      profileStatus: 'qwerty',
      photoUrl:
        'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/44a6d6c4-86fd-4f93-8204-7ffd4fa4e4e4-4445-IMGWorldsofAdventure-2.JPG',
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userId === action.userId) return { ...user, followed: !user.followed };
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

const togggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });

const setUserAC = (users) => ({ type: SET_USERS, users });

export { setUserAC, togggleFollowAC };

export default usersReducer;
