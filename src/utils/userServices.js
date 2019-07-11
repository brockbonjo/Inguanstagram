import tokenServices from './tokenServices';

const BASE_URL = './routes/users';

function signUp(users){
    return fetch(BASE_URL + 'signup',{//creates a new user
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if(res.ok) return res.json()
        throw  new Error('Sorry email\'s taken' )
    })//provides the token
    .then(({ token }) => tokenServices.setToken(token));
}

module default signUp