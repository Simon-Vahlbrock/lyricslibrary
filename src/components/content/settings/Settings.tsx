import React, {FC} from 'react';
import './settings.scss';
import Theme from "./theme/Theme";
import Account from "./account/Account";

const Settings: FC = () => (
    <div className="settings">
        <Account/>
        <Theme/>
    </div>
);

Settings.displayName = 'Settings';

export default Settings
