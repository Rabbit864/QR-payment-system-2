<template>
  <google-pay-button
    environment="TEST"
    v-bind:button-type="buttonType"
    v-bind:button-color="buttonColor"
    v-bind:existing-payment-method-required="existingPaymentMethodRequired"
    v-bind:paymentRequest.prop="{
      apiVersion: paymentRequest.apiVersion,
      apiVersionMinor: paymentRequest.apiVersionMinor,
      allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
      merchantInfo: paymentRequest.merchantInfo,
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: cost,
        currencyCode: 'RUB',
        countryCode: 'RU',
      },
      callbackIntents: ['PAYMENT_AUTHORIZATION'],
    }"
    v-on:loadpaymentdata="onLoadPaymentData"
    v-on:error="onError"
    v-bind:onPaymentAuthorized.prop="onPaymentDataAuthorized"
  ></google-pay-button>
</template>

<script>
import "@google-pay/button-element";
import router from "../Router/index";
import store from "../Store/index";
export default {
  name: "GooglePay",
  props: {
    cost: String,
  },
  data() {
    return {
      existingPaymentMethodRequired: true,
      buttonColor: "default",
      buttonType: "buy",
      paymentRequest: {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "BCR2DN6TV6457CCR",
          merchantName: "ООО Рога и Копыта",
        },
      },
    };
  },
  methods: {
    onLoadPaymentData: (event) => {
      console.log("load payment data", event.detail);
      const cart = store.state.cart.cart;
      store.commit("clearCart");
      router.push({ name: "successPay", params: { cart } });
    },
    onError: (event) => {
      console.error("error", event.error);
    },
    onPaymentDataAuthorized: (paymentData) => {
      console.log("payment authorized", paymentData);
      return {
        transactionState: "SUCCESS",
      };
    },
  },
};
</script>
