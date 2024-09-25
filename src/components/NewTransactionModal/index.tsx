import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

function NewTransactionModalComponent() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction;
    }
  );

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateNewTransction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    createTransaction(data);
    reset;
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed h-dvh w-screen inset-0 bg-black/75">
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed min-w-[32rem] rounded-md py-10 px-12 bg-gray-800 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <Dialog.Title>New Transaction</Dialog.Title>
          <Dialog.Close className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-gray-300 transition">
            <X size={24} />
          </Dialog.Close>
          <form
            className="mt-8 flex flex-col gap-4"
            onSubmit={handleSubmit(handleCreateNewTransction)}
          >
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="text"
              placeholder="Description"
              required
              {...register("description")}
            />
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="number"
              placeholder="Price"
              required
              {...register("price", { valueAsNumber: true })}
            />
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="text"
              placeholder="Category"
              required
              {...register("category")}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <RadioGroup.Root
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-2 gap-4 mt-2"
                  >
                    <RadioGroup.Item
                      value="income"
                      className="bg-gray-700 flex align-center justify-center cursor-pointer gap-2 rounded-md text-gray-300 p-4 transition data-[state=unchecked]:hover:bg-gray-600 data-[state=checked]:bg-green-300 data-[state=checked]:text-white group"
                    >
                      <ArrowCircleUp
                        size={24}
                        className="text-green-300 group-data-[state=checked]:text-white"
                      />
                      Income
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      value="outcome"
                      className="bg-gray-700 flex align-center justify-center cursor-pointer gap-2 rounded-md text-gray-300 p-4 transition data-[state=unchecked]:hover:bg-gray-600 data-[state=checked]:bg-red-300 data-[state=checked]:text-white group"
                    >
                      <ArrowCircleUp
                        size={24}
                        className="text-red-300 group-data-[state=checked]:text-white"
                      />
                      Outcome
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                );
              }}
            />
            <button
              className={`h-[58px] border-0 rounded-md bg-green-500 text-white font-bold py-0 px-5 mt-6 transition cursor-pointer hover:bg-green-700 ${
                isSubmitting && "opacity-50 cursor-not-allowed"
              }`}
              type="submit"
            >
              Save
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}

export const NewTransactionModal = memo(NewTransactionModalComponent);
