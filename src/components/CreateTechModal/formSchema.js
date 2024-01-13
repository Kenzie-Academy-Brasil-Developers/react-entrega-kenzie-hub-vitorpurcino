import { z } from "zod";

export const formSchemaTech = z.object({
    title: z.string().nonempty("Nome da Tecnologia é obrigatório").trim(),
    status: z.string()
})