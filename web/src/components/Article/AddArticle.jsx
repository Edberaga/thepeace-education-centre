import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import {toast} from 'react-toastify';
import { Progress } from "reactstrap";
import React, {useState} from 'react';
import { db, storage } from '../../config/firebase';
import './AddArticle.css';

export default function AddArticle() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const handleChange=(e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleImageChange=(e) => {
    setFormData({...formData, image: e.target.files[0]})
  };

  const handlePublish = () => {
    if(!formData.title || !formData.content || !formData.image){
      alert('Please fill all the fields!');
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on("state_changed", (err) => {
      console.log(err);
    },
    () => {
      setFormData({
        title: '',
        content: '',
        image: '',
      });

      getDownloadURL(uploadImage.snapshot.ref)
      .then((url) => {
        const articleRef = collection(db, "Articles");
        addDoc(articleRef, {
          title: formData.title,
          content: formData.content,
          image: url,
          createAt: Timestamp.now().toDate()
        })
        .then(()=> {
          toast("Article added succesfully", {type: "success"});
        })
        .catch((err) => {
          toast("Error adding Article", {type: "error"});
        });
      });
    });
  };
  return (
    <>
      <div className="add-article-form" style={{position: "fixed"}}>
        <h2>Create Article</h2>
        {/*Title */}
        <label htmlFor="">Title</label>
        <input 
          type="text" 
          name='title' 
          className='form-control' 
          value={formData.title} 
          onChange={(e)=>handleChange(e)}
        />

        {/*Content*/}
        <label htmlFor="">Content</label>
        <textarea name='content' className='form-control form-textarea' value={formData.content} onChange={(e)=>handleChange(e)}/>

        {/*Title */}
        <label htmlFor="">Image</label>
        <input type="file" name='image' accept='image/*' className='form-control' onChange={(e)=>handleImageChange(e)}/>
        <Progress
          animated
          color="warning"
          striped
          value={18}
          className="article-process"
        />

        <button className='add-button' onClick={handlePublish}>Publish</button>
      </div>
    </>
  )
}
