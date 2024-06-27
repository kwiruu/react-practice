import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
      <UserLoader userID="123">
        <UserInfo />
      </UserLoader>
  );
}

export default App;
