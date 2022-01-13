import {useEffect} from "react";
import {axios} from "@/utils"

function Login() {
    useEffect(() => {
        async function Joke() {
            const res = await axios({
                url: "/joke"
            })
            console.log(res)
        }

        Joke()
    }, [])
    return (
        <div>login</div>
    )
}

export default Login