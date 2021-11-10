import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpagesForLoggedIn } from 'types/EpagesDictionaries';

import ActionTypes from 'store/auth/actionTypes';
import { selectLogInFailed } from 'store/userProfile/selectors';

import history from 'utils/history';

function useIsLoggedIn() {
    const logInFailed = useSelector(selectLogInFailed);
    const { location, length } = history;
    const { pathname } = location;

    const dispatch = useDispatch();

    useEffect(() => {
        console.error(length);
        dispatch({ type: ActionTypes.GetUser });
    }, [dispatch, length]);

    useEffect(() => {
        const isPageForLoggedIn: boolean = Object.values<string>(EpagesForLoggedIn).includes(pathname);
        const needRedirect = Boolean(isPageForLoggedIn && logInFailed);

        if (needRedirect) {
            history.push('/sign-in');
        }
    }, [logInFailed, pathname]);
}

export default useIsLoggedIn;
