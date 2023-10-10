import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({queries}) => {
    const { query} = useParams()
    const [page, setPage] = useState(pagination[0].startIndex);
    const navigate = useNavigate()
    const paginationClickHander = (startIndex) =>{
        setPage(startIndex)
        navigate(`/${query}/${startIndex}`)
    }

    useEffect(()=>{
        setPage(pagination[0].startIndex)
    },[query]);



    return <div className="flex flex-col items-center py-14 max-w-[700px]">
        <div className="relative text-[#4285f4]">
            {queries.previousPage && (
                <div className="absolute left-[-30px] md:left-[-40px] top-[10px]" onClick={()=>paginationClickHander(queries.previousPage[0].startIndex)}>
                    <FiChevronLeft size={20} className="cursor-pointer"/>
                    <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
                        pre
                    </div>
                </div>
            )}
            <img src={Logo} className="w-[250px] md:w-[300px]"  alt="" />
            {queries.nextPage && (
                <div className="absolute right-[-30px] md:right-[-40px] top-[10px]" onClick={()=>paginationClickHander(queries.nextPage[0].startIndex)}>
                    <FiChevronRight size={20} className="cursor-pointer"/>
                    <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
                        Next
                    </div>
                </div>
            )}
        </div>
        <div className="flex gap-3 text-[#4285f4] text-sm">
            {pagination.map((p)=>{
                return(
                    <span key={p.page} onClick={()=> paginationClickHander(p.startIndex)} className={`cursor-pointer ${page === p.startIndex ? 'text-black': ''}`}>{p.page}</span>
                )
            })}
        </div>
    </div>
};

export default Pagination;
