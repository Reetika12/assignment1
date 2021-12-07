import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "./Button";
import styled from "styled-components";
import TokenCard from "../../images/product/TokenCard.svg";
import { Link, navigate } from "gatsby";
import { getUserSessionDetails } from "../../services/userService";
import ReactTooltip from "react-tooltip";
import { OverlayTrigger, Tooltip, triggerHandler } from "react-bootstrap";
const ReferralTokenCard = (props) => {
  const { tokenId, userName, tokenPercentage, tokenType, tokenStatus } = props;
  const whatsappNudged = () => {
    window.open(
      `https://wa.me/send?text=Hello! There is a pending interest token sitting idle in your Wint Wealth account, avail now and start your diversification journey with higher returns at Wint! `
    );
  };
  const [loadingIsInvestor, setLoadingIsInvestor] = React.useState(false);
  const [isExistingInvestor, setIsExistingInvestor] = React.useState(false);

  const checkInvestorStatus = () => {
    setLoadingIsInvestor(true);
    getUserSessionDetails()
      .then((data) => {
        if (data && data.userInvestmentInfo) {
          const {
            isExistingInvestor,
            isKycCompliant,
            isEarlyAccessEligible,
            message,
          } = data.userInvestmentInfo;
          setIsExistingInvestor(isExistingInvestor);
          setLoadingIsInvestor(false);
        }
      })
      .catch((error) => {
        setLoadingIsInvestor(false);
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    checkInvestorStatus();
  }, []);

  return (
    <RewardCard>
      <img src={TokenCard} />
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip id="button-tooltip-2">
            {tokenStatus === "KYC_PENDING"
              ? `${userName} has not completed KYC. Using the button below, nudge the user through WhatsApp!`
              : tokenStatus === "PURCHASE_PENDING"
              ? `${userName} has not made a purchase. Using the button below, nudge the user through WhatsApp!`
              : tokenStatus === "AVAILABLE"
              ? `Thanks to ${userName}, your referral token is available! Click on the button below to avail now.`
              : tokenStatus === "PROCESSING"
              ? `Your referral token is processing, the reward will be credited within the next 7 days.`
              : `Congratulations! reward for this referral has been successfully credited to your account. Refer more to earn more!`}
          </Tooltip>
        }
      >
        {({ ref, ...triggerHandler }) => (
          <CardBody {...triggerHandler}>
            {tokenStatus === "KYC_PENDING" ? (
              <Status ref={ref} status={tokenStatus}>
                Kyc Pending
              </Status>
            ) : tokenStatus === "PURCHASE_PENDING" ? (
              <Status ref={ref} status={tokenStatus}>
                Purchase Pending
              </Status>
            ) : tokenStatus === "AVAILABLE" ? (
              <Status ref={ref} status={tokenStatus}>
                Available
              </Status>
            ) : tokenStatus === "PROCESSING" ? (
              <Status status="AVIALABLE" ref={ref}>
                Processing
              </Status>
            ) : tokenStatus === "AVAILED" ? (
              <Status ref={ref} status={tokenStatus}>
                Availed
              </Status>
            ) : null}

            <Value>
              {tokenPercentage}%
              <p
                style={{
                  fontSize: "1rem",
                  position: "relative",
                  bottom: "1rem",
                  color: "#53bb53",
                  visibility: "hidden",
                }}
              >
                p.a
              </p>
            </Value>
            <UserReferralInfo>
              <CardTitle>{userName}</CardTitle>
              {tokenType === "GOT_INTRODUCED" ? (
                <Card.Subtitle className="mb-2 text-muted">
                  Referred token
                </Card.Subtitle>
              ) : (
                <Card.Subtitle className="mb-2 text-muted">
                  Referral token
                </Card.Subtitle>
              )}
            </UserReferralInfo>

            {tokenStatus === "AVAILABLE" ? (
              <StyledAvailableButton
                children={"Avail now!"}
                event={"AVAILABLE_TOKEN_TRY"}
                onClick={() => {
                  console.log(isExistingInvestor);
                  isExistingInvestor
                    ? navigate("/app/dashboard/", { replace: true })
                    : navigate("/app/assets/", { replace: true });
                }}
              />
            ) : tokenStatus == "AVAILED" || tokenStatus == "PROCESSING" ? (
              <StyledAvailedButton disabled={true} children={"Availed"} />
            ) : (
              <StyledNudgeButton
                event={"NUDGED_FRIENDS"}
                children={"Nudge"}
                onClick={() => {
                  whatsappNudged();
                }}
              />
            )}
          </CardBody>
        )}
      </OverlayTrigger>
    </RewardCard>
  );
};

export default ReferralTokenCard;

const CardTitle = styled(Card.Title)`
  text-transform: capitalize;
`;
const Status = styled(Card.Subtitle)`
  position: relative;
  bottom: 5rem;
  background-color: ${(props) =>
    props.status == "AVAILABLE"
      ? "#def1e0"
      : props.status == "AVIALED"
      ? "#f2f2f2"
      : "#fcb795"};
  border-radius: 2rem;
  padding: 0 0 0 0.5rem;
  font-weight: bold;
  right: 2px;
  margin: auto;
`;
const RewardCard = styled.div`
  width: 15rem;
  font-size: larger;
`;
const Value = styled(Card.Text)`
  font-size: 5rem;
  text-align: center;
  color: #53bb53;
  background-color: #def1e0;
  border-radius: 1rem;
  position: relative;
  bottom: 4.5rem;
  right: 2px;
`;
const CardBody = styled(Card.Body)`
  position: relative;
  margin-top: -15.3rem;
`;
const UserReferralInfo = styled.div`
  position: relative;
  bottom: 4.5rem;
`;
const StyledAvailableButton = styled(Button)`
  position: relative;
  bottom: 4rem;
  right: 3px;
  border-radius: 0.5rem;
`;
const StyledAvailedButton = styled(StyledAvailableButton)`
  background-color: #f2f2f2;
  pointer-events: none;
`;
const StyledNudgeButton = styled(StyledAvailableButton)``;
