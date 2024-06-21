import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed h-dvh w-screen inset-0 bg-black/75">
        <Dialog.Content className="fixed min-w-[32rem] rounded-md py-10 px-12 bg-gray-800 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Dialog.Title>New Transaction</Dialog.Title>
          <Dialog.Close className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-gray-300 transition">
            <X size={24} />
          </Dialog.Close>
          <form action="" className="mt-8 flex flex-col gap-4">
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="text"
              placeholder="Description"
              required
            />
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="number"
              placeholder="Price"
              required
            />
            <input
              className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
              type="text"
              placeholder="Category"
              required
            />

            <button
              className="h-[58px] border-0 rounded-md bg-green-500 text-white font-bold py-0 px-5 mt-6 transition cursor-pointer hover:bg-green-700"
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
