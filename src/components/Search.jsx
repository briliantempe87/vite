import { useState } from "react"

function Search (props) {
    const [search, setSearch] = useState("")

    const onSearchChange = () => {
        props.onSearchChange(search);
    }
const searchKeydown = (e) => {
    if (e.key === "Enter") {
        onSearchChange()
    }
}

    return (
        <>
        <div>
        cari artikel: <input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeydown}></input>{" "}
        <button onClick={onSearchChange}>cari</button>
    </div>
    <small>ditemukan {props.totalPosts} data dari {search}</small>
        </>
    )
}

export default Search