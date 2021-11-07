import { useEffect } from 'react';

import history from 'utils/history';

function useOAuthCode() {
    const fromOAuth = new RegExp(`^${process.env.REDIRECT_URI}/?code=`);
    // @ts-ignore
    const { href, code = '' } = history.location;
    const isFromOAuth = fromOAuth.test(href);

    useEffect(() => {
        console.log('FROM AUTH', history);
    }, [isFromOAuth, code]);
}

export default useOAuthCode;
