
import {useLocation} from 'react-router-dom'

export const NotFound404 = () => {

    const location = useLocation();
  
    return (
        <div>
            <h1>Página no encontrada: {location.pathname}</h1>
        </div>
    )
}
