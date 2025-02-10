## Deployment

 Deploying through SST in the Github Actions workflow requires the following prerequisites:
 - The Github OIDC provider is configured.
 - The AWS Account has an IAM role with the correct [policy and access](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services#adding-the-identity-provider-to-aws)
 
 The Github Actions workflow is configured to deploy the app to the stage specified in the `github.ref_name` variable. This means a new sst deployment will be created for each new Github branch (that is subbed to the workflow dispatch)



``` bash
pnpm sst deploy --stage ${{ github.ref_name }}
```

--- 

### Deployment / AWS Setup

> [!IMPORTANT]
> This section requires a local [AWS CLI setup](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and the neccesary permissions to create IAM roles and policies.

Set the following environment variables in a root `.github.env` file:

``` bash
ASSUME_ROLE_NAME=GithubDeploy
POLICY_NAME=GithubDeploy
GITHUB_SCOPE=owner/repo
# Or GITHUB_SCOPE=owner/repo:ref
# Or GITHUB_SCOPE=owner/*
AWS_ACCOUNT_ID=123456789012
```

Run the `setup.sh` script to create the role and attach the policy:

``` bash
./setup.sh
```
