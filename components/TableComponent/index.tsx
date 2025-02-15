import Image from "next/image";
import Delete from "../../public/Trash.png";
import Edit from "../../public/PencilSimple.png";
import { Table } from "@/Interface/Table";
import { ChangeEvent, useState } from "react";


interface ArrayTable {
  data:Table[];
  handleCheckBoxChange: (event :ChangeEvent<HTMLInputElement>)=> void;
  onSelectionChange?:(selectedId:string[]) => void;
  select:string[];
}
export default function TableComponent(prop:ArrayTable){
    
    return(
      <table className="w-11/12 bg-white rounded-t-xl  shadow-md">
        <thead>
          <tr className="bg-white  text-gray-500  text-sm font-medium leading-normal">
            <th className="h-10 px-6 text-left">
              <input className="size-4 border border-gray-500 rounded-2xl focus:ring-black" type="checkbox"/> 
            </th>
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
                key={t.id || index}
              >
                <td className="h-10 px-6">
                  <input 
                    className="size-4 rounded-md accent-black" 
                    type="checkbox" 
                    key={index}
                    onChange={prop.handleCheckBoxChange} 
                    checked ={prop.select.includes(String(t.id))}
                    value={t.id} 
                    id={t.id}
                  />
                </td>
                <td className="h-10 px-6 font-semibold text-black text-left">{t.name}<td className="font-normal text-gray-700">{t.id}</td></td>
                <td className="h-10 px-6 font-semibold text-black text-left">{t.cpf}</td>
                <td className="h-10 px-6 font-semibold text-black text-left">{t.number}</td>
                <td className="h-10 px-6 font-semibold text-black text-left">{t.email}</td>
                <td className="h-10 px-6 font-semibold text-black text-left">{t.location}</td>
                <td className="h-10 px-6 font-semibold text-black text-center">
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

