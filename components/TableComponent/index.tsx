import Image from "next/image";
import Delete from "../../public/Trash.png";
import Edit from "../../public/PencilSimple.png";
import { Table } from "@/Interface/Table";
import { ChangeEvent, MouseEvent, useState } from "react";


interface ArrayTable {
  data: Table[];
  handleCheckBoxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectionChange?: (selectedId: string[]) => void;
  select: string[];
  dataNameUpdate: string;
  dataNameDelete: string;
  onOpenEditUnique: (event: MouseEvent<HTMLButtonElement>) => void;
  onOpenDeleteUnique: (event: MouseEvent<HTMLButtonElement>) => void;
  onDeleteUnique: (event: MouseEvent<HTMLButtonElement>) => void;
  onEditUnique: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default function TableComponent(prop: ArrayTable) {

  return (
    <table className="border-collapse w-full rounded-lg shadow-md">
      <thead>
        <tr className=" text-gray-500   bg-white text-sm font-medium leading-normal">
          <th className="h-7 text-center px-6 rounded-ss-lg">
            <input className="size-4 rounded-md focus:ring-black" type="checkbox" />
          </th>
          <th className="h-7 px-6 text-left">Nome & Id</th>
          <th className="h-7 px-6 text-left">Cpf</th>
          <th className="h-7 px-6 text-left">Phone Number</th>
          <th className="h-7 px-6 text-left">Email</th>
          <th className="h-7 px-6 text-left">Location</th>
          <th className="h-7 px-6 text-center rounded-e-lg"></th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {
          prop.data.map((t, index) => (
            <tr
              className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              key={t.id || index}
            >
              <td className="h-7 px-6 text-center">
                <input
                  className="size-4 accent-black"
                  type="checkbox"
                  key={index}
                  onChange={prop.handleCheckBoxChange}
                  checked={prop.select.includes(String(t.id))}
                  value={t.id}
                  id={t.id}
                />
              </td>
              <td className="h-10 px-6 font-semibold text-black text-left">{t.name}<div className="font-normal text-gray-700">{t.id}</div></td>
              <td className="h-10 px-6 font-semibold text-black text-left">{t.cpf}</td>
              <td className="h-10 px-6 font-semibold text-black text-left">{t.number}</td>
              <td className="h-10 px-6 font-semibold text-black text-left">{t.email}</td>
              <td className="h-10 px-6 font-semibold text-black text-left">{t.location}</td>
              <td className="h-10 px-6 font-semibold text-black text-center">
                <button
                  id={t.id}
                  onClick={(event)=>{prop.onOpenEditUnique(event); prop.onEditUnique(event)}}
                  className="bg-none"
                  data-name={prop.dataNameUpdate}
                >
                  <Image
                    src={Edit}
                    alt="delete"
                  />
                </button>
                <button
                  id={t.id}
                  onClick={(event)=>{prop.onOpenDeleteUnique(event); prop.onDeleteUnique(event)}}
                  className="bg-none"
                  data-name={prop.dataNameDelete}
                >
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

