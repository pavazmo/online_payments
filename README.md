# online_payment

This is a code repository for a test online payments.

## Setup

* Install dependencies. Just run
<code>npm install</code>
from the root of the directory structure.
* Run the app
<code>node app</code>
* Run tests
<code>npm test</code>
* Check <a href='https://documenter.getpostman.com/view/2593620/SzYUaMGC?version=latest'>postman documentation</a>

## Flows

* Post new gateway with post route. 
* Do actions of payments depends on gateway using Factorys. Example: If stripe uses partialReimburse, it uses partialReimburse from Factory/stripe/partialReimburse, if paypal uses partialReimburse, it uses partialReimburse from Factory/paypal/partialReimburse.
