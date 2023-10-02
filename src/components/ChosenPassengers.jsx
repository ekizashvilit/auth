import React, { useEffect, useState } from "react";
import { ReactComponent as Delete } from "../assets/svg/delete.svg";
import { ReactComponent as Edit } from "../assets/svg/edit.svg";
import api from "../api";
import Details from "./passengers/Details";
import PassengersBtn from "./passengers/PassengersBtn";

// Function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options).replace(/\//g, ".");
};

const ChosenPassengers = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          "http://192.168.103.164:5000/api/chosen-passengers"
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="bg-slate-200 h-screen w-screen flex flex-col gap-[20px] justify-center items-center">
      {data?.map((item) => {
        const { birth_date, first_name, id, id_number, last_name } = item;

        return (
          <div
            className="bg-white rounded-2xl px-[44px] py-[23px]  w-full max-w-[1532px] flex justify-between"
            key={id}
          >
            <div className="flex gap-[46px]">
              {/* Format the birth_date */}
              <Details title="დაბ. თარიღი" text={formatDate(birth_date)} />
              <Details title="პირადი ნომერი" text={id_number} />
              <div className="flex flex-col gap-[13px] text-xl custom-font">
                <span className="font-bold text-base">სახელი, გვარი</span>
                {`${first_name}, ${last_name}`}
              </div>
            </div>
            <div className="flex gap-[20px]">
              <PassengersBtn icon={<Edit />} text="რედაქტირება" />
              <PassengersBtn icon={<Delete />} text="წაშლა" />
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default ChosenPassengers;
