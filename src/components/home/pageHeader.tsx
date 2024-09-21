import React from "react";
import { Settings } from "lucide-react";

export default function PageHeader({title} : {title : string}) {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <Settings />
        </div>
    );
}
