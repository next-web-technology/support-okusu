#!/bin/bash

PROJECT_ID='support-okusu-test'
gcloud services enable iamcredentials.googleapis.com --project="${PROJECT_ID}"
gcloud iam service-accounts create github-actions --display-name "GitHub Actions" --project="${PROJECT_ID}"
gcloud projects add-iam-policy-binding "${PROJECT_ID}" --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" --role=roles/owner # Todo: narrow down the role
gcloud iam workload-identity-pools create "github-actions-pool" --location="global" --project="${PROJECT_ID}" --display-name="GitHub Actions Pool"
gcloud iam workload-identity-pools providers create-oidc "github-actions-provider" --location="global" --project="${PROJECT_ID}" --workload-identity-pool="github-actions-pool" --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.actor=assertion.actor" --issuer-uri="https://token.actions.githubusercontent.com"
gcloud iam workload-identity-pools describe "github-actions-pool" --project="${PROJECT_ID}" --location="global" --format="value(name)"
WORKLOAD_IDENTITY_POOL_ID=$(gcloud iam workload-identity-pools describe "github-actions-pool" --project="${PROJECT_ID}" --location="global" --format="value(name)")
IAM_PRINCIPAL="principalSet://iam.googleapis.com/${WORKLOAD_IDENTITY_POOL_ID}/*"
gcloud iam service-accounts add-iam-policy-binding "github-actions@${PROJECT_ID}.iam.gserviceaccount.com" --project="${PROJECT_ID}" --role="roles/iam.workloadIdentityUser" --member="${IAM_PRINCIPAL}"
gcloud iam workload-identity-pools providers describe "github-actions-provider" --project="${PROJECT_ID}" --location="global" --workload-identity-pool="github-actions-pool" --format="value(name)"
WORKLOAD_IDENTITY_POOL_PROVIDER_ID=$(gcloud iam workload-identity-pools providers describe "github-actions-provider" --project="${PROJECT_ID}" --location="global" --workload-identity-pool="github-actions-pool" --format="value(name)")
