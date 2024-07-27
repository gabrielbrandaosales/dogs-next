'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-errorr';
import login from './login';
import { loginCriarSchema } from '@/schemas/login-criar';
import { z } from 'zod';

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    const result = loginCriarSchema.parse({ username, email, password });
    formData.set('username', result.username);
    formData.set('email', result.email);
    formData.set('password', result.password);
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    console.log(response.ok);

    if (!response.ok) throw new Error('Email ou usuário já cadastrado');

    const data = await response.json();

    const { ok } = await login({ ok: true, error: '', data }, formData);

    if (!ok) throw new Error('Erro ao logar');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      const formatError = error.format();
      return { ok: false, error: formatError, data: null };
    }

    return apiError(error);
  }
}
