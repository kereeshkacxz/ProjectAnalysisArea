import React from "react";


export default function ColorArray({textArray}) {
    let arrayColors = ['(255,209,220,1)', '(239,169,74,1)', '(127,181,181,1)', '(161,133,148,1)', '(119,221,119,1)', '(255,140,105,1)',
        '(255,155,170,1)', '(255,178,139,1)', '(175,218,252,1)', '(230,230,250,1)', '(228,113,122,1)', '(179,159,122,1)', '(230,214,144,1)',
        '(242,232,201,1)', '(62,180,137,1)', '(168,228,160,1)', '(204,204,255,1)', '(250,231,181,1)', '(255,219,139,1)', '(162,162,208,1)'];
    return(
        <>
            {textArray.map((e,idx) => 
            <div key={idx} style={{color: "rgba"+arrayColors[(idx % arrayColors.length)], display:"flex",}}>
                {e}
                {idx !== textArray.length-1 && <div style={{color:"white"}} >,</div>}
            </div>)}
        </>
    )
}