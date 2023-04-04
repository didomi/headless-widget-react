import { useState, useRef } from "react";
import {
  DidomiCardContainer,
  DidomiCollapse,
  DidomiSwitch,
} from "@didomi/ui-atoms-react";
import Preference from "./Preference";

function Section({ container, purpose }) {
  const [purposeEnabled, setPurposeEnabled] = useState(
    container.getPurposeEnabledById(purpose.id)
  );
  const sectionRef = useRef(null);

  const sendPurposeConsent = (event) => {
    setPurposeEnabled(event.detail);
    // IMPORTANT: Dispatch a 'didomi:set-pending-consents' event with the enabled value of the purpose to store the consent in a pending state
    const consentToPurpose = new CustomEvent("didomi:set-pending-consents", {
      detail: {
        purposeId: purpose.id,
        value: event.detail,
      },
      bubbles: true,
      composed: true,
    });
    sectionRef?.current.dispatchEvent(consentToPurpose);
  };

  return (
    <div className="Section" ref={sectionRef}>
      <DidomiCardContainer style={{ "--card-inner-padding": "18px" }}>
        {purpose.enabled && (
          <DidomiSwitch
            value={purposeEnabled}
            valueSelected={true}
            valueNotSelected={false}
            onValueChange={sendPurposeConsent}
          >
            <h3 className="h3">
              {/* IMPORTANT: Use 'didomi-entity-content' to display your entities translated content */}
              <didomi-entity-content
                entity-id={purpose.id}
                entity-property="name"
                entity-type="purpose"
                container-id={container.id}
                with-component-content={true}
              ></didomi-entity-content>
            </h3>
          </DidomiSwitch>
        )}
        <DidomiCollapse
          style={{
            "--collapse-duration": "500ms",
            "--collapse-easing": "ease-in",
          }}
          isExpanded={purposeEnabled}
        >
          {purpose?.preferences?.map((preference) => (
            <DidomiCardContainer
              key={preference.id}
              style={{ "--card-inner-padding": "12px" }}
            >
              <Preference
                preference={preference}
                container={container}
                purposeId={purpose.id}
              ></Preference>
            </DidomiCardContainer>
          ))}
        </DidomiCollapse>
      </DidomiCardContainer>
    </div>
  );
}

export default Section;
