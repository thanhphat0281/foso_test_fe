// NavEndStyle.js
import styled from "styled-components";
import { Typography } from "antd";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 240px;
  font-size: 14px;
  gap: 8px;
`;

export const BreadcrumbLink = styled.a`
  color: #9ca3af; /* text-gray-400 */
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #4b5563; /* text-gray-600 */
    text-decoration: underline;
  }

  &.active {
    color: #024897;
    font-weight: 600;
  }
`;

export const BreadcrumbText = styled.span`
  color: #9ca3af; /* text-gray-400 */
`;
