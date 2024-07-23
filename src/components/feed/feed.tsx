import { Photo } from '@/actions/photos-get';
import FeedFotos from './feed-photos';

export default async function Feed({ fotos }: { fotos: Photo[] }) {
  return (
    <div>
      <FeedFotos photos={fotos} />
    </div>
  );
}
