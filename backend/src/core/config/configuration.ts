/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

export const configuration = (): any => {
  return {
    ROLLBAR_ENV: process.env.ROLLBAR_ENV,
    ROLLBAR_SERVER_API_KEY: process.env.ROLLBAR_SERVER_API_KEY,
    ENVIRONMENT: process.env.NODE_ENV,
    API_URL_PREFIX: 'api/v1',
    OPENSEA_API_KEY: process.env.OPENSEA_API_KEY,
    HOSTNAME: process.env.ENV_HOSTNAME,
    SHOPPER_XP_APP_HOSTNAME: process.env.ENV_SHOPPER_XP_APP_HOSTNAME,
    AIRTABLE: {
      API_KEY: process.env.ENV_AIRTABLE_API_KEY,
      BRANDS_BASE_ID: process.env.ENV_AIRTABLE_BRANDS_BASE_ID,
      ORDERS_BASE_ID: process.env.ENV_AIRTABLE_ORDERS_BASE_ID,
      COLLECTIONS_BASE_ID: process.env.ENV_AIRTABLE_COLLECTIONS_BASE_ID,
      COLLECTIONS_TABLE_NAME: process.env.ENV_AIRTABLE_COLLECTIONS_TABLE_NAME,
    },
    PORT: process.env.PORT || 3000,
    RESET_PASSWORD_LINK: process.env.ENV_RESET_PASSWORD_LINK,
    WHITELISTED_ORIGINS: process.env.ENV_CORS_ORIGINS?.split(',') || [
      'http://localhost:3000',
      'http://localhost:3000',
    ],
    CLOUDINARY: {
      CLOUD_NAME: process.env.ENV_CLOUDINARY_CLOUD_NAME,
      API_KEY: process.env.ENV_CLOUDINARY_API_KEY,
      API_SECRET: process.env.ENV_CLOUDINARY_API_SECRET,
    },
    DATABASE: {
      USERNAME: process.env.ENV_DB_USERNAME,
      PASSWORD: process.env.ENV_DB_PASSWORD,
      HOST: process.env.ENV_DB_HOST,
      PORT: process.env.ENV_DB_PORT,
      DIALECT: process.env.ENV_DB_DIALECT,
      NAME: process.env.ENV_DB_NAME,
      MAX_POOL: process.env.ENV_DB_MAX_POOL || 20,
      MIN_POOL: process.env.ENV_DB_MIN_POOL || 3,
    },
    JWT: {
      SECRET: process.env.ENV_JWT_SECRET,
      ALGORITHM: process.env.ENV_JWT_ALGORITHM || 'HS256',
      REFRESH_SECRET: process.env.ENV_JWT_REFRESH_SECRET,
      ACCESS_TOKEN_EXPIRATION_TIME:
        (+process.env.ENV_JWT_EXPIRY_MINUTES || 10) * 60,
      REFRESH_TOKEN_EXPIRATION_TIME:
        (+process.env.ENV_JWT_REFRESH_EXPIRY_DAYS || 90) * 24 * 60 * 60,
    },
    TWILIO: {
      ACCOUNT_ID: process.env.ENV_TWILIO_ACCOUNT_ID,
      AUTH_TOKEN: process.env.ENV_TWILIO_AUTH_TOKEN,
      PHONE_NUMBER: process.env.ENV_TWILIO_PHONE_NUM,
    },
    KLAVIYO: {
      PUBLIC_KEY: process.env.ENV_KLAVIYO_PUBLIC_API_KEY,
      PRIVATE_KEY: process.env.ENV_KLAVIYO_PRIVATE_API_KEY,
      SMS_SIGN_UP_LIST_ID: process.env.ENV_KLAVIYO_SMS_SIGN_UP_LIST_ID,
    },
    SEGMENT: {
      WRITE_KEY: process.env.ENV_SEGMENT_WRITE_KEY,
    },
    STRIPE: {
      SECRET_KEY: process.env.ENV_STRIPE_SECRET_KEY,
      GET_SUCCESS_URL: ({ drop_id, event_id, collection_slug, reference }) =>
        process.env.ENV_SHOPPER_XP_STORE_HOSTNAME +
        `/order-confirmation?ref=${reference}${
          drop_id ? `&drop=${drop_id}` : ''
        }${event_id ? `&event=${event_id}` : ''}${
          collection_slug ? `&collection=${collection_slug}` : ''
        }`,
      GET_CANCEL_URL: ({
        brand_id,
        drop_id,
        event_id,
        collection_slug,
        product_id,
        reference,
        variant_id,
      }) =>
        process.env.ENV_SHOPPER_XP_STORE_HOSTNAME +
        `/products/${brand_id}/${product_id}?ref=${reference}&variant=${variant_id}${
          drop_id ? `&drop=${drop_id}` : ''
        }${event_id ? `&event=${event_id}` : ''}${
          collection_slug ? `&collection=${collection_slug}` : ''
        }`,
    },
    TYPE_FORM: {
      BASE_URL: process.env.ENV_TYPE_FORM_BASE_URL,
      SECRET: process.env.ENV_TYPE_FORM_SECRET,
    },
    TEMPLATE: {
      SEND_TYPE_FORM_INSTRUCTIONS:
        process.env.ENV_SEND_TYPE_FORM_INSTRUCTIONS ||
        'Welcome to dibz. Type form link #url',
    },
    SMTP: {
      HOST: process.env.ENV_SMTP_HOST,
      PORT: +process.env.ENV_SMTP_PORT || 587,
      IGNORE_TLS: process.env.ENV_SMTP_IGNORE_TLS == 'true',
      SECURE: process.env.ENV_SMTP_SECURE == 'true',
      USER: process.env.ENV_SMTP_USER,
      PASS: process.env.ENV_SMTP_PASS,
      DEFAULT_EMAIL: process.env.ENV_SMTP_SENDING_EMAIL,
    },
    PHONE: {
      IS_VALIDATION_ENABLED: process.env.IS_PHONE_VALIDATION_ENABLED != 'false',
      COUNTRY: process.env.PHONE_VALIDATION_COUNTRY || 'USA',
    },
    SWAGGER: {
      AUTH_USERNAME: process.env.ENV_SWAGGER_AUTH_USERNAME,
      AUTH_PASSWORD: process.env.ENV_SWAGGER_AUTH_PASSWORD,
    },
    REST_API_KEY: process.env.ENV_REST_API_KEY,
  };
};
