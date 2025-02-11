import Image from "next/image";
import Delete from "../../public/Trash.png";
import Edit from "../../public/PencilSimple.png";

export default function TableComponent(){

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

            <tr
              className="border-b border-gray-200 bg-gray-100 hover:bg-gray-100"
            >
              <td className="  h-10 px-6 text-left">ficName</td>
              <td className="  h-10 px-6 text-left">Cpf</td>
              <td className="  h-10 px-6 text-left">ficPhone</td>
              <td className="  h-10 px-6 text-left">ficEmail</td>
              <td className="  h-10 px-6 text-left">Location</td>
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
        </tbody>
      </table>
  
  );
};

