import { useState } from "react";
import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";
import { UserInfo } from "./UserInfo";

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
  return (
    <UserInfo />   
  )
}

export default App;
