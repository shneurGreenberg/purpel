import User from "./components/user";
import "@shopify/polaris/build/esm/styles.css";
import { Page, Card } from "@shopify/polaris";
import { DropZoneFn } from "./components/DropZone";
import { TextFieldFn } from "./components/TextField";
import { TopBarExample } from "./components/TopBar";
// import { MainCrop } from "./components/crop/mainCrop";
import { PhoneFieldFn } from "./components/phone";
// import { prefixExample } from "./components/select";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { setUser } from "./features/user";

function App() {
  const user = useSelector((state) => state.user.value);
  const [postUser, setPostUser] = useState(user);

  const dispatch = useDispatch();

  const saveUser = () => {
    dispatch(
      setUser({
        name: "TextFieldFn.state.value",
        title: "uuu",
        description: 22,
        currentCompany: "fff",
        describYorself: "ddd",
        phoneNumber: "TextFieldFn.state.value",
        image: "ddd",
      })
    );
  }; 
 
  return (  
    <div className="App">
      {/* <MainPage /> */}
      <User />
      {/* <ChangeColor />  */}

      <Page>
        <TopBarExample />

        <Card sectioned title={"User profile"}>
          <Card
            sectioned
            subdued
            primaryFooterAction={{
              content: "Save",
              onAction: () => {
                saveUser();
              },
            }}
          >
          <input onChange={}></input>
            <Card sectioned title={"Profile picture"}>
              <DropZoneFn />
            </Card>
            <TextFieldFn title="Job title" value={user.title} />
            <TextFieldFn title="Current company" />
            <TextFieldFn title="describYorself" multiline={4} />
            <PhoneFieldFn title={"Phone number"} />
            {console.log(user)}
          </Card>
        </Card>
      </Page>
    </div>
  );
}

export default App;
