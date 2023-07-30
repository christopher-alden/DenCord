import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(authActions.login({
          uid,
          email,
          displayName,
          photoURL,
        }));
      }
      else{
        dispatch(authActions.logout());
      }
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, [dispatch]);

  return loading;
};

export default useAuth;
