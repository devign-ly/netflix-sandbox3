import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth';

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
