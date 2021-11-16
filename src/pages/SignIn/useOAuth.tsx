import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import ActionTypes from 'store/auth/actionTypes';

const FROM_OAUTH_REGEXP = /^\?code=/;

function useOAuth() {
    const history = useHistory();
    const { search = '' } = history.location;
    const isFromOAuth = FROM_OAUTH_REGEXP.test(search);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isFromOAuth) {
            const code = search.replace(FROM_OAUTH_REGEXP, '');
            dispatch({ type: ActionTypes.GetToken, payload: code });
        }
    }, [dispatch, isFromOAuth, search]);
}

export default useOAuth;
