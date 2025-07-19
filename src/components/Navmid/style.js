import styled from "styled-components";

export const NavMidWrapper = styled.div`
  padding-left: 240px;
  padding-right: 240px;
  background-color: white;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  flex-shrink: 0;
  width: 250px;
  height: 111px;

  img {
    height: 100%;
    object-fit: contain;
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  margin: 0 1.5rem;
  padding: 8px 8px 8px 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #0d57c6;
  border-radius: 9999px;
  padding: 8px 16px;
  width: 100%;
  max-width: 700px;
`;

export const InputStyled = styled.input`
  flex: 1;
  outline: none;
  border: none;
  background: transparent;
  color: #374151;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const IconBtn = styled.button`
  margin: 0 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  &.search {
    background-color: #0d57c6;
    padding: 12px 24px;
    border-radius: 9999px;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0b469f;
    }
  }

  .icon {
    width: 28px;
    height: 28px;
  }
`;

export const IconImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 4px;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon {
    width: 28px;
    height: 28px;
  }

  .label {
    margin-left: 4px;
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: 55px;
  background-color: #ef4444;
  color: white;
  font-size: 12px;
  padding: 0px 6px;
  border-radius: 999px;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon {
    width: 28px;
    height: 28px;
  }

  .label {
    margin-left: 4px;
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;
