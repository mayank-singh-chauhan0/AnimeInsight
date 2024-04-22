import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar p-[20px] flex items-center max-w-[600px]  m-auto border-b-[#fafafa] border-[1px]">
            <h1 className="text-[#f1356d] text-2xl font-bold">The Anime Blog</h1>
            <div className="links m-auto ">
               <div className="ml-[16px] p-[6px]"> 
               <Link to="/" className="hover:text-[#f1356d] ">Home </Link>
                <Link to="/create"  className="hover:text-[#f1356d] ml-5 " >New Blog</Link>
               </div>
                </div>
        </nav>
      );
}
 
export default Navbar ;
