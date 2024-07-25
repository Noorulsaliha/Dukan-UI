import { BlueCard } from "./BlueCard";
import { Card } from "./Card";

export function Overview(){
    return(
            <div>
                <div className="flex items-center justify-between text-lg p-1 py-4">
                <p className="font-medium">Overview</p>
                <div>
                    <select className="border p-1 rounded-sm border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400">
                        <option value={"This month"}>This month</option>
                        <option value={"Past month"}>Past month</option>
                        <option value={"past ka month"}>past ka month</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                <BlueCard title={"Next payout"} amount={"2,312.23"} orderCount={23}/>
                <Card title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
                <Card title={"Amount Processed"} amount={"23,92,312.19"}/>
                
            </div>
            </div>
    )
}
