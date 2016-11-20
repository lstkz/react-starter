## REF WEB

## Requirements
* node v6 (https://nodejs.org)

## Install dependencies
`npm i`

## Running

|`npm run <script>`|Description|
|------------------|-----------|
|`build`|Build the app|
|`start`|Serves the app in prod mode (use `build` first).|
|`dev`|Start app in the dev mode.|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
|`test`|Run unit tests and generate coverage (See `coverage/PhantomJS/index.html`).|
|`test:watch`|Run unit tests in dev mode (watch for changes)|

## Heroku Deployment
```bash
git init
heroku create
git add . 
git commit -m "init"
git push heroku master
heroku open
```

## CLI
`.gitlab-ci.yml` is added. See for more details [here](https://about.gitlab.com/gitlab-ci/).   
Gitlab will automatically run tests and lint on every commit. Click on `Pipelines` from menu to see all builds.  

There will be a status icon in project page:  
![Alt text](https://monosnap.com/file/ne3GSA25CuEuSw1VFiJD3u6Dp1iydM.png)
 
For heroku deployment, you must add 2 variables
- click repository settings (right top menu)
- select variables
- add `HEROKU_APP_NAME` and set value to your app name e.g. `ancient-badlands-95834`
- add `HEROKU_API_KEY` and set value to your API Key from [here](https://dashboard.heroku.com/account)  

Sample build details:

![Alt text](https://monosnap.com/file/XZx92wXY5rw703d0KUXXGNbz1usGog.png)  

Check [here](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/project_services/slack.md) for slack integrations.  