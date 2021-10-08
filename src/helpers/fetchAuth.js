export const fetchLogin = async(data) => {
    const url = 'https://journal-app-xprs.herokuapp.com/api/auth';
    const resp = await fetch(url,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const body = await resp.json()
    return body;
}