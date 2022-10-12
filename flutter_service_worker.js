'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b7fa29d30d9c924a47ea3cb98ad244d7",
"assets/assets/1.jpg": "2655242658c230bfd378428eeb84ec70",
"assets/assets/194126430_1096909404165749_6010615304407967894_n%2520(1).jpg": "c7aa9761634abd99759eecd6d910d573",
"assets/assets/2%2520(2).jpg": "ea9f8095beba9be803e2a866678775d3",
"assets/assets/297401419_451756630157893_597946416466124442_n%2520(1).jpg": "dbb19016d87ae358308cc6b5d87f0cae",
"assets/assets/3.jpg": "8a69a61fa9ab49f5cc85f4d31716195e",
"assets/assets/about_us.png": "5cf002d8d299737d97954d09375443c2",
"assets/assets/absence.png": "9976245ebcd88e4c7401366185ce0616",
"assets/assets/ad3ya3.jpg": "69a84eda3a41992b0829e5913cbaebd0",
"assets/assets/ad3ya310788113_619250533017317_3698520744610469179_n.jpg": "284723200d185d36c48c8e4bc32e6bc6",
"assets/assets/ad3ya4.jpg": "b4e3b4129dace55aeb78272728b7cea4",
"assets/assets/ad3ya5.jpg": "b4e3b4129dace55aeb78272728b7cea4",
"assets/assets/ad3ya6.jpg": "9e24a3a849cbd73e0d08998260d3af10",
"assets/assets/ad3ya79459156500585_8117179937475894676_n.jpg": "ea9136050f4726af6493b34858403efa",
"assets/assets/Capture%2520d%25E2%2580%2599%25C3%25A9cran%25202020-10-20%2520224721.png": "3d1787f798d78587060907b9080798ca",
"assets/assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg": "f68bef15c8a81bd03f396badaa0806d7",
"assets/assets/eval_et.png": "b071f98f96c23277a5a56e154ce0d39d",
"assets/assets/fba154e52d255cbabe125dd7764c3fa7.jpg": "7c5466cfb2f16b3c876ee4fab8311819",
"assets/assets/index_prof.png": "2b5cb2a71d1971742621fae75e93a953",
"assets/assets/irvan-smith-5eBW5GomfhY-unsplash.jpg": "326863ce9dc2ef70347a10299ff0b95f",
"assets/assets/login.png": "4c16cf66d594876602c40b2c6bf12a94",
"assets/assets/notifyrisk1.jpg": "bf635db5893fab645c610c72085642a9",
"assets/assets/notifyrisk2.jpg": "f58f390e829e0ca6ddc0dadd6f58c949",
"assets/assets/notifyrisk3.jpg": "17e3566d6f8b1e9446cd26437918b7a0",
"assets/assets/notifyrisk4.jpg": "e6706b783764c8a3dde64e64be6ae040",
"assets/assets/pngtree-programming-and-coding-banner-working-image_1375029.jpg": "1dc00941710c203b85197a30ff21611b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8580f76fb697a0891f27e357d3a66191",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4f1afb76c886429c0a033435e0e64abf",
"/": "4f1afb76c886429c0a033435e0e64abf",
"main.dart.js": "4987c1551a2160887738ec9f41942d77",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
