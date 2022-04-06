interface State {
  order: Order;

  cancelOrder();
  verifyPayment();
  shipOrder();
}

class Order {
  public cancelledOrderState: State;
  public paymentPendingState: State;
  public orderShippedState: State;
  public orderBeingPreparedState: State;

  public currentState: State;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShippedState = new OrderShippedState(this);
    this.orderBeingPreparedState = new OrderBeingPreparedState(this);

    this.setState(this.paymentPendingState);
  }

  setState(state: State) {
    this.currentState = state;
  }

  getState() {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling unpaid order..");
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayment() {
    console.log("Payment verified");
    this.order.setState(this.order.orderBeingPreparedState);
  }
  shipOrder() {
    console.log("Cant ship the order until it's paid");
  }
}

class CancelledOrderState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Your order is already cancelled");
  }
  verifyPayment() {
    console.log("Order has been cancelled already.");
  }
  shipOrder() {
    console.log("Order has been cancelled");
  }
}

class OrderBeingPreparedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling order");
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayment() {
    console.log("Payment already verified.");
  }

  shipOrder() {
    console.log("Shipping your order now");
    this.order.setState(this.order.orderShippedState);
  }
}

class OrderShippedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Order is already shipped");
  }
  verifyPayment() {
    console.log("Order is already shipped");
  }
  shipOrder() {
    console.log("Order is already shipped");
  }
}

/// USAGE

const order = new Order();

console.log("Order state: " + order.getState());
