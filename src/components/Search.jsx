import { useState } from "react"

function Search (props) {
    const [search, setSearch] = useState("")
    const onSearchChage = (event) => {
        setSearch(event.target.value);
        props.onSearch(event.target.value);
    }

    return (
        <>
        <div>
        cari artikel: <input onChange={onSearchChage}></input>{" "}
    </div>
    <small>ditemukan 0 data dari {search}</small>
        </>
    )
}

export default Search