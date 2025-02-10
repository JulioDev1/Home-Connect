'use client'
import HeroComponent from "@/components/HeroComponent";
import LoginComponent from "@/components/LoginComponent";
import { login } from "@/Interface/login";
import { ChangeEvent, useState } from "react";
import heroImage from "../../public/Home.png"
import { useRouter } from "next/navigation";
import HeaderComponent from "@/components/HeaderComponent";

export default function Login(){
    const [value, setValue] = useState<login>({
        email: "",
        password: "",
    });

    const router = useRouter();
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
    
        setValue((prev) => {
          const data = { ...prev, [name]: value };
          return data;
        });
    }
    
    return (
        <section className="h-screen">
            <div className="flex h-full">
                <section className="w-1/2 flex flex-col items-center justify-center">
                    <HeaderComponent/>
                    <div className="h-full flex items-center p-4">
                        <LoginComponent 
                            handleClick={() => router.push('/task-list')} 
                            handleChange={handleChange} value={value}
                        />
                    </div>
                </section>
                <section className="w-1/2 flex flex-col items-center gap-4 bg-black justify-center p-5">
                    <HeroComponent 
                        image={{src:heroImage, alt:"a"}}
                        title="Welcome"
                        message="stay awere, stay ahead, stayc compliant"
                    />
                </section>
            </div>
        </section>
    )
}