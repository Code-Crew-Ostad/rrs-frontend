import React, { useEffect, useState } from 'react'
import { GetAllReservationsByUserMail } from '../../api/apiRequest';

const UserTable = () => {
  const[tableData, setTableData] = useState([]);
useEffect(()=>{
  LoadReservations();
},[])

const LoadReservations = async ()=>{
  let reservationInfo = await GetAllReservationsByUserMail(localStorage.getItem('email'));
  setTableData(reservationInfo);
}
  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Reservation ID</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Start</th>
            <th className="border px-4 py-2">End</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data)=>(
              <tr>
              <td className="border px-4 py-2">{data.reqs_id}</td>
              <td className="border px-4 py-2">{data.resv_date}</td>
              <td className="border px-4 py-2">{data.start_time}</td>
              <td className="border px-4 py-2">{data.end_time}</td>
              <td className="border px-4 py-2">{data.status}</td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  )
}

export default UserTable