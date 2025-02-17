import { ReactNode } from "react";
interface MainContent{
    children:ReactNode
}
export default function MainContent({children}:MainContent){

    return(
        <main className="px-8 w-full mt-16 flex flex-col items-center gap-5">
            {children}
        </main>
    )
}