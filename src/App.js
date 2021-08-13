import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Stared from './pages/Stared';
import PrivateRoute from './components/PrivateRoute';

import { AuthProvider } from './state/providers/auth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/stared" component={Stared} />
        </>
      </Router>
    </AuthProvider>
  );
};

export default App;
