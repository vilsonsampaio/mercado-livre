import styled, { css } from "styled-components";
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineClock,
} from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 32px;

  border-top: 1px solid var(--color-border);
`;

export const Title = styled.div`
  margin-bottom: 20px;

  font-size: 18px;
  font-weight: 600;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;

  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }

    > strong {
      color: var(--color-gray);

      font-size: 14px;
      font-weight: normal;
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const ReputationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 33px;
`;

export const ReputationThermometer = styled.ol`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;

  width: 100%;

  padding: 0 4px;

  list-style: none;

  > li {
    width: 100%;
    height: 8px;

    &:nth-child(1) {
      background: var(--reputation-1);
    }

    &:nth-child(2) {
      background: var(--reputation-2);
    }

    &:nth-child(3) {
      background: var(--reputation-3);
    }

    &:nth-child(4) {
      background: var(--reputation-4);
    }

    &:nth-child(5) {
      background: var(--reputation-5);
    }

    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 10px;

  > div {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 33%;

    padding: 0 10px;

    text-align: center;

    > strong {
      height: 30px;

      font-size: 24px;
      font-weight: normal;
    }

    > span {
      font-size: 12px;
    }

    & + div {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateX(-50%);

        height: 36px;
        border-left: 1px solid var(--color-border);
      }
    }
  }
`;

export const SupportIcon = styled(HiOutlineChatAlt2)`
  ${iconCSS}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCSS}
`;

export const More = styled.a`
  margin-top: 24px;

  color: var(--color-blue);

  font-size: 14px;
  font-weight: 600;

  text-decoration: none;
`;
