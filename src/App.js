import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Stared from './pages/Stared';
import PrivateRoute from './components/PrivateRoute';

import { AuthProvider } from './state/providers/auth';
import StaredProvider from './state/providers/stared';


import Header from './components/Header';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
          <>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <StaredProvider>
              <Route exact path="/stared" component={Stared} />
            </StaredProvider>
          </>
      </Router>
    </AuthProvider>
  );
};

export default App;
