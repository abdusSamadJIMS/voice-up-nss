import React from 'react'
import Complaint from './Complaint'

const ComplaintList = () => {
    return (
        <div className='p-5 space-y-4'>
            {
                Array.from({ length: 9 }).map((_, i) => (
                    <Complaint key={i} />

                ))
            }
        </div>
    )
}

export default ComplaintList