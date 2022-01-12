// import Login from "./components/login";
// import User from "./components/user";
// import ChangeColor from "./components/changeColor";
// import MainPage from "./components/mainPage";
import "@shopify/polaris/build/esm/styles.css";
import { Page, Card } from "@shopify/polaris";
import { DropZoneFn } from "./components/DropZone";
import { TextFieldFn } from "./components/TextField";
import { TopBarExample } from "./components/TopBar";
import { MainCrop } from "./components/crop/mainCrop";

function App() {
  return (
    <div className="App">
      {/* <MainPage />
      <User />
      <Login />
      <ChangeColor /> */}
      <MainCrop />

      <Page>
        <TopBarExample />

        <Card sectioned title={"User profile"}>
          <Card sectioned subdued primaryFooterAction={{ content: "Save" }}>
            <Card sectioned title={"Profile picture"}>
              <DropZoneFn />
            </Card>
            <TextFieldFn title={"Job title"} />
            <TextFieldFn title={"Current company"} />
            <TextFieldFn title={"About yourself"} multiline={4} />
            <TextFieldFn title={"Phone number"} />
          </Card>
        </Card>
      </Page>
    </div>
  );
}

export default App;
