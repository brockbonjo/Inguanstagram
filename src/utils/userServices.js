import tokenService from './tokenServices';

const BASE_URL = '/routes/users/';

function signUp(user){
    return fetch(BASE_URL + 'signup',{//creates a new user
        method: 'POST',
        mode: 'cors',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
.then(res => {
        console.log(res)
        if(res.ok) return res.json()
        throw  new Error('Sorry email\'s taken' )
    })//provides the token
    .then(({ token }) => {tokenService.setToken(token)});
}

function getUser(){ 
    return tokenService.getUserFromToken()  
}

function logout(){
    return tokenService.removeToken();
}

function login(creds){
    return fetch(BASE_URL + 'login',{
        mode:'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
    })
    .then(res => {
        console.log(res)
        console.log(fetch)
        if(res.ok) return res.json();
        console.log(res.ok)
        throw new Error('Bad Credentials');
    })
    .then(({ token }) => {tokenService.setToken(token)});
}

export default {
    signUp,
    getUser,
    logout,
    login
}