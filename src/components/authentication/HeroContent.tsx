'use client'
import { loginUser, registerUser } from '@/lib/actions'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const HeroContent = () => {
    const searchParams = useSearchParams()
    const [isFormLogin, setIsFormLogin] = useState(true)
    const { replace } = useRouter()

    useEffect(() => {
        const isLogin = searchParams.get("formType") === "login" ? true : false
        setIsFormLogin(isLogin)  // default to login if no formType provided in the query string

    }, [isFormLogin, searchParams])

    const handleGoToSignUp = () => {
        console.log("clicked");

        const params = new URLSearchParams(searchParams)

        if (isFormLogin) {
            params.set('formType', 'register')
        } else {
            params.set("formType", "login")
        }
        replace(`/authentication?${params.toString()}`)
    }


    const handleSignUp = async (formdata: FormData) => {
        const res = await registerUser(formdata)
        if (res.success) {
            const params = new URLSearchParams(searchParams)
            alert("Account has been registered\nPlease Login Now!")
            params.set("formType", "login")
            replace(`/authentication?${params.toString()}`)
        }

    }

    const handleSignIn = async (formdata: FormData) => {
        const res = await loginUser(formdata)
        if (res.success) {
            alert("Sign in Successful !")
            replace("/")
        }

    }

    return (
        <div className={`hero-content flex-col lg:flex-row-reverse
        transition-all
        `}
        >
            <div className={`text-center lg:text-left max-w-lg
            ${isFormLogin ? "sm:-translate-x-[110%]" : ""} transition-all


            `}>
                <h1 className="text-5xl font-bold text-white font-baloo">
                    {
                        isFormLogin ? "Welcome back!" : "Create an account"
                    }
                </h1>
                <p className="py-6 text-white font-semibold">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className={`card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl
            ${isFormLogin ? "sm:translate-x-[110%]" : ""} transition-all

            `}>
                <form className="card-body"
                    action={async (formdata) => {
                        try {
                            isFormLogin ? handleSignIn(formdata) : handleSignUp(formdata)

                        } catch (error) {
                            console.log("Something went wrong\n" + error);

                        }

                    }}
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name='email'
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                            name='password'
                            className="input input-bordered" required />
                        <label className="label">
                            {
                                isFormLogin &&
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            }

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type='submit'
                            className="btn btn-primary btn-outline">
                            {
                                isFormLogin ?
                                    "Login"
                                    : "Register"
                            }
                        </button>
                    </div>
                    <button type='button'
                        onClick={handleGoToSignUp}
                        className="label-text-alt link link-hover self-end w-fit">
                        {
                            isFormLogin ? "Create new account" : "Already have an account"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default HeroContent