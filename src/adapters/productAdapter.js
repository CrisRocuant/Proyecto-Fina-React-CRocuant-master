export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()



    const productAdapted = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        cateogory: data.category,
        stock: data.stock
    }

    return productAdapted
}