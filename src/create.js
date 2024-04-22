import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('');
    const[isPending,setIspending]=useState(false);
    const history=useHistory();
    const handelSubmit=(e)=>{
          e.preventDefault();
          const blog={ author, title, body };

         setIspending(true);
          fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
          }).then(()=>{
            console.log('new blog added')
            setIspending(false);
          history.push('/')// rout for home page
          })
       
    }
    return (
        <div className="create max-w-400px mt-0 ml-auto text-center" >
            <h2 className="text-[20px] text-[#f1356d] mb-[30px] font-bold">Add a new anime review</h2>
            <form onSubmit={handelSubmit} >
             <label className="text-left block ">Anime Name:</label>
             <input  className="w-full pt-[6px] pl-[10px] mt-[10px] ml-0 border border-solid border-[#ddd] block" type="text"
             required
             onChange={(e)=>setTitle(e.target.value)}
              />
            <label className="text-left block mt-[10px]">Storyline:</label>
             <textarea  className="w-full pt-[6px] pl-[10px] mt-[10px] ml-0 border border-solid border-[#ddd] block" required 
              value={body}
              onChange={(e)=>setBody(e.target.value)}
             >               
             </textarea>
             <label className="text-left block mt-[10px]">Author:</label>
               <input  className="w-full pt-[6px] pl-[10px] mt-[10px] ml-0 border border-solid border-[#ddd] block" type="text"
             required
             value={author}
             onChange={(e)=>setAuthor(e.target.value)}
              />
          
{!isPending && <button className="bg-[#f1356d] mt-[10px] text-[#fff] border-0 p-[8px] rounded-[8px] cursor-pointer">Add Blog</button>}            
{isPending && <button disabled className="bg-[#f1356d] mt-[10px] text-[#fff] border-0 p-[8px] rounded-[8px] cursor-pointer">Adding blog...</button>}            

            </form>
        </div>
     );
}
 
export default Create;