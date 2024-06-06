import {data} from '@/app/data/data.js'
import Link from 'next/link'

export default function Blog({params}:any){
    return(
        <div className='w-full flex justify-center'>
            <div className='w-1/2 md:w-1/3 border-2 rounded-lg'>
                <h1 className='font-semibold text-md m-1'>
                    {data[params.post -1].title}
                </h1>
                <p className='pt-4 m-1'>
                    {data[params.post -1].description}
                </p>
                <h4 className='font-semibold m-1 '>
                    By: {data[params.post -1].author}
                </h4>
                <p className='text-sm m-1'>
                    {data[params.post -1].date}
                </p>
                <Link href="/blog">
                    <button className="border-2 m-1 bg-slate-200 rounded-lg p-0.5">
                        Return back
                    </button>
                </Link>
            </div>
        </div>
    )
}