# Delivery app

On the main page, when loading, a request to the backend is made, and a list of
stores that are in the database is displayed. The list of products is empty.
When you click on the name of the store, there is a request for its products,
which are rendered in the list of products. Only products from one store can be
added to the cart. There is a button to reset the order basket. 

The order page
displays a map, a form for filling in customer data, a list of the order and the
total cost. The map is centered on the location of the selected store. The order
can be edited by removing the product or changing its quantity, which is
reflected in the total cost of the order and the price in the card of the
product itself, respectively. If the order list is empty the confirmation button
is disabled. When you fill in the "address" field in the form, an auto-fill list
will drop out, and when you select one of the options, the center of the map
will move to this place. You can also add an address by double-clicking on the
desired location on the map. When you refresh the page, the status of the cart
is saved, and when you send it, the data is cleared.

Order history page. Enter your email and phone number, and if you have made an order, a list of your orders will appear on the screen

Deployed to [github-pages](https://eugene-hlushak.github.io/test-delivery-app-frontend/)

To start the project, use the "yarn start" or "npm start" command
