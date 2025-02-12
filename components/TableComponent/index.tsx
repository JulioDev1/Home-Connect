import Image from "next/image";
import Delete from "../../public/Trash.png";
import Edit from "../../public/PencilSimple.png";
import { Table } from "@/Interface/Table";

interface ArrayTable {
  data:Table[];
}
export default function TableComponent(prop:ArrayTable){

    return(
      <table className="min-w-full bg-white rounded-t-xl  shadow-md">
        <thead>
          <tr className="bg-white  text-gray-500  text-sm font-medium leading-normal">
            <th className="h-10 px-6 text-left">Nome & Id</th>
            <th className="h-10 px-6 text-left">Cpf</th>
            <th className="h-10 px-6 text-left">Phone Number</th>
            <th className="h-10 px-6 text-left">Email</th>
            <th className="h-10 px-6 text-left">Location</th>


            <th className="h-10 px-6 text-center"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {
            prop.data.map((t, index)=>(
              <tr
                className="border-b border-gray-200 bg-gray-100 hover:bg-gray-100"
                key={index}
              >
                <td className="h-10 px-6 text-left">{t.name}</td>
                <td className="h-10 px-6 text-left">{t.cpf}</td>
                <td className="h-10 px-6 text-left">{t.number}</td>
                <td className="h-10 px-6 text-left">{t.email}</td>
                <td className="h-10 px-6 text-left">{t.location}</td>
                <td className="h-10 px-6 text-center">
                  <button className="bg-none">
                    <Image
                      src={Edit}
                      alt="delete"
                    />
                  </button>
                  <button className="bg-none">
                    <Image
                      src={Delete}
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            ))
          }        
        </tbody>
      </table>
  
  );
};

