import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc  } from 'firebase/firestore';
import { auth, db } from "../firebase"

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postcollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postcollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      

    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc)
  }


  return (
    <div className="homePage"> {postLists.map((post) => {
      return <div className="post"> 
        {" "}
        <div className="postHeader">
          {" "}
          <div className="title"> <h2> {post.title} </h2>
          </div>
          {!post.category ? (
            console.log()
          ) : <div className="category">  <h6> Category: {post.category}</h6> </div>}
          <div className="deletePost">

              {isAuth && post.author.id === auth.currentUser.uid && (<button onClick={() => {deletePost(post.id)}}> 
                &#9003;
              </button>
              )}
          </div>
        </div>
        <div className="postTextContainer"> {post.postText} </div>
        <h3 className="author">@{post.author.name}
        </h3> 
      </div>

    })} 
    </div>
  );
}

export default Home;