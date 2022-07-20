
export const getProducts = async() => {
    let url = await fetch('https://fakestoreapi.com/products/')
    let data = await url.json();
    return data
}

export const getItem = async (id) => {
    let url = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await url.json();
    return data
}

export const getUser = async (id) => {
    let url = await fetch(`https://fakestoreapi.com/users/${id}`) 
    let data = await url.json();
    data.admin=false
    return data 
}