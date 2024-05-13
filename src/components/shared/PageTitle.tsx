// react
import React, { PropsWithChildren } from 'react';
// third-party
import Head from 'next/head';

import awslogo from '../../../public/images/awsLogo.svg'
import AppImage from './AppImage';

interface Props extends PropsWithChildren<{}> {}

function PageTitle(props: Props) {
    const { children } = props;
    const title = children || '';


    return (
        <Head>
            <title>
                {/* {title}
                {title ? ' — ' : ''} */}

               AWS

            </title>
        </Head>
    );
}

export default PageTitle;
