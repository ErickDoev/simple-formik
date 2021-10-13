import {useEffect,useState,memo,useMemo, useCallback} from 'react';
const initialState = [
        {id:'1',name:'Uno'},
        {id:'2',name:'Dos'},
        {id:'3',name:'Tres'},
        {id:'4',name:'Cuatro'},
        {id:'5',name:'Cinco'},
        {id:'6',name:'Seis'}
    ]


export const ListaApp = () => {

    const [todo,setTodo] = useState(initialState);
    const [inputVal,setInpuVal]=useState('');
    const[search,setSearch]=useState('');

    const filtredTodos = useMemo(() =>
        todo.filter(e => {
           //console.log('filter');
            return e.name.toLowerCase().includes(search.toLowerCase())
        })
    ,[search,todo]);

    const handleDelete = useCallback((id) => {

        setTodo(state=>(state.filter((e) => (
            e.id !== id
        ))));

        //setTodo(todo.filter(t => t.id !== id));

    },[]);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const newTodo = {
            id:new Date().getTime(),
            name:inputVal
        }
        setTodo(state=>([
            ...state,
            newTodo
        ]))
    }

    const handleSearch = () => {
        setSearch(inputVal)
    }

    const handleChange = (e) => {
        setInpuVal(e.target.value)
    }

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button type="submit">Agregar todo</button>
                <button onClick={handleSearch}>Buscar</button>
            </form>
            <Lista todo={filtredTodos} handleDelete={handleDelete}/>
            
        </>
    )
}

//memo detecta handleDelete como nueva prop y se renderiza el componente de nuevo   
const Lista = memo(({todo,handleDelete}) => {


    useEffect(() => {
        console.log('Render de Lista');
    })

    return (
        <>
            <ul>
                {todo.map((e) => (
                    <Item key={e.id} name={e.name} id={e.id} handleDelete={handleDelete}/>
                ))}
            </ul>
        </>
    )
})

const Item = memo(({id,name,handleDelete}) => {



    useEffect(() => {
        console.log('Render de item');
    })


    return(
        <li onClick={()=>{handleDelete(id)}}>
            <p>{`id: ${id} - name:${name} `}</p>
        </li>
    )
})