import z from "zod";
export declare const inputSigninObject: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type InputSigninObject = z.infer<typeof inputSigninObject>;
