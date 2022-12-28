import React, { ReactComponentElement, ReactElement } from "react";
type props = {
    items:Array<string>
}
export default function(props:props)
{
    let navItems:Array<ReactElement> = []
    props.items.forEach( (item,index) => {
        console.log(item)
        navItems.push(
            <li>
                <a href={"/" + item}>{item}</a>
            </li>
        )
    }
    )
    return (
        <header>
            <nav>
                <ul style={{display: "flex"}}>{navItems}</ul>
            </nav>
        </header>
    )

}