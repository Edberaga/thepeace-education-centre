import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { deleteObject, ref } from 'firebase/storage';


function DeleteArticle({id, image}) {
    const handleDelete = async() => {
        if(window.confirm("Are you sure you want to delete this Article?")) {
            try {
                await deleteDoc(doc(db, "Articles", id))
                alert("Article Deleted Successfully")
                
                //Delete the image from the storage
                const storageRef = ref(storage, image)
                await deleteObject(storageRef)
            } 
            catch(error) {
                alert("Error Deleting Article...")
                console.log(error)
            }
        }
    }
    
  return (
    <div>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteArticle