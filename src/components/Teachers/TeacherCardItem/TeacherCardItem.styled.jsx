import styled from '@emotion/styled';

export const Avatar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 3px solid var(--accent-background);
  border-radius: 100px;
  /* background-image: url(${({ avatar }) => avatar});
  background-repeat: no-repeat;
  background-size: 96px 96px;
  background-position: 50% 50%; */
`;

export const Photo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 96px;
  height: 96px;
  border-radius: 100px;
  background-image: url(${({ avatar }) => avatar});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const OnlineReport = styled.span`
  position: absolute;
display: block;
right: 10px;
top:8px;
 border-radius: 100px;
 border: 2px solid var(--primary-white);
width: 12px;
height: 12px; 
background-color: var(--onLine-button)

`