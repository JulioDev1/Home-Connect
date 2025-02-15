import Button from "../Button";
import HeaderComponent from "../HeaderComponent";
import { ISideBarComponent } from "../interfaces/ISideBarComponent";
import users from "../../public/Users.png";
import hand from "../../public/Handshake.png"

export default function SideBar(props: ISideBarComponent) {

    return (
        <aside className="w-64 h-full bg-white">
            <HeaderComponent />
            <div className="px-3 mt-5">
                <Button
                    onClick={props.onClick}
                    color="bg-black text-white"
                    placeholder="Users"
                    imageUrl={users}
                />
                <Button
                    onClick={props.onClick}
                    color="bg-white text-black"
                    placeholder="client"
                    imageUrl={hand}
                />
            </div>
        </aside>
    )
}