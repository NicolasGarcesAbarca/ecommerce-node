import z from 'zod';

export const ProductSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageUrl: z.string(),
    id: z.string(),
})

export type Product = z.infer<typeof ProductSchema>;

const products:Array<Product> = [
    {   
        // uid 50 characters 
        id:'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6',
        title: 'A Book',
        description: 'A Great Book',
        price: 12.99,
        imageUrl: 'https://picsum.photos/200'
    },
    {   // uid 50 characters
        id:'areallylonguidthatwillbeusedfortheidoftheproduct',
        title: 'A Carpet',
        description: 'A Great Carpet',
        price: 89.99,
        imageUrl: 'https://picsum.photos/200'
    }
];

export function getProducts():Array<Product>{
    return products;
};

export function addProduct(prod:Product){
    products.push(prod);
}

export function getProductById(id:string):Product|null{
    const prod=products.find(p=>p.id===id);
    if (prod) return prod;
    return null;
}