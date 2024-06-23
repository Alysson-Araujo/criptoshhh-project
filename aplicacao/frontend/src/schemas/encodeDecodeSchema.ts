import * as z from 'zod';

export const formSchema = z.object({
    text: z.string(),
    shift: z.number(),
});

export type EncodeDecodeFormData = z.infer<typeof formSchema>;