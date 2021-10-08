import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {LoginScreen} from './LoginScreen';
import {RegisterScreen} from './RegisterScreen';
import {DashboardScreen} from './DashboardScreen';
import { NotFound404 } from './NotFound404';

export const RouterScreen = () => {
    return (
        <div>
            <Router>
                   
                <Switch>

                    <Route 
                        exact
                        path='/login'
                        component={LoginScreen}/>

                    <Route 
                        exact 
                        path='/register'
                        component={RegisterScreen}/>

                    <Route 
                        exact
                        path='/'
                        component={DashboardScreen}/>

                    <Route
                        path='*'
                        component={NotFound404}
                    />
                </Switch>
            </Router>
        </div>
    )
}
