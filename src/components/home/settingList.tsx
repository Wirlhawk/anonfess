import React from 'react'
import SettingItem from "./settingItem";

export default function SettingList({
    settings,
    username
}: {
    settings: Record<string, boolean>;
    username : string
}) {
    return (
        <div className="space-y-4">
            <p className="text-muted-foreground font-bold">Setting Input</p>
            {Object.entries(settings).map(([key, value]) => (
                <SettingItem key={key} title={key} value={value} username={username} />
            ))}
        </div>
    );
}
