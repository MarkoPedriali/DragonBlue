export const Api = {
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',
    authorization: 'marko.pedriali@hotmail.com',

    readAllUrl: () => Api.baseUrl + '/',
    createUrl: () =>Api.baseUrl + '/',
    deleteAllUrl: () =>Api.baseUrl + '/',
    deleteUrl: id => Api.baseUrl + '/' + id,

    //para pergartudo

    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                Authorization: Api.authorization,
            }),
        })
    },

    buildApiPostRequest: (url ,body) =>{
        return fetch(url, {
            method: 'POST',
            headers: new Headers({
                Authorization : Api.authorization,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(body)
        })
    },

    //Delete para apagar todos os dados

    buildApiDeleteRequest: url => {
        return fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                Authorization: Api.authorization
            })
            
        })
    }
}