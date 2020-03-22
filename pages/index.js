import { GlobalLayout } from '~/layouts/global';
import { Users } from '~/components/Users';

export default function Index()
{
  return (
    <GlobalLayout>
      <p>Hello Next.js</p>
      <Users/>
    </GlobalLayout>
  );
}
