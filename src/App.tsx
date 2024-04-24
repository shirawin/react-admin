// in src/App.tsx

import {  Admin,  Resource,  ListGuesser,  EditGuesser,  ShowGuesser,} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/users";
import {PostList} from "./components/posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import PersonIcon from '@mui/icons-material/Person';
// import PhoneIcon from "@mui/icons-material/Phone";
import { Dashboard } from "./components/dashboard";
import {authProvider} from "./components/authProvider";
import {lightTheme,darkTheme} from "./theme";
import {ReopsList} from "./components/repositories";
import {TeamsList} from "./components/teams";


export const App = () => (


  <Admin 
      authProvider={authProvider} 
      dataProvider={dataProvider} 
      dashboard={Dashboard}
      theme={lightTheme}
      darkTheme={darkTheme}
      >
      
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
            icon={PersonIcon}
        />
    <Resource
            name="teams"
            list={TeamsList}
            icon={UserIcon}
        />
    {/* <Resource 
            name="posts"
            list={PostList}
            icon={PostIcon}
        /> */}
    <Resource 
            name="repositories"
            list={ReopsList}
            icon={PostIcon}
        />

  </Admin>
);