import { useState } from "react";
import {useAuth} from "../context/AuthContext"

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLOginIn, setIsLoginIn] = useState(true)

    const { login, signup, currentUser } = useAuth()

    async function submitHandler() {
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
        if (isLOginIn) {
            try {
                await login(email, password)
            } catch (err) {
                setError('Incorrect email or password')
            }
            return
        }
        await signup(email, password)
    }

    return (
        <div className="flex-1 flex flex-col text-xs justify-center items-center gap-4 sm:gap-4">
            <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">{isLOginIn ? "Login" : "Register"}</h1>
            {error && <div className="w-full max-w-[40ch] border border-solid text-center border-rose-400 text-rose-400 py-2">{error}</div>}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email address" className="outline-none border-b-2 border-solid border-white focus:border-cyan-300 duration-300 text-slate-900 p-2 w-full max-w-[30ch]" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Email address" className="outline-none border-b-2 border-solid border-white focus:border-cyan-300 duration-300 text-slate-900 p-2 w-full max-w-[30ch]" />
            <button onClick={submitHandler} className="w-full max-w-[30ch] hover:text-slate-900 border border-white uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300">
                <h2 className="relative z-20">Submit</h2>
            </button>
            <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIsLoginIn(!isLOginIn)}>{!isLOginIn ? 'Login' : 'Register'}</h2>       
        </div>
    )
};

export default LoginPage;
