'use client';

import {
  PayPalButtons,
  PayPalScriptProvider
} from '@paypal/react-paypal-js';
import { useState } from 'react';

type PayPalSubscribeButtonProps = {
  clientId?: string;
  planId?: string;
  planName: string;
};

export function PayPalSubscribeButton({
  clientId,
  planId,
  planName
}: PayPalSubscribeButtonProps) {
  const [message, setMessage] = useState<string | null>(null);

  if (!clientId || !planId) {
    return (
      <p className="text-sm text-gray-500">
        Add the PayPal client ID and {planName.toUpperCase()} plan ID to your
        environment variables to enable checkout.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <PayPalScriptProvider
        options={{
          clientId,
          components: 'buttons',
          intent: 'subscription',
          vault: true,
          currency: 'USD'
        }}
      >
        <PayPalButtons
          style={{
            layout: 'vertical',
            shape: 'pill',
            label: 'subscribe'
          }}
          createSubscription={(_, actions) => {
            return actions.subscription.create({
              plan_id: planId
            });
          }}
          onApprove={async (data) => {
            const subscriptionId = data.subscriptionID ?? 'unknown';
            setMessage(
              `Subscription approved. PayPal reference: ${subscriptionId}`
            );
          }}
          onError={() => {
            setMessage(
              'PayPal could not start this subscription. Please verify your PayPal plan configuration.'
            );
          }}
        />
      </PayPalScriptProvider>
      {message ? <p className="text-sm text-gray-600">{message}</p> : null}
    </div>
  );
}
