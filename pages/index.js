import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = ({ id }) => (
  <li>
    <Link href='/p/[id]' as={`/p/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id='hello-nextjs'></PostLink>
        <PostLink id='learn-nextjs'></PostLink>
        <PostLink id='deploy-nextjs'></PostLink>
      </ul>
    </Layout>
  );
};

export default Blog;
