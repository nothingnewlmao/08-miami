import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import ActionTypes from 'store/auth/actionTypes';

import history from 'utils/history';

function useOAuth() {
    const fromOAuth = useMemo(() => /^\?code=/, []);
    const { search = '' } = history.location;
    const isFromOAuth = fromOAuth.test(search);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isFromOAuth) {
            const code = search.replace(fromOAuth, '');
            dispatch({ type: ActionTypes.GetToken, payload: code });
        }
    }, [dispatch, fromOAuth, isFromOAuth, search]);
}

export default useOAuth;
