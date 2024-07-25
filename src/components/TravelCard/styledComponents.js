import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
  width: 40vw;
`

export const Image = styled.img`
  height: 300px;
  width: 100%;
  margin-bottom: 5px;
`

export const HeadingText = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  margin-bottom: 10px;
`

export const DescriptionText = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: normal;
  margin: 20px;
  margin-bottom: 10px;
`
