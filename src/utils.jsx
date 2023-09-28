import { ReactComponent as User } from "./assets/svg/user.svg";
import { ReactComponent as Ticket } from "./assets/svg/ticket.svg";
import { ReactComponent as Calendar } from "./assets/svg/calendar.svg";
import { ReactComponent as Instructions } from "./assets/svg/instructions.svg";

export const profileItems = [
  {
    id: 1,
    icon: <User />,
    text: "გიორგი მ.",
  },
  {
    id: 2,
    icon: <Ticket />,
    text: "ბილეთის შეძენა",
  },
  {
    id: 3,
    icon: <Calendar />,
    text: "განრიგი",
  },
  {
    id: 4,
    icon: <Instructions />,
    text: "ინსტრუქცია",
  },
];
