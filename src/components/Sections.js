import { DidomiButton } from "@didomi/ui-atoms-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Section from "./Section";
import "./Sections.css";

function Sections({ container, entities }) {
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);

  const savePendingConsents = () => {
    // IMPORTANT: Dispatch a 'didomi:save-pending-consents' custom event when the user wants to save its pending consents.
    const consentToPurpose = new CustomEvent("didomi:save-pending-consents", {
      detail: {},
      bubbles: true,
      composed: true,
    });
    buttonRef?.current.dispatchEvent(consentToPurpose);
  };

  useEffect(() => {
    // IMPORTANT: You can also listen to specific pending consents events (loading, success, error)
    const setConsentsLoadingEvent = document.addEventListener(
      "didomi:save-pending-consents-loading",
      () => {
        setLoading(true);
      }
    );
    const setConsentsFailureEvent = document.addEventListener(
      "didomi:save-pending-consents-error",
      (event) => {
        setLoading(false);
        toast.error("Sorry, an error occurred: consent has not been updated", {
          toastId: "pending-consents-error",
        });
      }
    );
    const setConsentsSuccessEvent = document.addEventListener(
      "didomi:save-pending-consents-success",
      (event) => {
        setLoading(false);
        toast.success("Consent has been saved successfully!", {
          toastId: "pending-consents-success",
        });
      }
    );

    return () => {
      document.removeEventListener(
        "didomi:save-pending-consents-loading",
        setConsentsLoadingEvent
      );
      document.removeEventListener(
        "didomi:save-pending-consents-error",
        setConsentsFailureEvent
      );
      document.removeEventListener(
        "didomi:save-pending-consents-success",
        setConsentsSuccessEvent
      );
    };
  });

  return (
    <div className="sections">
      {entities?.purposes?.map((purpose) => (
        <Section
          key={purpose.id}
          purpose={purpose}
          container={container}
        ></Section>
      ))}
      <DidomiButton
        className="save-consents-button"
        onClick={savePendingConsents}
        ref={buttonRef}
        disabled={loading}
      >
        {/* IMPORTANT: Use 'didomi-component-content' to display your components options translated content */}
        <didomi-component-content
          component-id="LthPh4a8"
          component-property="saveButton.text.content"
          container-id={container.id}
        ></didomi-component-content>
      </DidomiButton>
    </div>
  );
}

export default Sections;
