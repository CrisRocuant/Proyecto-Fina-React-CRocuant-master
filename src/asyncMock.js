const products = [
    { 
        id: '1', 
        name: 'Camiseta Argentina 2022', 
        price: 16000, 
        category: 'camiseta', 
        img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg', 
        stock: 15, 
        description:''
    },
    { id: '2', name: 'Camiseta River 2022/2023', price: 15499, category: 'camiseta', img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42f6e0d4f39047e8b476aee60109bc4c_9366/Camiseta_Titular_River_Plate_22-23_Blanco_GB7592_01_laydown.jpg', stock:15, description:''},
    
    { id: '3', name: 'Botines Predator Edge 3', price: 32000, category: 'botin', img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edf66d52c1c54dc2b2c8ae9b00fd2065_9366/Botines_Predator_Edge.3_Terreno_Firme_Blanco_GW1002_22_model.jpg', stock: 10, description:''},
    
    { id: '4', name: 'Zapatillas Ultraboost 5.0', price: 50000, category: 'zapatilla', img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd7424d087c64c038704ac84012e06a5_9366/Zapatillas_Ultraboost_5.0_DNA_Blanco_GW5125_01_standard.jpg', stock:20, description:''}
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 50)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 50)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 50)
    })
}