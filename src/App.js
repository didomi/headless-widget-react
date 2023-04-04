import { connect } from "@didomi/ui-foundation";
import {
  DidomiControlFlowHeader,
  setUpDidomiUIAtoms,
} from "@didomi/ui-atoms-react";
import Sections from "./components/Sections";
import "./App.css";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import PreferenceDropdown from "./components/PreferenceDropdown";

connect(".headless-root");
setUpDidomiUIAtoms("headless");

function App() {
  const [container, setContainer] = useState(null);
  const [entities, setEntities] = useState({
    purposes: [],
  });

  useEffect(() => {
    // IMPORTANT: Wait for the SDK to be ready before getting the container information
    window.didomiWidgetsOnReady = window.didomiWidgetsOnReady || [];
    window.didomiWidgetsOnReady.push(async (DidomiWidgets) => {
      const container = await DidomiWidgets.getContainerById("FQW79NG4");
      const entities = await container.getEntities();
      setContainer(container);
      setEntities(entities);
    });
  }, []);

  return (
    <div className="app">
      {/* IMPORTANT: Wrap all your widget related elements in didomi-container-headless */}
      <didomi-container-headless id="FQW79NG4">
        {container && (
          <>
            {/* IMPORTANT: Add didomi-consent-asked on your page if you want to send an analytics event when displaying your preference center */}
            <didomi-consent-asked
              container-id={container.id}
            ></didomi-consent-asked>
            <DidomiControlFlowHeader titleText="My Headless Widget Demo"></DidomiControlFlowHeader>

            <Login container={container}></Login>

            {/* IMPORTANT: Wrap the content you want to display only when the user is authenticated inside didomi-if-authenticated */}
            <didomi-if-authenticated container-id={container.id}>
              {/* IMPORTANT: Wrap your consent form inside didomi-consent-receiver (if using onclick consents) */}
              <didomi-consent-receiver container-id={container.id}>
                {entities && (
                  <PreferenceDropdown
                    container={container}
                    entities={entities}
                    purposeId={"marketing-9HmMn6Vt"}
                    preferenceId={"CFWKNVJV"}
                  ></PreferenceDropdown>
                )}
              </didomi-consent-receiver>

              {/* IMPORTANT: Wrap your consent form inside didomi-pending-consent-receiver (if using pending consents) */}
              <didomi-pending-consent-receiver container-id={container.id}>
                {entities && (
                  <Sections container={container} entities={entities} />
                )}
              </didomi-pending-consent-receiver>
            </didomi-if-authenticated>
          </>
        )}
      </didomi-container-headless>
    </div>
  );
}

export default App;
