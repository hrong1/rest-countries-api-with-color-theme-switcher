export default function SearchBar() {
  return (
    <search className="
      flex
      m-5
    ">
      <form
        className="
          flex
          w-full
          items-center justify-between gap-4
        "
      >
        <input
          className="
            bg-surface
            rounded-sm
            p-3
            shadow
            w-1/3
          "
          placeholder="Search for a country…"
        />
      
      <fieldset
        className="
          bg-surface
          rounded-sm
          p-3
          shadow
          flex
          items-center
          gap-2
        "
      >
        <legend>Filter by Region</legend>
            <select id="category" name="category" className="bg-transparent outline-none cursor-pointer">
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
      </fieldset>
      </form>
    </search>
  );
}