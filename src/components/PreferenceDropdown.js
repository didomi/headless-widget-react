import {
  DidomiSelect,
  DidomiSelectOption,
  DidomiSelectOptions,
} from "@didomi/ui-atoms-react";
import { toast } from "react-toastify";
import { useMemo, useState, useRef, useEffect } from "react";

function PreferenceDropdown({ container, entities, purposeId, preferenceId }) {
  const preference = useMemo(() => {
    return entities.purposes
      .find((purpose) => purposeId === purpose.id)
      .preferences.find((preference) => preferenceId === preference.id);
  }, [entities, purposeId, preferenceId]);

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

  useEffect(() => {
    const setConsentsSuccessEvent = (event) => {
      toast.success("Consent has been saved successfully!", {
        toastId: "consents-success",
      });
    };
    // IMPORTANT: You can also listen to specific consents events (loading, success, error)
    document.addEventListener(
      "didomi:set-consents-success",
      setConsentsSuccessEvent
    );

    return () => {
      document.removeEventListener(
        "didomi:set-consents-success",
        setConsentsSuccessEvent
      );
    };
  });

  const sendPreferenceConsent = (event) => {
    setPreferenceValuesConsentsArray(event.detail);
    // IMPORTANT: Dispatch a 'didomi:set-consents' event with the list of values enabled as a string to save the consent
    const consentToPurpose = new CustomEvent("didomi:set-consents", {
      detail: {
        purposeId,
        preferenceId: preference.id,
        value: event.detail.join(","),
      },
      bubbles: true,
      composed: true,
    });
    preferenceRef?.current.dispatchEvent(consentToPurpose);
  };

  return (
    <div className="Preference" ref={preferenceRef}>
      <DidomiSelect
        placeholder="Select from the list of values"
        // IMPORTANT: Use 'container.getEntityContentById' to display your entities translated content if you cannot use our custom elements
        label={container.getEntityContentById({
          entityType: "preference",
          entityId: preference.id,
          entityProperty: "name",
          withComponentContent: true,
        })}
        value={preferenceValuesConsentsArray} // preferenceValuesConsentsArray
        onValueChange={sendPreferenceConsent}
        multi={true}
      >
        <DidomiSelectOptions>
          {preference?.values?.map((preferenceValue) => (
            <DidomiSelectOption
              key={preferenceValue.id}
              label={container.getEntityContentById({
                entityType: "preference-value",
                entityId: preferenceValue.id,
                entityProperty: "name",
                withComponentContent: true,
              })}
              value={preferenceValue.id}
            ></DidomiSelectOption>
          ))}
        </DidomiSelectOptions>
      </DidomiSelect>
    </div>
  );
}

export default PreferenceDropdown;
