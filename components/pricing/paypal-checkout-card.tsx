'use client';

import {
  PayPalButtons,
  PayPalScriptProvider
} from '@paypal/react-paypal-js';
import { useMemo, useState } from 'react';
import type { CheckoutPlan } from './checkout-plans';

export function PayPalCheckoutCard({
  clientId,
  plan
}: {
  clientId?: string;
  plan: CheckoutPlan;
}) {
  const [message, setMessage] = useState<string | null>(null);

  const sdkOptions = useMemo(
    () => ({
      clientId: clientId ?? '',
      components: 'buttons',
      intent: plan.checkoutType === 'subscription' ? 'subscription' : 'capture',
      vault: plan.checkoutType === 'subscription',
      currency: 'PHP'
    }),
    [clientId, plan.checkoutType]
  );

  if (!clientId) {
    return (
      <p className="text-sm text-slate-500">
        Add `NEXT_PUBLIC_PAYPAL_CLIENT_ID` to enable checkout on this page.
      </p>
    );
  }

  if (plan.checkoutType === 'subscription' && !plan.planId) {
    return (
      <p className="text-sm text-slate-500">
        Add the PayPal plan ID for {plan.name.toUpperCase()} to your
        environment variables to enable subscription checkout.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <PayPalScriptProvider options={sdkOptions}>
        <PayPalButtons
          style={{ layout: 'vertical', shape: 'pill' }}
          createSubscription={
            plan.checkoutType === 'subscription'
              ? (_, actions) =>
                  actions.subscription.create({
                    plan_id: plan.planId!
                  })
              : undefined
          }
          createOrder={
            plan.checkoutType === 'order'
              ? (_, actions) =>
                  actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                      {
                        amount: {
                          currency_code: 'PHP',
                          value: plan.amount ?? '99.00'
                        },
                        description: plan.name
                      }
                    ]
                  })
              : undefined
          }
          onApprove={async (data, actions) => {
            if (plan.checkoutType === 'order') {
              await actions.order?.capture();
              setMessage(
                `Payment approved. PayPal order reference: ${data.orderID ?? 'unknown'}`
              );
              return;
            }

            setMessage(
              `Subscription approved. PayPal reference: ${data.subscriptionID ?? 'unknown'}`
            );
          }}
          onError={() => {
            setMessage(
              'PayPal could not start this checkout. Please verify your PayPal configuration and try again.'
            );
          }}
        />
      </PayPalScriptProvider>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </div>
  );
}
