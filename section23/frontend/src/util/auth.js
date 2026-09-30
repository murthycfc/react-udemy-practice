import {redirect} from 'react-router-dom'

export function getTokenExpirationDuration(){
    const expiration = localStorage.getItem('expiration');
    const expirationDate = new Date(expiration);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken(){

    const token = localStorage.getItem('token');
    if(!token){
        return null;
    }
    const tokenDuration = getTokenExpirationDuration();
    if(tokenDuration<0){
        return 'EXPIRED';
    }
    return token;
    
}

export function tokenLoader(){
    
    return getAuthToken()
}

export function checkAuthLoader(){
    const token = getAuthToken();
    if(!token){
        console.log('not logged in')
        return redirect('/auth');
    }else{
        console.log('logged in')
        return null;
    }
}