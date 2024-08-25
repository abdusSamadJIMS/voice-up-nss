import React from 'react'

const Complaint = () => {
    return (
        <article className='p-5 rounded-md  bg-accent/60'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-start'>
                    <h2 className='font-bold '>Fake name</h2>
                    <p className='text-base-200'>Date when complaint</p>
                </div>
                <div>
                    <p className='text-lg text-error font-bold capitalize'>Type of Comp</p>
                    <p className=' capitalize border border-success-content bg-success text-secondary rounded-full text-sm'>Status</p>
                </div>
            </div>
            <div className="divider bg-white h-[1px]"></div>
            <div>
                <p className='text-black  text-pretty text-left'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quasi libero dolorum unde odit, dolorem quidem veritatis repudiandae esse ad amet aliquid perferendis enim error ab cum delectus eum saepe a ea architecto ratione minima est eos. Aperiam omnis sequi quae laborum quaerat. Explicabo fugit, aut id quae fuga facere nam numquam fugiat dolorum excepturi porro perspiciatis dolores esse. Voluptas ullam dignissimos harum sit vel, necessitatibus quidem magnam voluptates quae?
                </p>
            </div>
        </article>
    )
}

export default Complaint