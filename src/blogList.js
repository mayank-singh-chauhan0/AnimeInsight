import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({blogs,title}) => {


    return (  
        <div className="blog-list">
             <h2 className="text-[30px] text-[#1e1e1e] mb-[8px] font-bold" >{title}</h2>
            {
               
                 blogs.map((ichigo)=>(
                    <div className="blog-preview key={ichigo.id} pt-[10px] pl-[16px] mt-[20px] ml-0 border-b-[#fafafa] border-[1px] hover:shadow-lg hover:transition duration-20 ease-in-out"> 
                    <Link to={`/blogs/${ichigo.id}`}>
                    <h2 className="text-[20px] text-[#f1356d] mb-[8px] font-bold">{ichigo.title}</h2>
                    <p>Written by {ichigo.author}</p>
                    </Link>
                    
                    {/* <button className=" border-[1px] rounded-md h-[25px] text-[13px] bg-gray-100  hover:bg-gray-400" onClick={()=>handleDelete(ichigo.id)}>Delete blog</button> */}
                    </div>
                    
                   )) 
            }
        </div>
    );
}
 
export default BlogList;