import { DidomiCollapse, DidomiSwitch } from "@didomi/ui-atoms-react";

function PreferenceValue({
  container,
  preferenceValue,
  sendPreferenceConsent,
  value,
}) {
  return (
    <div>
      <DidomiSwitch
        value={value}
        valueSelected={true}
        valueNotSelected={false}
        onValueChange={(event) =>
          sendPreferenceConsent({
            value: event.detail,
            preferenceValueId: preferenceValue.id,
          })
        }
      >
        {/* IMPORTANT: Use 'didomi-entity-content' to display your entities translated content */}
        <didomi-entity-content
          entity-id={preferenceValue.id}
          entity-property="name"
          entity-type="preference-value"
          container-id={container.id}
          with-component-content={true}
        ></didomi-entity-content>
      </DidomiSwitch>
      <DidomiCollapse
        style={{
          "--collapse-duration": "500ms",
          "--collapse-easing": "ease-in",
        }}
        isExpanded={value}
      ></DidomiCollapse>
    </div>
  );
}

export default PreferenceValue;
