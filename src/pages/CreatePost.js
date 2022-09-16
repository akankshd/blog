import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../firebase"
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState(""); 
    const [postText, setPostText] = useState(""); 
    const [category, setCategory] = useState("");
    // storing in db
    const postcollectionRef = collection(db, "posts");
    let navigate = useNavigate();
    const createPost = async () =>  {
        await addDoc(postcollectionRef, {title, postText,category, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}});
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, []);

  return (
    <div className="createPostPage"> 
        {" "}
        <div className="cpContainer">
            <h1> Create a Post </h1>
            <div className="inputGp"> 
            <label> Title: </label>

            <input placeholder="Title..." onChange={(event) => {setTitle(event.target.value);
            }} required/>  


             </div>
            <div className="inputGp">
            <label> Category </label>

                <input placeholder="Category of Post.." onChange={(event) => {setCategory(event.target.value);
                }}/>
            </div>
            <div className="inputGp">  
            <label> Post: </label>    
            <textarea placeholder="Post..." 
            onChange={(event) => {setPostText(event.target.value);
            }}/> 
            </div>
            <button onClick={createPost}> Submit Post </button>
        </div>
     </div>
  )
}

export default CreatePost;