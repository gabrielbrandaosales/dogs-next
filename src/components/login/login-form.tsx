import login from '@/actions/login';

export default async function LoginForrm() {
  return (
    <>
      <form action={login}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
