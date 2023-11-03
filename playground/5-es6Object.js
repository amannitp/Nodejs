const name="Aman"

const userAge=24


const user={
    name,
    userAge,
    location:" Patna"
}

console.log(user)

// object destructring

const product={
    label:" Red NoteBook",
    price:30,
    stock:12,
    salePrice:undefined
}

const {label:productLevel,price,stock,salePrice=90}=product;

console.log(productLevel)