import UserForm from "@/components/UserForm/UserForm";
import { useState } from "react";

export default function Home() {
  const [users, setUsers]: any = useState([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
    </>
  );
}
