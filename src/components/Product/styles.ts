import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 16px 0;

  > a {
    padding: 2.5px 0;

    color: var(--color-blue);

    font-style: 14px;
    text-decoration: none;

    & + a {
      margin-left: 10px;
      padding-left: 10px;

      border-left: 1px solid var(--color-border);
    }
  }
`;

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 65fr 35fr;

  background: var(--color-white);

  box-shadow: var(--panel-shadow);
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 530px;

  > img {
    height: 73%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 32px;

  border-top: 1px solid var(--color-border);

  > h4 {
    margin-bottom: 40px;

    font-size: 18px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 16px;
    }

    .title {
      color: var(--color-black);

      font-size: 16px;
    }

    .description {
      margin-top: 5px;

      color: var(--color-gray);

      font-size: 14px;
      line-height: 19px;
    }
  }

  > a {
    margin-top: 20px;

    color: var(--color-blue);

    font-size: 14px;
    font-weight: 600;

    text-decoration: none;
  }
`;

export const Description = styled.div`
  padding: 44px 32px;

  border-top: 1px solid var(--color-border);

  > h2 {
    margin-bottom: 32px;

    font-size: 24px;
  }

  > p {
    color: var(--color-gray);

    font-size: 20px;
    line-height: 27px;
  }
`;
