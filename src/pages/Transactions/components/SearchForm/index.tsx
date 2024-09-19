import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <form
      className="flex gap-4"
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        className="rounded-md border-0 flex-1 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
        placeholder="Search by transaction"
        {...register("query")}
      />
      <button
        disabled={isSubmitting}
        className={`flex items-center justify-center gap-3 border-2 border-green-300 text-green-300 font-bold p-4 bg-transparent rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white transition ${
          isSubmitting && "opacity-50 cursor-not-allowed"
        }`}
        type="submit"
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  );
}
