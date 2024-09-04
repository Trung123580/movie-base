import Regions from '@/components/Regions';
import { getMoviesList } from '@/service';
const Page = async ({ params, searchParams }: { searchParams: { page: string; year: string }; params: { slug: string } }) => {
  const { slug } = params;
  const { page, year } = searchParams;
  const convertPageNumber = page ? Number(page) : 1;
  const convertYear = year ? Number(year) : 0;
  const response = await getMoviesList({ type: 'country', page: convertPageNumber, slug: slug, year: convertYear });
  return <Regions yearDate={year} slug={slug} dataDefault={response} page={convertPageNumber} />;
};

export default Page;
