import styled from "styled-components";
import { Row } from "antd";

export const MessageListContainer = styled.div`
  font-family: "Roboto";
`;

export const MessageListHeading = styled.h3`
  color: ${props => props.theme.primaryTextColor};
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1;
  padding: 16px 18px 12px 18px;
`;
export const MessageRow = styled(Row)`
  padding: 0 8px;
`;
