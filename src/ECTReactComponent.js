import React from "react";
import * as ECT from "@whoicd/icd11ect";
import "@whoicd/icd11ect/style.css";
import { Helmet } from 'react-helmet-async';

class ECTReactComponent extends React.Component {
  iNo = 1;

  constructor(props) {
    super(props);

    this.state = {
      selectedCode: "",
    };

    // configure the ECT
    const settings = {
      apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
      autoBind: false
    };
    const callbacks = {
      selectedEntityFunction: (selectedEntity) => {
        // Update the state with the selected code
        this.setState({ selectedCode: selectedEntity.code });

        // clear the search results
        ECT.Handler.clear(this.iNo);
      }
    };
    ECT.Handler.configure(settings, callbacks);
  }

  componentDidMount() {
    // manual binding only after the component has been mounted
    ECT.Handler.bind(this.iNo);
  }

  render() {
    return (
      <div>
        {/* Use Helmet to add the stylesheet link */}
        <Helmet>
          <link
            rel="stylesheet"
            href="https://icdcdn.who.int/embeddedct/icd11ect-1.6.1.css"
          />
        </Helmet>

        Type for starting search:
        {/* input element used for typing the search */}
        <input type="text" className="ctw-input" autoComplete="off" data-ctw-ino="1" />
        {/* div element used for showing the search results */}
        <div className="ctw-window" data-ctw-ino="1"></div>
        {/* Display the selected code */}
        The selected code: <input type="text" id="paste-selectedEntity" value={this.state.selectedCode} readOnly />
        {/* You may include the script here if necessary */}
      </div>
    );
  }
}

export default ECTReactComponent;
