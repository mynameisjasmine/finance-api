import React from "react";
import styled from "styled-components";

const DisplayStyle = styled.p `
 font-size: 1rem;
 font-weight: bold;
 margin: 4rem 0 0 4rem;
 width: 70%;
`

function Display(props) {
    return(
        <div className="display-crd">
            <DisplayStyle>{props.description}</DisplayStyle>

        </div>
    );
}

export default Display;