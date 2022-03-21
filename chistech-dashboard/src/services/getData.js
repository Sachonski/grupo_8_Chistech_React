
export default function getData(url) {
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            const respuesta = res
            return respuesta
        })
        .catch((error) => {
            console.log(error);
        });

}