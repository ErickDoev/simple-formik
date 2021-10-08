import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import {LoginScreen} from './LoginScreen';
import {RegisterScreen} from './RegisterScreen';
import {DashboardScreen} from './DashboardScreen';
import { NotFound404 } from './NotFound404';
import { SearchScreen } from './SearchScreen';

export const RouterScreen = () => {
    return (
        <div>
            <Router>
                   
                <Switch>

                    <Route 
                        exact
                        path='/'
                        component={DashboardScreen}/>
                    <Route 
                        
                        path='/login'
                        component={LoginScreen}/>

                    <Route 
                        
                        path='/register'
                        component={RegisterScreen}/>

            
                    <Route 
                        
                        path='/search/:id'
                        component={SearchScreen}/>

                    <Route
                        path='*'
                        component={NotFound404}
                    />
                </Switch>
            </Router>
        </div>
    )
}

