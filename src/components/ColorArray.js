import React from "react";


export default function ColorArray({textArray}) {
    let arrayColors = ["#E75A5A","#FF83EB", "#76E75A", "#5AE7CD", "#5A92E7", "#B927EC", "#FBBD1F", "#FB1F1F", "#04FF87"];
    return(
        <>
            {textArray.map((e,idx) => 
            <div key={idx} style={{color:arrayColors[(idx % arrayColors.length)], display:"flex",}}>
                {e}
                {idx !== textArray.length-1 && <div style={{color:"white"}} >,</div>}
            </div>)}
        </>
    )
}