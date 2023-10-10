import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { query, startIndex } = useParams()
    const navigate = useNavigate()
    const [searchQuery, setsearchQuery] = useState( query || '');
    const searchQueryHandler = (e)=>{
        if(e.key === 'Enter'  && searchQuery.length > 0){
            navigate(`/${searchQuery}/${1}`)
        }
    }
    return(
        <div id="searchBox" className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border-[#dfe1e5] rounded-3xl  hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
            <AiOutlineSearch size={18} color="#9aa0a6"/>
            <input type="text" placeholder="" className="grow outline-0 text-black/[0.87]" autoFocus value={searchQuery} onKeyUp={searchQueryHandler}  onChange={(e)=>setsearchQuery(e.target.value)}/>
        <div className="flex items-center gap-3">
        {
            searchQuery && (
                <IoMdClose size={24} color="#70757a" className="cursor-pointer" onClick={()=>setsearchQuery('')}/>
            )
        }
            <img src={MicIcon}   className="h-6 w-6 cursor-pointer"alt="" />
            <img src={ImageIcon} className="h-6 w-6 cursor-pointer" alt="" />
        </div>
        </div>
    ) 
};

export default SearchInput;
