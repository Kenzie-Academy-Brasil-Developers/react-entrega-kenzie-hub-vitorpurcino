import { z } from "zod";

export const formSchemaLogin = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Forneça um e-mail válido"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiuscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minuscula")
    .regex(/(?=.*?[0-9])/, "É necessário um número inteiro")
    .regex(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário um caracter especial (#?!@$%^&*-)"
    ),
});
