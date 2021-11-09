import { useEffect, useMemo } from 'react';
import authApi from 'api/authApi';

import history from 'utils/history';

function useOAuthCode() {
    const fromOAuth = useMemo(() => /^\?code=/, []);
    const { search = '' } = history.location;
    const isFromOAuth = fromOAuth.test(search);

    useEffect(() => {
        if (isFromOAuth) {
            const code = search.replace(fromOAuth, '');
            authApi.getToken(code)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }
    }, [fromOAuth, isFromOAuth, search]);
}

export default useOAuthCode;
