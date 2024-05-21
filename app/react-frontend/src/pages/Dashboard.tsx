import { BarGraph } from "../chartjs/Bar"
import { PieGraph } from "../chartjs/Pie"
import { Header } from "../component/Header"
import { SearchBar } from "../component/SearchBar"
import { Card } from "../component/component-sets/InputField"

export const Dashboard = () => {
    return <div>
        <div>
            <Header />
        </div>
        {/* <div>
            <Card />
        </div> */}
        <div className="flex flex-row mt-14 mx-10">
            <div className="basis-1/4 mr-6">
                <Card header="Channels" value="1,927" analatics="+1.49%" color="text-green-600" text="Since last month" arrow="&#8593;"/>
            </div>
            <div className="basis-1/4 mr-6">
                <Card header="Revenue" value="₹139K" analatics="-0.10%" color="text-red-600" text="Since last month" arrow="&#8595;"/>
            </div>
            <div className="basis-1/4 mr-6">
                <Card header="Profit" value="60%" analatics="-0.2%" color="text-red-600" text="Since last month" arrow="&#8595;"/>
            </div>
            <div className="basis-1/4">
                <Card header="Invoices" value="835" analatics="+12.5%" color="text-green-600" text="Since last month" arrow="&#8593;"/>
            </div>
        </div>
        <div className="flex justify-center mx-auto w-5/12 my-12">
            <SearchBar />
        </div>
        <div className="flex grid grid-cols-5 lg:grid-cols-12 mt-14 ml-10 divide-x-2">
        <div className="col-span-8 mx-16" style={ { width: '70%', height: '70%' } } >
        <div> 
            <BarGraph />
        </div>
        </div>
        <div className="col-span-4" style={ { width: '70%', height: '100%' } }>
            <PieGraph />
        </div>
        </div>
        </div>
}