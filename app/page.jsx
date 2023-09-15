import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';
import Link from 'next/link';

export const metadata = {
  title: 'Indie Gamer',
}

export default async function HomePage() {
  const review = await getFeaturedReview();
  console.log('[Homepage] rendering');
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>
      <div className='bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full'>
        <Link
          href={`/reviews/${review.slug}`}
          className='flex flex-col sm:flex-row'
        >
          <img
            src={review.image}
            alt={review.slug}
            width='320'
            height='180'
            className='mb-2 rounded-t sm:rounded-l sm:rounded-r-none'
          />
          <h2 className='font-semibold font-orbitron py-1 text-center sm:px-2'>
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
