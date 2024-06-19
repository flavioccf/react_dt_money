import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary></Summary>
      <main className="w-full max-w-screen-lg px-6 mt-16 mb-0 mx-auto">
        <SearchForm />
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2 mt-6">
          <tbody>
            <tr>
              <td
                className="py-8 px-5 bg-gray-700 rounded-tl-md rounded-bl-md"
                width="50%"
              >
                Website Development
              </td>
              <td className="py-8 px-5 bg-gray-700">
                <span className="text-green-300">$12,000.00</span>
              </td>
              <td className="py-8 px-5 bg-gray-700">Contract</td>
              <td className="py-8 px-5 bg-gray-700 rounded-tr-md rounded-br-md">
                04/13/2024
              </td>
            </tr>
            <tr>
              <td
                className="py-8 px-5 bg-gray-700 rounded-tl-md rounded-bl-md"
                width="50%"
              >
                Hydro Bill
              </td>
              <td className="py-8 px-5 bg-gray-700">
                <span className="text-red-300">- $2,000.00</span>
              </td>
              <td className="py-8 px-5 bg-gray-700">Bill</td>
              <td className="py-8 px-5 bg-gray-700 rounded-tr-md rounded-br-md">
                04/17/2024
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
