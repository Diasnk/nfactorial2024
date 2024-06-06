import Link from "next/link";
import {data} from '@/app/data/data.js'
import Post from "@/components/post";

export default function BlogList(){
    
    return(
        <div className="w-full pl-2 pt-4 flex flex-col justify-center">
            {
                data.map((name, index) => (
                    <>
                        <div className="font-semibold text-xl space-y-2 p-2 w-1/4" key={index} >
                            Made by: {name.author} <br/>
                            Date: {name.date} <br/>
                            <Link href={"/blog/" + name.id}>
                                <button className="border-2 bg-slate-200 rounded-lg p-0.5">
                                    View
                                </button>
                            </Link>
                        </div>
                    </>
            ))}


        </div>
    )
}