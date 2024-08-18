import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DreamRequestList } from "./dreamRequest/DreamRequestList";
import { DreamRequestCreate } from "./dreamRequest/DreamRequestCreate";
import { DreamRequestEdit } from "./dreamRequest/DreamRequestEdit";
import { DreamRequestShow } from "./dreamRequest/DreamRequestShow";
import { DreamInterpretationList } from "./dreamInterpretation/DreamInterpretationList";
import { DreamInterpretationCreate } from "./dreamInterpretation/DreamInterpretationCreate";
import { DreamInterpretationEdit } from "./dreamInterpretation/DreamInterpretationEdit";
import { DreamInterpretationShow } from "./dreamInterpretation/DreamInterpretationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DreamInterpretationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DreamRequest"
          list={DreamRequestList}
          edit={DreamRequestEdit}
          create={DreamRequestCreate}
          show={DreamRequestShow}
        />
        <Resource
          name="DreamInterpretation"
          list={DreamInterpretationList}
          edit={DreamInterpretationEdit}
          create={DreamInterpretationCreate}
          show={DreamInterpretationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
