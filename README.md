# Zinc CMS
 Built on Node, Running on Express and Angular 4. a Fully featured Content Managmnt system, for casual and enterprise use.
 
### On this page

1. [Features](#features)
1. [Installing](#installation)
1. [Known Issues](#errors)
1. [See also](#see-also)

## <a id="installation">Installing</a>

1. Clone from Github 
   * `git clone https://github.com/dbarroso1/Zinc.git && cd Zinc/`
2. Install Packages 
   * ` npm install `


## <a id="features">Features</a>
* Terminal Error Handling
* Live Request/Response Logging
* MongoDB / Mongoose API

### Directory Hierarchy 
Simple to Configure and Manage, with simplified directories for easy debugging
``` javascript
/root
  |-- /bin
  |    |-- /models
  |        |--- version.js 
  |    |-- zinc.config.js          // Application Configuration variables
  |    |-- zinc.logger.js          // Server Log Manager
  |    |-- zinc.server.js          // Zinc Server Engine
  |    |-- zinc.webapi.js          // Web API Manifest
  |-- /public
  |    |-- index.html              // Angular 4 Front End
  |- package.json
```
## <a id="errors">Errors</a>
**[FIXED - ISSUE 1]** Catch(...).then of undefned, check Mongoose version, Catch() and Then() 
  * Solution: 
    * Catch() and Then() are only available ~4.0.0+

**[FIXED - ISSUE 2]** DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead 
#### Solution:
  ``` javascript          
const server = express();
. . . 
. . . 
 mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true }) // <=== HERE
    .then(() => require('./db-init')(server))
    .catch(err => console.error(err));
```

### <a id="see-also">See also</a>

External resources

* [Authenticate a Node.js API with JSON Web Tokens &#8213; Scotch - scotch.io](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)
