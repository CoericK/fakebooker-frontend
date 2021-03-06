import styled from "styled-components";
import { Button, Row } from "antd";

export const ProfileHeaderContainer = styled(Row)`
  margin-top: -60px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 1) 100%
    ),
    url(${props => props.img});
  background-size: cover;
  background-color: white;
  font-family: Roboto;
`;
export const ProfileBackgroundContainer = styled.div`
  max-width: 94rem;
  height: 35rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 6px 6px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  font-family: "Roboto";
  margin-bottom: -85px;
  box-shadow: ${props => props.theme.boxShadow};

  @media only screen and (max-width: 1000px) {
    max-width: 90%;
    max-height: 30rem;
  }

  @media only screen and (max-width: 700px) {
    max-width: 100%;
    max-height: 30rem;
    border-radius: 0;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -25px;
`;

export const UserAvatar = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const UserName = styled.h3`
  font-size: 26px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  color: ${props => props.theme.primaryTextColor};
`;

export const UserDescription = styled.h3`
  font-size: 1.6rem;
  color: #97999b;
  margin-top: 5px;
  margin-bottom: 0;
  position: relative;
`;

export const UserDescriptionEdit = styled.button`
  font-size: 1.6rem;
  color: ${props => props.theme.appTextColor};
  font-weight: bold;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  margin-top: 5px;
`;

export const UserActionsContainer = styled.div`
  display: flex;
  width: 866px;
  /* width: 100%; */
  border-top: 1px solid ${props => props.theme.lightBorder};
  margin: 0 auto;
  margin-top: 28px;
  @media only screen and (max-width: 991px) {
    justify-content: center;
    width: 100%;
  }
`;

export const UserActionsContainerLink = styled(Button)``;

export const TimelineContainerLink = styled.button`
  color: #97999b;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #e4e6eb;
  }
`;

export const AboutContainerLink = styled.button`
  color: #97999b;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: #e4e6eb;
  }
`;

export const FriendsContainerLink = styled.button`
  color: #97999b;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;

  /* &::after {
    margin-top: 10px;
    width: 75px;
    height: 2px;
    display: block;
    background: ${props => props.theme.appTextColor};
    content: "";
  } */

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &::after, &:focus {
    outline: none;
  }

  &:active {
    background-color: #e4e6eb;
  }
`;

export const PhotosContainerLink = styled.button`
  color: #97999b;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin: 6px 0;
  padding: 0 16px;
  height: 50px;

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: #e4e6eb;
  }
`;

export const ChangeAvatarContainer = styled(Button)`
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  padding: 0.5rem 0.8rem;
  height: 36px;
  top: 110px;
  right: 0;
  border: 0;
  cursor: pointer;
  transition: 0.1s;

  &&:focus {
    background-color: #f0f2f5;
  }
  &&:active {
    background-color: #e4e6eb;
    color: ${props => props.theme.primarytextcolor};
  }

  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primarytextcolor};
  }
`;

export const ChangePhotoContainer = styled(Button)`
  background-color: #f0f2f5;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 85%;
  border: 0;
  padding: 5px 8px;
  transition: 0.1s;

  &&:focus {
    background-color: #f0f2f5;
  }
  &&:active {
    background-color: #e4e6eb;
    color: ${props => props.theme.primarytextcolor};
  }

  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primarytextcolor};
  }
`;

export const ChangeBackgroundHeading = styled.h3`
  margin-left: 4px;
  margin-bottom: 0;
  font-size: 1.4rem;
`;

export const FriendActionContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
export const FriendBtn = styled(Button)`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${props => props.theme.primaryTextColor};
  font-size: 15px;
  background-color: #e4e6eb;
  transition: 0.1s;

  &&:focus,
  &&:active {
    background-color: #e4e6eb;
    border-color: #e4e6eb;
    color: ${props => props.theme.primaryTextColor};
  }
  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }
`;

export const FriendText = styled.h1`
  font-weight: 600;
  font-size: 15px;
  line-height: 1;
  margin-left: 4px;
`;

export const RespondBtn = styled(Button)`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #1876f2;
  font-size: 15px;
  background-color: #e7f3ff;
  transition: 0.1s;

  &&:focus,
  &&:active {
    color: #1876f2;
    background-color: #e7f3ff;
  }
  &&:hover {
    color: #1876f2;
    background-color: #e7f3ff;
  }
`;

export const RespondText = styled.h1`
  font-weight: 600;
  font-size: 15px;
  line-height: 1;
  margin-left: 4px;
  color: #1876f2;
`;

export const ActionsContainer = styled(Row)`
  display: flex;
  flex-direction: column;
`;

export const AcceptFriendBtn = styled(Button)`
  text-align: left;
  font-size: 15px;
  color: #050505;
  padding: 0 8px;
  transition: 0.1s;
  font-weight: 500;

  &:hover {
    background-color: #f2f2f2;
    color: #050505;
  }

  &::after,
  &:focus {
    outline: none;
    color: #050505;
  }

  &:active {
    background-color: #e4e6eb;
    color: #050505;
  }
`;

export const RejectFriendBtn = styled(Button)`
  text-align: left;
  color: #050505;
  padding: 0 8px;
  font-weight: 500;
  transition: 0.1s;

  &:hover {
    background-color: #f2f2f2;
    color: #050505;
  }

  &::after,
  &:focus {
    outline: none;
    color: #050505;
  }

  &:active {
    background-color: #e4e6eb;
    color: #050505;
  }
`;

export const MessageContainer = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;
export const MessageBtn = styled(Button)`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${props => props.theme.primaryTextColor};
  font-size: 15px;
  background-color: #e4e6eb;
  transition: 0.1s;

  &&:focus,
  &&:active {
    background-color: #e4e6eb;
    border-color: #e4e6eb;
    color: ${props => props.theme.primaryTextColor};
  }
  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }
`;
