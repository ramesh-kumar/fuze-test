import React from 'react';
import { Intent, Spinner} from "@blueprintjs/core";

const mySpinner = <Spinner intent={Intent.DANGER} />;

const HomePage = () => (
    <>
        <h1>Welcome to my site!</h1>
        {mySpinner}
    </>
);

export default HomePage;