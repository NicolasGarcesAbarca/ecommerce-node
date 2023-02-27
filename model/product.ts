import z from 'zod';

export const ProductSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageUrl: z.string()
})

export type Product = z.infer<typeof ProductSchema>;

const products:Array<Product> = [
    {
        title: 'A Book',
        description: 'A Great Book',
        price: 12.99,
        imageUrl: 'https://picsum.photos/200'
    },
    {   
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