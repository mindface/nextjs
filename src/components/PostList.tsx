import React from 'react'
import { Posts } from '../models/Posts'

interface PostsProps {
 posts: Posts[]
}

class PostList extends React.Component<PostsProps> {
  constructor(props){
    super(props)
    this.state = {
      title: "PostList"
    }
  }

  render() {
    const posts = this.props.posts
    return (
      <ul className="post-list">
        {this.props.posts.map( (post,index) => {
          return (
            <li key={index} className="post-item">
              {/* <h3 className="header__title">
                 {post.frame}
              </h3>
              <p className="text">
                 {post.text_data}
              </p>
              <img src={post.imgPath} alt=""/> */}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PostList
