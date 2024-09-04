const DetailsDynamic = dynamic(() => import('@/components/Details'));
const Loading = dynamic(() => import('@/components/Loading'));
import { getDetailsMovie } from '@/service';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const response = await getDetailsMovie(slug);
  return (
    <Suspense fallback={<Loading />}>
      <DetailsDynamic slug={slug} data={response ?? null} />
    </Suspense>
  );
};

export default page;
