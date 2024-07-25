import { TableTop } from "./TableTop";
import {orderData} from './TableData'
export function Table(){
    return(
        <div>
            <TableTop/>
            <div className="relative overflow-x-auto">
                <table className="w-full text-gray-500 text-left rtl:text-right">
                    <thead className="uppercase text-lg">
                        <tr>
                            <th scope="col" className="font-medium px-6 py-3">Order Id</th>
                            <th scope="col" className="font-medium px-6 py-3">status</th>
                            <th scope="col" className="font-medium px-6 py-3">Transaction Id</th>
                            <th scope="col" className="font-medium px-6 py-3">Refund date</th>
                            <th scope="col" className="font-medium px-6 py-3">Order amount</th>
                        </tr>
                    </thead>
                    {orderData.map((order)=>{
                        return(
                            <tbody className="text-md">
                                <tr class="bg-white border-b">
                                    <th scope ="row" class="px-6 py-4 font-medium text-blue-700 whitespace-nowrap">#{order.id}</th>
                                    <td className="flex items-center gap-2 text-gray-600 px-6 py-3">
                                        {(order.status === "Successful") && <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>}
                                        {(order.status === "Processing") && <div className="h-2.5 w-2.5 rounded-full bg-gray-600"></div>}
                                        {(order.status === "Failed") && <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>}
                                        {order.status}
                                    </td>
                                    <td className="px-6 py-4 ">{order.transactionID}</td>
                                    <td className="px-6 py-4 ">{order.refundDate}</td>
                                    <td className="px-6 py-4 ">{order.amount}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}