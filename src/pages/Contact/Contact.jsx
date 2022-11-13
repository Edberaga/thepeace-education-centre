import React from "react";

export const Contact = () => {
    return (
        <>
        <div className="container-heading"><h1>Contact Us</h1></div>
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
        <textarea 
          name='content' 
          className='form-control form-textarea' 
          style={{height: 200}} 
          value={formData.content} 
          onChange={(e)=>handleChange(e)}
        />
        </>
    )
}