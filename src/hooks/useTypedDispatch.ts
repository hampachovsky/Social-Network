import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/reduxStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = () => useDispatch<AppDispatch>();
