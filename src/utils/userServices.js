import tokenServices from './tokenServices';

const BASE_URL = './routes/users';

function signUp(users){
    return fetch(BASE_URL + 'signup',{//creates a new user
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(users)
    })
    .then(res => {
        if(res.ok) return res.json()
        throw  new Error('Sorry email\'s taken' )
    })//provides the token
    .then(({ token }) => {tokenServices.setToken(token)});
}

function getUser(){ 
    return tokenServices.getUserFromToken()  
}

function logout(){
    return tokenServices.removeToken();
}

function login(creds){
    return fetch(BASE_URL + 'login',{
        method: 'POST',
        headers: new Headers ({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
})
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials');
    })
    .then(({ token }) => tokenServices.setToken(token));
}

export default {
    signUp,
    getUser,
    logout,
    login
}