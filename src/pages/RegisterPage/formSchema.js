import { z } from "zod";

export const formSchemaRegister = z
  .object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z
      .string()
      .nonempty("E-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    bio: z.string().nonempty("Sua Bio é obrigatória"),
    contact: z.string().nonempty("Contato obrigatório"),
    course_module: z.string().nonempty("Módulo é obrigatório"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "No mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiuscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minuscula")
      .regex(/(?=.*?[0-9])/, "É necessário um número inteiro")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário um caracter especial (#?!@$%^&*-)"
      ),
    confirmPassword: z.string().nonempty("Confirme a senha"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
