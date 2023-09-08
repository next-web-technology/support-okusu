#!/bin/bash

ADMIN_SERVICE_NAME='reg-suit-admin'
LP_SERVICE_NAME='reg-suit'
SHARED_SERVICE_NAME='reg-suit-shared'
WEB_SERVICE_NAME='reg-suit-web'

SERVICE_ACCOUNT_NAME="${LP_SERVICE_NAME}"
KEY_FILE_NAME="${SERVICE_ACCOUNT_NAME}-service-account.json"
KEY_FILE_PATH="${PWD}/${KEY_FILE_NAME}"

PROJECT_ID='support-okusu-test'
STORAGE_CLASS='STANDARD'
REGION='ASIA-NORTHEAST1'

ADMIN_BUCKET_NAME="gs://${ADMIN_SERVICE_NAME}-${PROJECT_ID}"
LP_BUCKET_NAME="gs://${LP_SERVICE_NAME}-${PROJECT_ID}"
SHARED_BUCKET_NAME="gs://${SHARED_SERVICE_NAME}-${PROJECT_ID}"
WEB_SERVICE_NAME="gs://${WEB_SERVICE_NAME}-${PROJECT_ID}"

gcloud config set project ${PROJECT_ID}

gcloud iam service-accounts create ${SERVICE_ACCOUNT_NAME}
gcloud projects add-iam-policy-binding ${PROJECT_ID} --member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" --role=roles/owner
gcloud iam service-accounts keys create ${KEY_FILE_NAME} --iam-account="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
echo "export GOOGLE_APPLICATION_CREDENTIALS='$KEY_FILE_PATH'" >> ~/.bashrc

GOOGLE_APPLICATION_CREDENTIALS="${KEY_FILE_PATH}"

gcloud config set project ${PROJECT_ID}

gcloud storage buckets create ${ADMIN_BUCKET_NAME} --project="${PROJECT_ID}" --default-storage-class="${STORAGE_CLASS}" --location="${REGION}" --no-public-access-prevention --uniform-bucket-level-access
gcloud storage buckets add-iam-policy-binding ${ADMIN_BUCKET_NAME} --member=allUsers --role=roles/storage.objectViewer

gcloud storage buckets create ${LP_BUCKET_NAME} --project="${PROJECT_ID}" --default-storage-class="${STORAGE_CLASS}" --location="${REGION}" --no-public-access-prevention --uniform-bucket-level-access
gcloud storage buckets add-iam-policy-binding ${LP_BUCKET_NAME} --member=allUsers --role=roles/storage.objectViewer

gcloud storage buckets create ${SHARED_BUCKET_NAME} --project="${PROJECT_ID}" --default-storage-class="${STORAGE_CLASS}" --location="${REGION}" --no-public-access-prevention --uniform-bucket-level-access
gcloud storage buckets add-iam-policy-binding ${SHARED_BUCKET_NAME} --member=allUsers --role=roles/storage.objectViewer

gcloud storage buckets create ${WEB_BUCKET_NAME} --project="${PROJECT_ID}" --default-storage-class="${STORAGE_CLASS}" --location="${REGION}" --no-public-access-prevention --uniform-bucket-level-access
gcloud storage buckets add-iam-policy-binding ${WEB_BUCKET_NAME} --member=allUsers --role=roles/storage.objectViewer

exec -l $SHELL
