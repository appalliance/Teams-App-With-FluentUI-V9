import React from "react";
import { Image } from "@fluentui/react-components";

const EditCode = React.memo(
  function EditCode(props) {
    return (
      <div>
      <h2>Change this code</h2>
      <p>
        The front end is a <code>create-react-app</code>. The entry point is{" "}
        <code>{"tabs/src/index.tsx"}</code>. Just save any file and this page will reload automatically.
      </p>
    </div>
    );
  }
);

const AddSSO = React.memo(
  function AddSSO(props) {
    const { ssoDocUrl, fluentDocUrl, readmeUrl } = {
      ssoDocUrl: "https://aka.ms/teamsfx-sso-doc",
      fluentDocUrl: "https://react.fluentui.dev/?path=/docs/concepts-introduction--page",
      readmeUrl: "https://aka.ms/teamsfx-add-sso", 
      ...props,
    }
    return (
      <>
          <div>
            <h2>Add Single Sign On feature to retrieve user profile</h2>
            <p>
              One of the advantages of building tab application in Teams is to leverage the user's identity 
              provided through Microsoft Teams (Known as {" "}
                <a href={ssoDocUrl} target="_blank" rel="noreferrer">
                  SSO support
                </a>
              ) and interact with Microsoft Graph for 
              building rich and seamless user experience. With Teams Toolkit, authentication is further 
              simplified by automatic AAD app registration and configuration.
            </p>
            <p>
              Starting with this simple static tab app, you can follow few steps to add SSO logics to authenticate 
              users, retrieve user's profile photo, and build UI layers with {" "}
                <a href={fluentDocUrl}  target="_blank" rel="noreferrer">
                  Fluent
                </a>
              .
            </p>
            <p>
              See instructions ({""}
                <a href={readmeUrl} target="_blank" rel="noreferrer">
                  here
                </a>
              ) to learn how to enable Authentication component with Teams Toolkit 
              and code snippets.
            </p>
          </div>
      </>
    );
  }
);

const Deploy = React.memo(
  function Deploy(props) {
    const { docsUrl } = {
      docsUrl: "https://aka.ms/teamsfx-docs",
      ...props,
    };
    return (
      <>
        <div className="deploy page">
        <h2>Deploy to the Cloud</h2>
        <p>
          Before publishing your app to Teams App Catalog, you may want to provision and deploy your
          app's resources to the cloud to make sure your app will be running smoothly!
        </p>
        <p>
          To provision your resources, you can either use our CLI command "teamsfx provision" or apply
          "Teams: Provision in the cloud" in Command palette.
        </p>
        <p>
          To deploy your app, you can either use our CLI command "teamsfx deploy" or apply "Teams:
          Deploy to the Cloud" in Command palette.
        </p>
        <Image src="deploy.png" />
        <p>
          For more information, see the{" "}
          <a href={docsUrl} target="_blank" rel="noreferrer">
            docs
          </a>
          .
        </p>
      </div>
      </>
    );
  }
);
const Publish = React.memo(
  function Publish(props) {
    const docsUrl="https://aka.ms/teamsfx-docs";
    return (
      <>
        <div className="publish page">
          <h2>Publish to Teams</h2>
          <p>
            Your app's resources and infrastructure are deployed and ready? Publish and register your
            app to Teams app catalog to share your app with others in your organization!
          </p>
          <Image src="publish.png" />
          <p>
            For more information, see the{" "}
            <a href={docsUrl} target="_blank" rel="noreferrer">
              docs
            </a>
            .
          </p>
        </div>
      </>
    );
  }
);
export {EditCode, AddSSO, Deploy, Publish}

