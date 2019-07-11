

function setToken(){
    if(token){          //"what it's called", and the actual item
        localStorage.setItem('token', token)
    } else {
        localStorage.removeItem('token')
    }
}

export default setToken