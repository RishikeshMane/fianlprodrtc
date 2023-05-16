import React from "react";
// import { useNavigate } from "react-router-dom";
import {
  GooglePlayButton,
  AppStoreButton,
  ButtonsContainer,
} from "react-mobile-app-button";

const Contact = (props) => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.qriteeq.qriteeqapp&hl=en_IN&gl=US";
  const iOSUrl =
    "https://apps.apple.com/in/app/qriteeq-rate-review-humans/id1640951432";
  // const navigate = useNavigate();
  return (
    <>
      <div class="vertical-center">
      <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20vh",
            marginBottom: "-10vh",
            fontWeight:'bold'
          }}
        >
          Your Feedback has been Submited Successfully
        </h1>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20vh",
            marginBottom: "-30vh",
            fontSize:'30px'
          }}
        >
          You can Download App from PlayStore or AppStore !
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "85vh",
            
          }}
        >
          <ButtonsContainer>
            <GooglePlayButton
              url={APKUrl}
              theme={"light"}
              className={"custom-style"}
            />
            <AppStoreButton
              url={iOSUrl}
              theme={"light"}
              className={"custom-style"}
            />
          </ButtonsContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
