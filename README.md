## Deployment

> [!NOTE]
> Deploying through SST in the Github Actions workflow requires the following prerequisites:
> - The Github OIDC provider is configured.
> - The AWS Account has an IAM role with the correct [policy and access](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services#adding-the-identity-provider-to-aws)
> 
> The Github Actions workflow is configured to deploy the app to the stage specified in the `github.ref_name` variable.



``` bash
pnpm sst deploy --stage ${{ github.ref_name }}
```

--- 

### Create AWS Resources


Configure the AWS CLI to run with the appropriate profile / account and then run the following command to create the OIDC provider.

````bash
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
````


Create a new role that is used for Github deployments in this account using 
something like the following example custom policy.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::${{ secrets.AWS_ACCOUNT_ID }}:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:${{ github.repository }}:*" # Replace with the scope you want to allow
                },
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}

```

