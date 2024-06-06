import Link from "next/link";
import {data} from '@/app/data/data.js'
import Post from "@/components/post";

export default function Blog(){
    
    return(
        <div>
            {/* {
                data.map((name, index) => (
                    <>
                        <div key={index} >
                            {name.id}
                        </div>
                    </>
            ))} */}

            <Post/>

        </div>
    )
}