import {useLocation} from 'react-router-dom'
export const NotFound404 = () => {
    const location = useLocation(); 

    return (
        <div>
            Page not found {location.pathname}
        </div>
    )
}
