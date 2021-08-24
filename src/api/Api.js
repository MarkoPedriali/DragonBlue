export const Api = {
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',
    authorization: 'marko.pedriali@hotmail.com',

    createUrl: () =>Api.baseUrl + '/',
    deleteAllUrl: () =>Api.baseUrl + '/',

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