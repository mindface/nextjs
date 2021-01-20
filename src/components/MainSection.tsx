import React , { useState,useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { Posts } from '../models/Posts'
import PostList from '../components/PostList'
import { useRootSelector } from '../modules/reducer'

interface PostsProps {
   posts: Posts[]
}

export default function MainSection() {
   
   const pyDataItem = useRootSelector( state => state.posts )
   let [addPyData,setPyData] = useState([pyDataItem[0].pyDataItem])

   useEffect(() => {
    const getDataer = async () => {
     const response = await pyDataItem
     addPyData = response[0].pyDataItem.then((res)=>{
      let n = res.map((data,idx) => {
        return data
      })
      console.log(n)
      setPyData(n)
     })
   }
    getDataer()
  }, [])

   return (
     <section className="main-section">
       <h1>kokoko</h1>
       <ul className="post-list">
        {addPyData.map( (post,index) => {
          return (
            <li key={index} className="post-item">
              <h3 className="header__title">
                 {post.frame}
              </h3>
              <p className="text">
                 {post.text_data}
              </p>
              <img src={post.imgPath} alt=""/>
            </li>
          )
        })}
      </ul>
       <PostList posts={pyDataItem} />
     </section>
   )
}

