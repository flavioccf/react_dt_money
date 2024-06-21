import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <header className="pt-10 px-0 pb-28 bg-gray-900">
      <div className="w-full max-w-screen-lg px-6 my-0 mx-auto flex justify-between items-center">
        <span className="flex justify-center items-center gap-4">
          <img src={logoImg} alt="" />
          DT Money
        </span>
        <Dialog.Root>
          <Dialog.Trigger
            className="h-[50px] bg-green-500 font-bold py-0 px-5 rounded-md hover:bg-green-700 transition"
            asChild
          >
            <button>New Transaction</button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  );
}
