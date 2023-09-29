import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { ReactComponent as Delete } from "../assets/svg/delete.svg";
import { ReactComponent as Edit } from "../assets/svg/edit.svg";
import api from "../api";

const ChosenPassengers = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          "http://192.168.103.161:5000/api/chosen-passengers"
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <main className="flex flex-col items-center justify-center h-screen ">
      {data?.map((item) => {
        const { birth_date, first_name, id, id_number, last_name } = item;

        return (
          <Card className="flex justify-center" key={id}>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span>დაბ. თარიღი</span>
                {birth_date}
              </div>
              <div className="flex flex-col">
                <span>პირადი ნომერი</span>
                {id_number}
              </div>
              <div className="flex flex-col">
                <span>სახელი, გვარი</span>
                {`${first_name}, ${last_name}`}
              </div>
            </div>
            <div className="flex gap-5">
              <button className="flex items-center justify-center gap-2">
                <Edit />
                რედაქტირება
              </button>
              <button className="flex items-center justify-center gap-2">
                <Delete />
                წაშლა
              </button>
            </div>
          </Card>
        );
      })}
    </main>
  );
};
export default ChosenPassengers;
