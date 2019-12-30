import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title='Hello Next.js'></PostLink>
        <PostLink title='Learn Next.js is awesome'></PostLink>
        <PostLink title='Deploy apps with Zeit'></PostLink>
      </ul>
    </Layout>
  );
};

export default Index;
