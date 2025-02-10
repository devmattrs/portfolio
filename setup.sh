#!/bin/bash

# Enable the Github OIDC provider
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1

# Read environment variables
source .env

# Create the role with the trust policy thats in the file trust-policy.json

aws iam create-role --role-name $ASSUME_ROLE_NAME --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow", 
            "Principal": {
                "Federated": "arn:aws:iam::$AWS_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:$GITHUB_SCOPE"
                },
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}'

# Attach the policy to the role
aws iam attach-role-policy --role-name $ASSUME_ROLE_NAME --policy-arn arn:aws:iam::aws:policy/$POLICY_NAME
