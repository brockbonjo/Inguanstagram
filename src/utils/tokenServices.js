

function setToken(){
    if(token){
        localStorage.setItem('token', token)
    } else {
        localStorage.removeItem('token')
    }
}

export default setToken