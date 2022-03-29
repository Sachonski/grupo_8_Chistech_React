export default function getLast() {
    return fetch(`http://localhost:3030/api/products`)
        .then(res => res.json())
        .then(res => {
            const respuesta = res
            return respuesta
        })
        .catch((error) => {
            console.log(error);
        });
}