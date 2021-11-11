import { useEffect, useMemo } from 'react';
import authApi from 'api/authApi';
import { useDispatch } from 'react-redux';

import ActionTypes from 'store/auth/actionTypes';

import history from 'utils/history';

function useOAuthCode() {
    const fromOAuth = useMemo(() => /^\?code=/, []);
    const { search = '' } = history.location;
    const isFromOAuth = fromOAuth.test(search);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isFromOAuth) {
            const code = search.replace(fromOAuth, '');
            authApi
                .getToken(code)
                .then(() => {
                    dispatch({ type: ActionTypes.GetUser });
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }
    }, [fromOAuth, isFromOAuth, search]);
}

export default useOAuthCode;
