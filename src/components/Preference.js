import { useRef, useState } from "react";
import PreferenceValue from "./PreferenceValue";
import "./Preference.css";

function Preference({ container, purposeId, preference }) {
  const [preferenceValuesConsentsArray, setPreferenceValuesConsentsArray] =
    useState(() => {
      const preferenceValuesConsents = container.getPreferenceValueById({
        purposeId,
        preferenceId: preference.id,
      });
      return preferenceValuesConsents
        ? preferenceValuesConsents.split(",")
        : [];
    });
  const preferenceRef = useRef(null);

  const sendPreferenceConsent = ({ value, preferenceValueId }) => {
    let consents = preferenceValuesConsentsArray;
    // IMPORTANT: You need to provide us the full list of values, and so, keep a "state"
    if (value) {
      if (!preferenceValuesConsentsArray.includes(preferenceValueId)) {
        consents = [...preferenceValuesConsentsArray, preferenceValueId];
      }
    } else {
      consents = preferenceValuesConsentsArray.filter(
        (item) => item !== preferenceValueId
      );
    }

    setPreferenceValuesConsentsArray(consents);
    // IMPORTANT: Dispatch a 'didomi:set-pending-consents' event with the list of values as a string to store the consent in a pending state
    const consentToPurpose = new CustomEvent("didomi:set-pending-consents", {
      detail: {
        purposeId,
        preferenceId: preference.id,
        value: consents.join(","),
      },
      bubbles: true,
      composed: true,
    });
    preferenceRef?.current.dispatchEvent(consentToPurpose);
  };

  return (
    <div className="Preference" ref={preferenceRef}>
      <h4 className="h4">
        {/* IMPORTANT: Use 'didomi-entity-content' to display your entities translated content */}
        <didomi-entity-content
          entity-id={preference.id}
          entity-property="name"
          entity-type="preference"
          container-id={container.id}
          with-component-content={true}
        ></didomi-entity-content>
      </h4>
      <div className="preference-value-container">
        {preference?.values?.map((preferenceValue) => (
          <PreferenceValue
            key={preferenceValue.id}
            container={container}
            purposeId={purposeId}
            preferenceId={preference.id}
            preferenceValue={preferenceValue}
            value={preferenceValuesConsentsArray.includes(preferenceValue.id)}
            sendPreferenceConsent={sendPreferenceConsent}
          ></PreferenceValue>
        ))}
      </div>
    </div>
  );
}

export default Preference;
