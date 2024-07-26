import z from 'zod';

export const loginCriarSchema = z.object({
  username: z.string().min(3, 'Usuário deve ter no mínimo 3 caracteres'),
  email: z.string(),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type LoginCriarSchema = z.infer<typeof loginCriarSchema>;
