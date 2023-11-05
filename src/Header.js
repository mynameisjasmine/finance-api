import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1 `
color: #028482;
text-shadow: 2px 2px 4px #999999;
text-align: center;

`

function Header(props) {
    
    return(
        <div>
        <HeaderStyle>{props.title}</HeaderStyle>
        </div>
    )
}

export default Header;
