import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import Container from "@material-ui/core/Container";
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const onSuccess = payment => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = err => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "USD"; // or you can set this value from your props or state
    let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox: "sb-fnhr31250685@personal.example.com",
      production: "YOUR-PRODUCTION-APP-ID"
    };

    return (
      <main>
        <Container maxWidth="sm">
          <PaypalExpressBtn
            env={env}
            client={client}
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
          />
        </Container>
      </main>
    );
  }
}

export default CheckOut;
