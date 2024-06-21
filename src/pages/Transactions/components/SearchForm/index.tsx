import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        className="rounded-md border-0 flex-1 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
        placeholder="Search by transaction"
      />
      <button
        className="flex items-center justify-center gap-3 border-2 border-green-300 text-green-300 font-bold p-4 bg-transparent rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white transition"
        type="submit"
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  );
}
