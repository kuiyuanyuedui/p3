import {useEffect, useState} from "react";
import {UserItem} from "../components/UserItem";
import axios from "axios";
import {baseurl} from "../config";

export function UsersPage(props) {

  function refresh() {
    axios.post(`${baseurl}/list_users`, {}).then(data => {
      setUserList(data.data);
    })
  }

  let [userList, setUserList] = useState([])

  useEffect(() => {
    refresh()
  }, [])


  return (
    <div>
      <h1>User list</h1>
      {userList.map((x,idx)=> <UserItem key={idx} user_item={x}></UserItem>)}
    </div>
  )
}
UsersPage.propTypes = {
};
