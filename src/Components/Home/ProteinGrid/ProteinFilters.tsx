import type { ProteinFilter } from "./types";

type ProteinFiltersProps = {
  activeFilter: ProteinFilter;
  filters: ProteinFilter[];
  onFilterChange: (filter: ProteinFilter) => void;
};

export default function ProteinFilters({ activeFilter, filters, onFilterChange }: ProteinFiltersProps) {
  return (
    <div className="mt-8 flex flex-col gap-4 border-b border-[#ededeb] pb-6 sm:flex-row sm:items-center">
      <p className="text-[11px] font-medium text-[#30342f]">Filter by interest</p>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} type="button" onClick={() => onFilterChange(filter)} className={`rounded-full border px-4 py-2 text-[9px] transition ${activeFilter === filter ? "border-[#075438] bg-[#f4faf6] font-semibold text-[#075438]" : "border-[#ebedeb] bg-white text-[#424742] hover:border-[#b8c5bb]"}`}>
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
