import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppStateType } from 'redux/reduxStore';

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;
