import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TRootState } from 'store';

function useIsLoggedIn() {
    const isLoggedIn = useSelector(
        (state: TRootState) => state.auth.isLoggedIn,
    );
    const history = useHistory();

    useEffect(() => {
        console.log(`isLoggedIn ${isLoggedIn}`);
    });

    const { pathname } = history.location;
    const unAuthPages = pathname === '/sign-up' || pathname === 'sign-in';

    if (isLoggedIn) {
        if (unAuthPages) {
            history.push('/');
        }
    } else if (!unAuthPages) {
        history.push('/sign-in');
    }
}

export default useIsLoggedIn;
