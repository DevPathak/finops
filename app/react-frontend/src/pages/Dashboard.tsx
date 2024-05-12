// import { Card } from "../component/Card"
import { BarGraph } from "../chartjs/Bar"
import { PieGraph } from "../chartjs/Pie"
import { Header } from "../component/Header"
import { SearchBar } from "../component/SearchBar"

export const Dashboard = () => {
    return <div>
        <div>
        <Header />
        </div>
        {/* <div>
            <Card />
        </div> */}
        <div className="mt-16">
            <SearchBar />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="flex flex-col justify-center pl-20"> 
        {/* mt-40 size-64 flex flex-wrap justify-between p-3 */}
            <PieGraph />
        </div>
        <div className="flex flex-col justify-center">
            <BarGraph />
        </div>
        </div>
    </div>
}