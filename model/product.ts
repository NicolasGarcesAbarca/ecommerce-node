import z from 'zod';

export const ProductSchema = z.object({
    title: z.string(),
})

export type Product = z.infer<typeof ProductSchema>;