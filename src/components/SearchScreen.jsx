import {useParams}from 'react-router-dom'

export const SearchScreen = () => {


    const { id } = useParams()
    return (
        <div>
            <p>{id}</p>
        </div>
    )
}
