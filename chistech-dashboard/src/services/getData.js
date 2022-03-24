
export default function getData(url) {
    return fetch(`http://localhost:3030/api/${url}`)
        .then(res => res.json())
        .then(res => {
            
            return res
        })
        // .catch((error) => {
        //     console.log(error);
        // });

}