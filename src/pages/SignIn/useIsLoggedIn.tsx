import { useSelector } from 'react-redux';
import { TRootState } from 'store';
import { useEffect } from 'react';

import history from 'utils/history';

function useIsLoggedIn() {
    const isLoggedIn = useSelector(
        (state: TRootState) => state.auth.isLoggedIn,
    );

    const { pathname } = history.location;
    const unAuthPages = pathname === '/sign-up' || pathname === '/sign-in';

    useEffect(() => {
        if (isLoggedIn) {
            if (unAuthPages) {
                history.push('/');
            }
        } else if (!unAuthPages) {
            history.push('/sign-in');
        }
    }, [isLoggedIn, pathname, unAuthPages]);
}

export default useIsLoggedIn;
