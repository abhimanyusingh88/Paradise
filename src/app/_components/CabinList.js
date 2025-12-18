import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
// import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {

  const cabins = await getCabins();
  if (!cabins.length) return null;
  let displayCabins;
  if (filter === "all") {
    displayCabins = cabins;
  }
  if (filter === "small") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter === "medium") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7);
  }
  if (filter === "large") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 xl:gap-14 max-w-full">
    {displayCabins.map((cabin) => (
      <CabinCard cabin={cabin} key={cabin.id} />
    ))}
  </div>;
}
export default CabinList;