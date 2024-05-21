
import { CalculationComponent } from "../component/Calculation"
// import { Drawer } from "../component/Drawer"
import { Header } from "../component/Header"

export const Calculation = () => {
    return <div>
        <Header />
        {/* <div className="">  */}
        {/* grid grid-cols-1 lg:grid-cols-7 */}
        {/* <div className="hidden lg:block col-span-2">
        <Drawer />
        </div> */}
        <div className="">
        <CalculationComponent />
        </div>
        {/* </div> */}
    </div>
}