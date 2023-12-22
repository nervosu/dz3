import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default PostList;