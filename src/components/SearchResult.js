function SearchResult({ searchResults }) {
  return (
    <div>
      {searchResults.map((result) => {
        return <p>{result.title}</p>
      })}
    </div>
  );
}

export default SearchResult;