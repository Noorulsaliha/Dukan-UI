export function Transaction(){
    return(
        <div className="flex flex-col gap-3">
            <div>
                <p className="font-medium text-lg">Transactions | This month</p>
            </div>
            <div className="flex items-center gap-3 text-xs ml-3">
                <p className="bg-gray-300 text-gray-500 p-2 rounded-full">Payouts (22)</p>
                <p className="bg-blue-600 text-white p-2 rounded-full">Refunds (6)</p>
            </div>
        </div>
    )
}