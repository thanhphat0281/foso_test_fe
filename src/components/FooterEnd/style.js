// style.js
import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 40px 0px;
//   background-color: #f9f9f9;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FooterColumn = styled.div`
    flex: 1;
//   min-width: 180px;

  &:last-child {
    max-width: 280px;
  }
`;

export const FooterList = styled.ul`
  margin-top: 8px;
  list-style: none;
  padding: 0;
  color: #4b5563;
`;

export const FooterItem = styled.li`
  margin-bottom: 6px;

  a {
    color: #4b5563;
    text-decoration: none;

    &:hover {
      color: #1d4ed8;
    }
  }
`;

export const FooterImage = styled.img`
  margin-top: 8px;
  width: 96px;
`;

export const AppImage = styled.img`
  width: 128px;
  margin-top: 8px;
`;

export const FooterColumnLarge = styled.div`
  flex: 2;
  min-width: 280px;
`;

export const FooterContainer = styled.div`
  color: #1c252e;
`;

export const CompanyName = styled.p`
  font-weight: 600;
`;

export const InfoText = styled.p`
  color: #4b5563; 
  font-size: 12px;
  margin-top: ${(props) => (props.mt ? props.mt : "0")};
`;

export const Title = styled.p`
  font-weight: 600;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #4b5563; 
`;

export const ListItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #1f2937; 
    }
  }
`;