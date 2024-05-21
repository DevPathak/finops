
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { InputSigninObject } from "finops-common"
import { ButtonType, LabelledInput, PasswordInput } from "./component-sets/InputField"

export const Auth = () => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<InputSigninObject>({
        email: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/login`, postInputs)
            const { jwt } = await response.data
            localStorage.setItem("token", jwt)
            navigate("/dashboard")
        } catch(e){
            alert("Error while signing up")
            console.log(e)
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center">
            <div>
                <div className="pr-8">
                    <div className="text-3xl font-semibold">
                        Welcome back!
                    </div>
                    <div className="text-sm text-slate-400 font-semibold">
                        Start managing your finance faster and better
                    </div>
                </div>
                <div className="pt-12">
                    <div>
                    <LabelledInput placeholder="you@saarathi.ai" onchange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username: e.target.value
                        }))
                    }} />
                    </div>
                    <div className="my-6">
                    <PasswordInput placeholder="At least 6 characters" onchange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }}/>
                    </div>
                    <div className="">
                    <ButtonType header="Login" onClick={sendRequest}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}