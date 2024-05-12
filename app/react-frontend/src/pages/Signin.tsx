import { Auth } from "../component/Auth"
import Barchart from "../component/Welcome"

export const Signin = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="hidden lg:block col-span-2">
            <Barchart />
        </div>
        <div className="col-span-3">
            <Auth />
        </div>
    </div>
}