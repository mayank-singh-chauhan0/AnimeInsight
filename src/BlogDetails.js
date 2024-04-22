import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div className="blog-details  text-[32px]">
            {/* <h2>Blog details - { id }</h2> */}
            {isPending && <div> Loading..</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="text-[25px] font-bold text-[#f1356d] mb-[10px]">{blog.title}</h2>
                    <p className="text-[20px]"> Written by {blog.author}</p>
                    <div className="mt-[20px] ml-0 text-[20px]">{blog.body}</div>
                    <button onClick={handleDelete} className=" bg-[#f1356d] text-[#fff] border-0  rounded-[8px] cursor-pointer min-w-20 text-[15px] p-[4px]" >Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;