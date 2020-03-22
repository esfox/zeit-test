import { GlobalLayout } from '~/layouts/global';

export default function About({ title })
{
  return (
    <GlobalLayout>
      <h1>{title}</h1>
      <p>This is the about page</p>
    </GlobalLayout>
  );
}