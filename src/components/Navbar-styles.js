import styled from "styled-components"

export const Head = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;

  @media screen and (max-width: 850px) {
    h1 {
      margin: 0;
    }
    nav ul li {
      padding: 0 5px !important;
      border-left: none !important;
      border-right: none !important;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  width: 80vw;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;

  ul {
    padding-left: 0;
    margin-bottom: 0;
    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;
      a {
        color: black;
        &:hover {
          color: #c14103;
        }
      }
    }
  }
`