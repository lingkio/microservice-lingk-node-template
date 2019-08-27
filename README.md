# microservice-lingk-node-template

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/lingkio/microservice-lingk-node-template)

# To configure the Recipe
1. (Optional) Update gitpod.yml with container initialization tasks and save to GH. Stop container, delete container and recreate instance.
2. (Required) Update serverless.yml with configuration for API deployment
4. (Optional) Update lingk.yml with configuration for environment variables (note this file is local and will not be checked in).

# To configure AWS
gitpod /workspace/microservice-lingk-recipes-sfmc $ aws configure


# To push to LingkCloud.com
gitpod /workspace/microservice-lingk-recipes-sfmc $ sls deploy -v