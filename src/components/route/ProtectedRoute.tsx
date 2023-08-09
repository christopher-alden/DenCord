import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectUser} from '../../lib/store/authSlice';

const ProtectedRoute = ({children}: any) => {
  const currUser = useSelector(selectUser);

  if (!currUser) {
    return <Navigate to="/landing" />;
  } else {
    
    return children;

  }

  
};

export default ProtectedRoute;
