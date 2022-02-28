/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { PureComponent } from 'react';

import CheckoutSteps from './CheckoutSteps.component';

/** @namespace Scandiw/Component/CheckoutSteps/Container */
export class CheckoutStepsContainer extends PureComponent {

    render() {
        return (
            <CheckoutSteps {...this.props}/>
        );
    }
}

export default CheckoutStepsContainer;
