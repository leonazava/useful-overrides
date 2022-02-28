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

import './CheckoutSteps.style.scss';

/** @namespace Scandiw/Component/CheckoutSteps/Component */
export class CheckoutStepsComponent extends PureComponent {
    __construct(props) {
        super.__construct(props);
        this.state = { activeStepIndex: 0 };
        this.keys = Object.keys(this.props.stepMap);
        this.handleStepChange = this.handleStepChange.bind(this);
    }

    componentDidMount() {
        this.handleStepChange();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.activeStepIndex === this.state.activeStepIndex) return
        this.handleStepChange();
    }

    handleStepChange() {
        this.setState({ activeStepIndex: this.keys.indexOf(this.props.checkoutStep) });
    }

    isActive(i) {
        const { activeStepIndex } = this.state;
        if (i === activeStepIndex) {
            return 'active';
        }
        if (i < activeStepIndex) {
            return 'passed';
        }

        return '';
    }

    getStepTitle(i) {
        const str = this.props.stepMap[this.keys[i]].title;
        const sliced = str.substring(0, str.length - 5);
        const formatted = `${sliced.slice(0, 1)}${sliced.slice(1).toLowerCase()}`;
        return formatted;
    }

    render() {
        return (
            <div className="Checkout-Steps">
                { this.keys.map((el, i) => (
                    <div className={ `step ${this.isActive(i)}` } key={ el.title }>
                        <div className="step-filler" />
                        <div className="step-checkpoint">
                            <div className="step-index">
                                <h1>{ this.isActive(i) ? '✅' : i + 1 }</h1>
                            </div>
                                <h2>{ this.getStepTitle(i) }</h2>
                        </div>
                    </div>
                )) }
            </div>
        );
    }
}

export default CheckoutStepsComponent;
