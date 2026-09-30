
export default function SearchBar({search, setSearch}){
    return(
        <div className="w-50 mx-auto mb-3">
            <input
                 type="text" 
                 placeholder="search name" 
                 value={search} 
                 onChange={(e)=>setSearch(e.target.value)}
                 className="form-control"
                 />
        </div>
    )
}