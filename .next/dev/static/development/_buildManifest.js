self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/sea-freight-:slug([a-z0-9-]+)",
        "destination": "/sea-freight/:slug"
      },
      {
        "source": "/air-freight-:slug([a-z0-9-]+)",
        "destination": "/air-freight/:slug"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()