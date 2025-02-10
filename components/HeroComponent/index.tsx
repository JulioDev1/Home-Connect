import Image from "next/image";
import { IHeroComponents } from "../interfaces/IHeroComponents";

export default function  HeroComponent(props:IHeroComponents){

    return (
        <>
            <h1 className="font-bold text-white text-2xl">{props.title}</h1> 
            <span className="font-normal si text-white">{props.message}</span>
            <Image 
                src={props.image.src}
                alt={props.image.alt}
            />
        </>
    );
}