import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
  return (
    <div className={p.post__item}>
      <div className={p.post}>
        <img className={p.post__avatar} src="https://phonoteka.org/uploads/posts/2022-09/thumbs/1663428680_11-phonoteka-org-p-samp-art-vkontakte-16.jpg" alt="" />
        <p className={p.post__name}>{props.message}</p>
      </div>

      <div className={p.feedback}>
        <span className={p.like}>Likes:</span>
        <span className={p.count}>{props.count}</span>
      </div>

    </div>
  )
}

export default Post;