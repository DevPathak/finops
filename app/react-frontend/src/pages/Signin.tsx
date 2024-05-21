import { Auth } from "../component/Auth"
import startup2 from "../image/startup2.png"

export const Signin = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="hidden lg:block col-span-2 bg-gray-600">
            <div className="relative inset-0 flex">
            {/* <img src="https://bpg-decimal.s3.ap-south-1.amazonaws.com/mySaarathi_images/Saarathi_FinOps_White.svg" /> */}
            </div>
        </div>
        <div className="col-span-3">
            <Auth />
        </div>
    </div>
}