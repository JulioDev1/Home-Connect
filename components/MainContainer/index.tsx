import { ReactNode } from "react";

interface MainContainerProps{
    children:ReactNode
}
export default function MainContainer({children}:MainContainerProps){
    return (
        <div className="flex h-full">
            {children}
        </div>
    )

}