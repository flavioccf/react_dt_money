import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary></Summary>
      <main className="w-full max-w-screen-lg px-6 mt-16 mb-0 mx-auto">
        <SearchForm />
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2 mt-6">
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td
                    className="py-8 px-5 bg-gray-700 rounded-tl-md rounded-bl-md"
                    width="50%"
                  >
                    {transaction.description}
                  </td>
                  <td className="py-8 px-5 bg-gray-700">
                    <span
                      className={
                        transaction.type === "income"
                          ? "text-green-300"
                          : "text-red-300"
                      }
                    >
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </span>
                  </td>
                  <td className="py-8 px-5 bg-gray-700">
                    {transaction.category}
                  </td>
                  <td className="py-8 px-5 bg-gray-700 rounded-tr-md rounded-br-md">
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
