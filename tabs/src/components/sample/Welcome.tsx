import React from "react";
import { makeStyles, shorthands, tokens,Tab,TabList,SelectTabData,SelectTabEvent,TabValue,Image} from "@fluentui/react-components";
import "./Welcome.css";
import {EditCode, AddSSO, Deploy, Publish} from "./Topics";


const useStyles = makeStyles({
  menuBar: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("10px", "20px"),
    rowGap: "20px",
    left:"0",
    right:"0",
    marginBottom:'20px',
  },
  panel: {
    ...shorthands.padding(0, "10px"),
    "& th": {
      textAlign: "left",
      ...shorthands.padding(0, "10px", 0, 0),
    },
  },
  propsTable: {
    "& td:first-child": {
      fontWeight: tokens.fontWeightSemibold,
    },
    "& td": {
      ...shorthands.padding(0, "30px", 0, 0),
    },
  },
});

export function Welcome(props: { environment?: string }) {
  const { environment } = {
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const steps = ["EditCode", "AddSSO", "Deploy", "Publish"];
  const friendlyStepsName: { [key: string]: string } = {
    EditCode: "1. Build your app locally",
    AddSSO:   "2. Add Single sign on",
    Deploy:   "3. Provision and Deploy to the Cloud",
    Publish:  "4. Publish to Teams",
  };
  const [selectedValue, setSelectedValue] = React.useState<TabValue>("local");

  const items = steps.map((step) => {
    return {
      id: step,
      value:step,
      content: friendlyStepsName[step] || "",
    };
  });
  const c=useStyles();

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  return (
    <>
      <div className="welcome page">
        <div className="narrow page-padding">
          <Image src="hello.png" className="image" />
          <h1 className="center">Congratulations!</h1>
          <p className="center">Your app is running in your {friendlyEnvironmentName}</p>
        </div>
      </div>
      <div className={c.menuBar}>
        <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
          {items.map((item)=>(
            <Tab id={item.id} value={item.id}>
                {item.content}
            </Tab>
          ))}
        </ TabList>
      </div>
      <div className={c.panel}>
        {selectedValue==="EditCode" && <EditCode />}
        {selectedValue==="AddSSO" && <AddSSO />}
        {selectedValue==="Deploy" && <Deploy />}
        {selectedValue==="Publish" && <Publish />}
      </div>
    </>
  );
}
