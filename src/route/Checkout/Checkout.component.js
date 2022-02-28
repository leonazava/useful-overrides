import CheckoutSteps from 'Component/CheckoutSteps';
import ContentWrapper from 'Component/ContentWrapper';
import {
    Checkout as SourceChekout
} from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.override.style.scss';

/** @namespace Scandiw/Route/Checkout/Component */
export class CheckoutComponent extends SourceChekout {
    renderSteps() {
        const { checkoutStep } = this.props;
        return <CheckoutSteps stepMap={ this.stepMap } checkoutStep={ checkoutStep } />;
    }

    render() {
        return (
            <main block="Checkout">
            { this.renderSteps() }
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
            >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
