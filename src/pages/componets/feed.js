import PostLayout from './postlayout';
import Post from './post';

const Feed = ({email}) => {
  const postsData = [
    {
      author: email,
      content: "This page is not finished... "
    },
    {
      author: "Jane Doe",
      content: "This page is static?"
    }
  ];

  return (
    <PostLayout>
      <h1>Example cases</h1>
      {postsData.map((post, index) => (
        <Post key={index} author={post.author} content={post.content}>
         </Post>
         
      ))}
     
    </PostLayout>
  );
};

export default Feed;
