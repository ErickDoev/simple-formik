import { useParams } from "react-router-dom"

export const SearchScreen = () => {

    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Search Screen</h1>


        </div>
    )
}
