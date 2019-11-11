
import UserRoute from '../../app/auth/UserRoute';
import AuthRoute from '../../app/auth/AuthRoute';
import BodiceRoute from '../../app/bodice/BodiceRoute';
const Routes = [
  {
    url: 'users',
    route: UserRoute
  },
  {
    url: 'auth',
    route: AuthRoute,
    gaurd: false
  }

];

export default Routes;
