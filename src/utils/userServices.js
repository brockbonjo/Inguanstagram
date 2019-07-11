import tokenServices from './tokenServices';

const BASE_URL = './routes/users';

function signup(users){
    return fetch(BASE_URL + 'signup',{
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok) return res.json()
        throw  new Error('Sorry email\'s taken' )
    })
    .then(({ token }) => tokenServices.setToken(token));
}