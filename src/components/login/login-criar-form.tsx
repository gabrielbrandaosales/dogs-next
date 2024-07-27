'use client';

import { useFormState, useFormStatus } from 'react-dom';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import styles from './login-form.module.css';
import userPost from '@/actions/user-post';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state]);

  console.log(state.error);

  return (
    <form action={action} className={styles.form}>
      <Input
        label="Usuário"
        error={state.error?.username && state.error.username?._errors[0]}
        name="username"
        type="text"
      />

      <Input
        label="Email"
        error={state.error?.email && state.error.email?._errors[0]}
        name="email"
        type="email"
      />
      <Input
        label="Senha"
        error={state.error?.password && state.error.password?._errors[0]}
        name="password"
        type="password"
      />
      {typeof state.error === 'string' && <ErrorMessage error={state.error} />}
      <FormButton />
    </form>
  );
}
