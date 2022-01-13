import User from "./user";
import "@shopify/polaris/build/esm/styles.css";
import { Page, Card } from "@shopify/polaris";
import { DropZoneFn } from "./DropZone";
import { TextFieldFn } from "./TextField";
import { TopBarExample } from "./TopBar";
import { MainCrop } from "../components/crop/mainCrop";
import { PhoneFieldFn } from "./phone";
// import { prefixExample } from "./select";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { setUser } from "../features/user";

export function EditPage() {
  // const user = useSelector((state) => state.user.value);
  const [postUser, setPostUser] = useState({
    name: "",
    title: "",
    description: "",
    currentCompany: "",
    phoneNumber: "",
  });
  const [image, setImage] = useState("");


  const dispatch = useDispatch();

  const saveUser = () => {
    dispatch(
      setUser({
        name: postUser.name,
        title: postUser.title,
        description: postUser.description,
        currentCompany: postUser.currentCompany,
        describYorself: postUser.describYorself,
        phoneNumber: postUser.phoneNumber,
        image: "ddd",
      })
    );
  };
  const onDropImg = (value) => {
   alert(value);
   setImage(value);
  };

  const onChangeName = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      name: value,
    }));
  };
  const onChangeTitle = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      title: value,
    }));
  };
  const onChangeDescription = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      description: value,
    }));
  };
  const onChangeCurrentCompany = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      currentCompany: value,
    }));
  };
  const onChangePhoneNumber = (value) => {
    setPostUser((prevState, newState) => ({
      ...prevState,
      phoneNumber: value,
    }));
  };

  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <User /> */}
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
            <Card sectioned title={"Profile picture"}>
              <DropZoneFn onAction={onDropImg} />
            </Card>

            <MainCrop />

            <TextFieldFn
              value={postUser.name}
              onChangeValue={onChangeName}
              title="Job title"
            />
            <TextFieldFn
              value={postUser.currentCompany}
              onChangeValue={onChangeCurrentCompany}
              title="Current company"
            />
            <TextFieldFn
              value={postUser.description}
              onChangeValue={onChangeDescription}
              title="describYorself"
              multiline={4}
            />
            <PhoneFieldFn
              value={postUser.phoneNumber}
              onChangeValue={onChangePhoneNumber}
              title={"Phone number"}
            />
            {JSON.stringify(postUser)}
          </Card>
        </Card>
      </Page>
    </div>
  );
}