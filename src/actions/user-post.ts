'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-errorr';
import login from './login';

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password || !email)
      throw new Error('Preencha todos os campos');
    if (password.length < 6)
      throw new Error('Senha deve conter mais de 6 digitos.');
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Email ou usuário já cadastrado');

    const data = await response.json();

    const { ok } = await login({ ok: true, error: '', data }, formData);

    if (!ok) throw new Error('Erro ao logar');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
