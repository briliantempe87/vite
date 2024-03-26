import { useState } from "react"

function Search (props) {
    const [search, setSearch] = useState("")
    const onSearchChange = (event) => {
        setSearch(event.target.value);
        props.onSearchChange(event.target.value);
    }

    return (
        <>
        <div>
        cari artikel: <input onChange={onSearchChange}></input>{" "}
    </div>
    <small>ditemukan 0 data dari {search}</small>
        </>
    )
}

export default Search