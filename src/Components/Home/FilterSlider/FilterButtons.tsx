import FilterButton from "./FilterButton"

function FilterButtons() {
  return (
    <div className="w-full flex justify-center space-x-2 my-10">
        <FilterButton text="Best Sellers"/>
        <FilterButton text="Bundles & Promotions"/>
        <FilterButton text="On Sale"/>
    </div>
  )
}

export default FilterButtons