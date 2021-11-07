import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ActionTypes from 'store/auth/actionTypes';

function useIsLoggedIn() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ActionTypes.GetUser });
    }, [dispatch]);
}

export default useIsLoggedIn;
