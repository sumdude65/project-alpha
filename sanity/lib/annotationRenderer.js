import React from "react";
import { UserIcon,ShareIcon } from "@sanity/icons";

export function InternalLinkRenderer(props) {
    return (
        <span>
            {props.renderDefault(props)}
            <a contentEditable={false} href={props.value.href}>
                <UserIcon />
            </a>
        </span>
    )
}

export function ShareRenderer(props){
    return (
        <span>
            {props.renderDefault(props)}
            <a contentEditable={false} href={props.value.href}>
                <ShareIcon />
            </a>
        </span>
    )
}
