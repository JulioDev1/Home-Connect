import { ReactNode } from "react";

interface PageSectionProps{
    children:ReactNode
}
export default function PageSection({children}:PageSectionProps){
    return (
        <div className="h-screen">
            {children}
        </div>
    )
}