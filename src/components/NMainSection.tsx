import React , { useState,useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { Posts } from '../models/Posts'
// import PostList from '../components/PostList'
import { useRootSelector } from '../modules/reducer'

interface PostsProps {
   posts: Posts[]
}

class MainSection extends React.Component<PostsProps, {}> {
  constructor(props){
    super(props)
    this.state = {
      test: "MainSection",
      posts : [
       {
         id: 0,
         text:"tttt",
         name:"tttt",
         imgPath:"/vercel.svg",
       },
       {
         id: 1,
         text:"tttt",
         name:"tttt",
         imgPath:"/vercel.svg",
       },
       {
         id: 2,
         text:"tttt",
         name:"tttt",
         imgPath:"/vercel.svg",
       },
      ]
    }

  }

  componentDidMount(){
   const { posts } = useRootSelector( state => state.posts )
   console.log(posts)
  }


  // static async getInitialProps() {
  //   try {
  //     const json = [
  //       {
  //         id: 0,
  //         text:"tttt",
  //         name:"tttt",
  //         imgPath:"/static/",
  //       },
  //       {
  //         id: 1,
  //         text:"tttt",
  //         name:"tttt",
  //         imgPath:"/static/",
  //       },
  //       {
  //         id: 2,
  //         text:"tttt",
  //         name:"tttt",
  //         imgPath:"/static/",
  //       },
  //     ]

  //     return {
  //       posts: json
  //     }
  //   } catch(e) {
  //     console.log(e)
  //     return {
  //       posts: []
  //     }
  //   }
  // }

  render() {
    return (
      <section className="main-section">
        <h1>kokoko</h1>
        {/* <PostList posts={this.state.posts} /> */}
      </section>
    )
  }
}

export default MainSection



// export default function MainSection() {

//    const { posts } = useRootSelector( state => state.posts )
//    console.log(posts)


//    return (
//      <section className="main-section">
//        <h1>kokoko</h1>
//      </section>
//    )
// }
