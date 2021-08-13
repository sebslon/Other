CartAPI - simple API not fully finished, possible to add users etc.

Api focused on dependency inversion and architectural design.
Open for code review and discussions :)

endpoints:
- GET api/carts - returns all carts
- GET api/carts/:id - returns cart
- PUT api/carts/:id/addProduct - adds new product to cart => payload { product: { name: string, price: number, quantity: number }}
- PUT api/carts/:id/changeQuantity - changes product quantity => payload { productId: string, quantity: number}
- DELETE api/carts/:id/deleteProduct - removes product from cart => payload { productId: string }
