import {
  DidomiButton,
  DidomiCardContainer,
  DidomiHintbox,
  DidomiTextInput,
} from "@didomi/ui-atoms-react";
import { useEffect, useState } from "react";
import "./Login.css";

function Login({ container }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailIsSent, setEmailIsSent] = useState(false);

  useEffect(() => {
    const sendAuthenticationLoadingEvent = () => setLoading(true);
    const sendAuthenticationSuccessEvent = () => {
      setLoading(false);
      setEmailIsSent(true);
      setEmail("");
    };

    // IMPORTANT: You can also listen to specific auth events (loading, success, error)
    document.addEventListener(
      "didomi:send-authentication-loading",
      sendAuthenticationLoadingEvent
    );

    document.addEventListener(
      "didomi:send-authentication-success",
      sendAuthenticationSuccessEvent
    );

    return () => {
      document.removeEventListener(
        "didomi:send-authentication-loading",
        sendAuthenticationLoadingEvent
      );
      document.removeEventListener(
        "didomi:send-authentication-success",
        sendAuthenticationSuccessEvent
      );
    };
  });

  // IMPORTANT: Dispatch a 'didomi:send-authentication' custom event when the user logs in with the email address as value.
  const handleLogin = (event) => {
    const emailAuthentication = new CustomEvent("didomi:send-authentication", {
      detail: {
        value: email,
      },
      bubbles: true,
      composed: true,
    });
    event.target.dispatchEvent(emailAuthentication);
  };

  const handleChange = (event) => {
    setEmail(event.detail);
  };

  // IMPORTANT: Wrap your authentication form inside didomi-auth-headless (if using Didomi authentication process)
  return (
    <didomi-auth-headless container-id={container.id}>
      <div className="login-container">
        <DidomiCardContainer className="login-card-container">
          <DidomiTextInput
            value={email}
            label="Email"
            placeholder="Email"
            onValueChange={handleChange}
          ></DidomiTextInput>
          <DidomiButton onClick={handleLogin} disabled={loading}>
            Login
          </DidomiButton>
        </DidomiCardContainer>
        {emailIsSent && (
          <DidomiHintbox
            titleText="An email has been sent!"
            icon-name="success"
            variant="success"
          ></DidomiHintbox>
        )}
      </div>
    </didomi-auth-headless>
  );
}

export default Login;
