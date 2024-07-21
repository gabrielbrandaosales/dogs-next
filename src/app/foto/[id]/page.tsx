export default async function FotoIdPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main>
      <h1>Foto Id: {params.id}</h1>
    </main>
  );
}
