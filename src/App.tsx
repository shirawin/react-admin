// in src/App.tsx

import {  Admin,  Resource,  ListGuesser,  EditGuesser,  ShowGuesser,} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/users";
import {PostList} from "./components/posts"
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./components/dashboard";
import {authProvider} from "./components/authProvider";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    {/* <Resource name="users" list={UserList} /> */}
    {/* <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" /> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={PostList} /> */}
    {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
    <Resource
            name="users"
            list={UserList}
            show={ShowGuesser}
            recordRepresentation="name"
            icon={UserIcon}
        />
    <Resource 
            name="posts"
            list={PostList}
            icon={PostIcon}
        />
   

  </Admin>
);