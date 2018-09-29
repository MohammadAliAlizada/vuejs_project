export function getLocalUser(){
    const userStr = localStorage.getItem("access_token");

    if(!userStr){
        return null;
    }

    return JSON.parse(userStr);
}