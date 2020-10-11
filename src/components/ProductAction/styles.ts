import styled from "styled-components";
import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px;
`;

export const Condition = styled.div`
  margin-bottom: 16px;

  color: var(--color-gray);

  font-size: 14px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;

    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  margin-left: 16px;

  color: var(--color-blue);

  cursor: pointer;
`;

export const DispatchTag = styled.div`
  width: fit-content;

  margin-top: 12px;
  padding: 6px 10px;

  background: var(--color-blue);
  color: var(--color-white);

  font-size: 14px;
  font-weight: 600;

  border-radius: 4px;
`;

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 18px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    margin-left: 1px;
    padding-top: 3px;

    font-size: 20px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;

  font-size: 18px;
`;

export const MethodCard = styled.div`
  display: flex;

  margin-top: 18px;

  > div {
    display: flex;
    flex-direction: column;

    margin-left: 8px;

    .title {
      color: var(--color-green);

      font-size: 16px;
    }

    .details {
      margin-top: 5px;

      color: var(--color-gray);

      font-size: 14px;
    }

    .more {
      margin-top: 5px;

      color: var(--color-blue);

      font-size: 14px;
      font-weight: 600;

      text-decoration: none;
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: 24px;
  height: 24px;

  color: var(--color-green);
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  padding: 12px 10px;

  background-color: ${(props) =>
    props.solid ? "var(--color-blue)" : "transparent"};
  color: ${(props) =>
    props.solid ? "var(--color-white)" : "var(--color-blue)"};

  font-size: 15px;

  border: ${(props) => (props.solid ? "none" : "1px solid var(--color-blue)")};
  border-radius: 4px;

  cursor: pointer;
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  list-style: none;

  > li {
    display: flex;

    p {
      margin-left: 10px;

      color: var(--color-gray);

      font-size: 14px;
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  color: var(--color-gray);
`;
