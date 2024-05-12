
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { InputSigninObject } from "finops-common"
import { LabelledInput, PasswordInput } from "./component-sets/InputField"
import { Button } from "./Button"

export const Auth = () => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<InputSigninObject>({
        email: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user`, postInputs)
            const { jwt } = response.data
            localStorage.setItem("token", jwt)
            navigate("/blog")
        } catch(e){
            alert("Error while signing up")
            console.log(e)
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center text-left">
            <div>
                <div className="px-8">
                    <div className="text-3xl font-semibold">
                        Welcome back!
                    </div>
                    <div className="text-sm text-slate-400 font-semibold">
                        Start managing your finance faster and better
                    </div>
                </div>
                <div className="pt-12">
                    <LabelledInput placeholder="you@saarathi.ai" onchange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username: e.target.value
                        }))
                    }} />
                    <PasswordInput placeholder="At least 6 characters" onchange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }}/>
                    <Button label="Login" onclick={sendRequest}/>
                </div>
            </div>
        </div>
    </div>
}