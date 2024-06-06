# Rest API Template Repo

## Notes on Express.js Routing

GET /:id route: This route matches any URL with a single parameter (like /123 or /abc). It's like a wildcard for one piece of information in the URL.
GET /all route: This route only matches the exact URL /all.

Now, imagine you have these routes in your code:

assetRouter.get('/:id', getAssetController);
assetRouter.get('/all', getAllAssetsController);

When someone visits /all, Express tries to find a route that matches. But because it checks the /:id route first, it mistakenly thinks that /all is an ID and tries to use getAssetController. This causes confusion and leads to a server error.

To fix it, you need to put the /all route before the /:id route:

assetRouter.get('/all', getAllAssetsController);
assetRouter.get('/:id', getAssetController);

Now, when someone visits /all, Express matches it correctly to the /all route and everything works smoothly!
