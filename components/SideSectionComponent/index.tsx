import { Side } from "@/Interface/Side";

export default function SideSectionComponent(props:Side){

    return (
        <section className={
            props.toggle ? "w-full h-full z-10 bg-black bg-opacity-5 absolute flex justify-end" 
            : "hidden"
            
        }  >
            <div className="w-custom  bg-slate-100 gray- bg-opacity-100 transition-all duration-300 p-5 flex flex-col gap-7">

                {props.children}
            </div>
        </section>
    )
}