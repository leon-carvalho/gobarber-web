import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 16px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
  max-width: 1120px;

  > img {
    display: none;

    @media (min-width: 678px) {
      height: 80px;
      display: block;
    }
  }

  button {
    border: 0;
    margin-left: auto;
    background: transparent;

    svg {
      width: 20px;
      height: 20px;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;

  @media (min-width: 678px) {
    margin-left: 80px;
  }

  img {
    width: 44px;
    height: 44px;
    font-size: 10px;
    border-radius: 50%;
    background-color: #999591;

    @media (min-width: 678px) {
      width: 56px;
      height: 56px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9900;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    color: #ff9900;
    margin-top: 8px;
    display: flex;
    font-weight: 500;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      margin: 0 8px;
      background: #ff9900;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;

    margin-top: 24px;
    padding: 16px 24px;
    background: #3e3b47;
    border-radius: 10px;
    position: relative;

    &::before {
      content: '';

      position: absolute;
      left: 0;
      top: 10%;

      width: 2px;
      height: 80%;
      opacity: 0.8;
      background: #ff9900;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #999591;
    }

    strong {
      color: #fff;
      margin-left: 24px;
    }

    span {
      display: flex;
      align-items: center;

      color: #999591;
      margin-left: auto;

      svg {
        color: #ff9900;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    display: block;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #3e3b47;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;

    color: #f4ede8;
    margin-left: auto;

    svg {
      color: #ff9900;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;

    margin-left: 24px;
    padding: 16px 24px;
    background: #3e3b47;
    border-radius: 10px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #999591;
    }

    strong {
      color: #fff;
      font-size: 20px;
      margin-left: 24px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
