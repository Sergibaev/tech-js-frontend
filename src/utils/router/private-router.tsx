import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

const privateRoute = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useAuth()
    return (
        auth ? <Outlet/> : <Navigate to="login"/>
    )
};

export default privateRoute;
