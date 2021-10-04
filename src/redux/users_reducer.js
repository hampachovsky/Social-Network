const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};
/* {
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
  ], */
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) return { ...user, followed: !user.followed };
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.pageNumber };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalCount - 15000 };
    }
    case TOGGLE_FETCHING: {
      return { ...state, isFetching: !state.isFetching };
    }
    default:
      return state;
  }
};

const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });

const setUsers = (users) => ({ type: SET_USERS, users });

const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });

const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

const toggleFetching = () => ({ type: TOGGLE_FETCHING });

export { setUsers, toggleFollow, setCurrentPage, setTotalUsersCount, toggleFetching };

export default usersReducer;
