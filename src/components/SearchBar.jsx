import { useState } from "react"

const SearchBar = (props) => {
  let [searchTerm, setSearchTerm] = useState('')

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Enter a search term here" onChange={(e) => props.handleSearch(e, e.target.value)} />
      <input type="submit" />
    </form>
  )
}

export default SearchBar