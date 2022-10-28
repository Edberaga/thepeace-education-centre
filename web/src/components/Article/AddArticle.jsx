import React from 'react'

export default function AddArticle() {
  return (
    <>
      <div className="add-article-form" style={{position: "fixed"}}>
        <h2>Create Article</h2>
        {/*Title */}
        <label htmlFor="">Title</label>
        <input type="text" name='title' className='form-control' />

        {/*Content*/}
        <label htmlFor="">Content</label>
        <textarea name='content' className='form-control' />

        {/*Title */}
        <label htmlFor="">Title</label>
        <input type="file" name='image' accept='image/*' className='form-control' />

        <button className=''>Publish</button>
      </div>
    </>
  )
}
