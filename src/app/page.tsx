import photosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minha Conta',
};

export default async function Home() {
  const data = await photosGet();
  return (
    <section className="container mainContainer">
      <Feed fotos={data} />
    </section>
  );
}
