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
import { QueryString } from './QueryString';
import { ListaApp } from './ListaApp';
import { RefHook } from './RefHook';

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
                        
                        path='/search/:pto&&:id'
                        component={SearchScreen}/>

                    <Route 
                        
                        path='/query'
                        component={QueryString}/>
                    
                    <Route 
                        
                        path='/lista'
                        component={ListaApp}/>

                    <Route 
                        path='/ref'
                        component={RefHook}
                        />

                    <Route
                        path='*'
                        component={NotFound404}
                    />
                </Switch>
            </Router>
        </div>
    )
}