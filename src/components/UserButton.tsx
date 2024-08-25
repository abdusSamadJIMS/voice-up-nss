'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

const UserButton = () => {
    const modalRef = useRef<HTMLDialogElement | null>(null)
    return (
        <>
            < FaRegUserCircle
                onClick={() => modalRef.current?.showModal()}
                className='sm:text-4xl text-2xl text-white rounded-full border border-orange-300
                cursor-pointer
                '
            />
            <dialog
                ref={modalRef}
                id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box backdrop-blur-sm bg-accent/30 text-accent-content">
                    <h3 className="font-bold text-lg mb-5 text-primary font-baloo text-right">Hello! Guest</h3>
                    <ul className='space-y-3 flex flex-col'>
                        <Link href={''} className='w-full bg-primary px-5 hover:bg-secondary py-2 rounded-md '>
                            <span className='w-full text-white font-bold'> Login</span>
                        </Link>
                        <Link href={''} className='w-full bg-primary px-5 hover:bg-secondary py-2 rounded-md '>
                            <span className='w-full text-white font-bold'>Register</span>
                        </Link>
                        <Link href={''} className='w-full bg-primary px-5 hover:bg-secondary py-2 rounded-md '>
                            <span className='w-full text-white font-bold'> Lodge a Complaint</span>
                        </Link>
                    </ul>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-outline btn-accent">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default UserButton

