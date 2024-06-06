import Link from "next/link";


export default function Header(){
    return(
        <div className="border-b mb-2 flex w-full justify-between">
            <Link href="/">
                <img src='/logo.svg' alt="logo" className="md:w-14 w-28 ml-6 mt-2 mb-2"/>
            </Link>

            <div className="flex-col mr-4 mt-6 font-semibold text-sm md:space-x-6 md:space-y-0 space-y-4 flex md:flex-row">
                <Link href="/home">
                    <h2>
                        Home
                    </h2>
                </Link>
                <Link href='/about'>
                    <h2>
                        About
                    </h2>
                </Link>
                <Link href='/blog'>
                    <h2>
                        Blog
                    </h2>
                </Link>
            </div>
        </div>
    )
}