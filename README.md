# CipherGuard REST API
CipherGuard API securely stores and manages passwords, passports, and credit/debit card information.
# Table of Contents 📚
- [Description 📝](#Description-)
  - [Author](#Author)
- [Technologies Used 🔧](#Technologies-Used-)
- [Installation 📦](#Installation-)
- [API Reference 📑](#API-Reference)
  - [User Login](#User-Login)
  - [User Sign-Up](#User-Sign-Up)
  - [Get User Information](#Get-User-Information)
  - [Verify Token](#Verify-Token)
  - [Create Website Account](#Create-Website-Account)
  - [Get Website Account by Page ID](#Get-Website-Account-by-Page-ID)
  - [Update Website Account by Page ID](#Update-Website-Account-by-Page-ID)
  - [Delete Website Account by Page ID](#Delete-Website-Account-by-Page-ID)
  - [Get Total Number of Website Accounts](#Get-Total-Number-of-Website-Accounts)
  - [Retrieve Cards](#Retrieve-Cards)
  - [Create a New Card](#Create-a-New-Card)
  - [Retrieve Total Number of Cards](#Retrieve-Total-Number-of-Cards)
  - [Update, Retrieve, and Delete a Specific Card](#Update-Retrieve-and-Delete-a-Specific-Card)
  - [Retrieve All Passports and Create a New Passport](#Retrieve-All-Passports-and-Create-a-New-Passport) 
  - [Retrieve, Update, and Delete a Specific Passport](#Retrieve-Update-and-Delete-a-Specific-Passport)
  - [Retrieve Total Number of Passports](#Retrieve-Total-Number-of-Passports)


# Description 📝

The CipherGuard API offers a comprehensive and secure solution for managing sensitive information, including account passwords, passports, and credit/debit card details. 

## Author

- [@ismaelvr1999](https://www.github.com/ismaelvr1999)
# Technologies Used 🔧

This project utilizes the following technologies:

- **Node.js**: A powerful JavaScript runtime for building scalable network applications. 🌐
- **JavaScript**: The core language used for dynamic, client-side functionality. 📜
- **Express.js**: A flexible web application framework for Node.js, facilitating API creation. 🚀
- **Swagger**: For API documentation and interactive API exploration. 📖
- **MySQL2**: A robust relational database management system for storing data securely. 🗄️
- **Bcrypt**: A library for hashing passwords to enhance security. 🔒
- **CORS**: Middleware to handle Cross-Origin Resource Sharing, enabling secure resource sharing between different origins. 🌍
# Installation 📦

To get started with this API, follow these steps:

1. **Clone the repository.**
   ```bash
   git clone https://github.com/ismaelvr1999/CipherGuard_API.git

2. **Install dependencies.**
   ```bash
   cd  CipherGuard_API
   npm install

3. **Set up environment variables.**
Create a .env file in the root of the project and add the following variables:
   ```env
    DB_USER=your_database_user
    DB_HOST=your_database_host
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    DB_PORT=your_database_port

    PORT=your_application_port
    BASE_URL=/api/
    NODE_ENV=your_environment (e.g., development, production)
    SALT_ROUNDS=your_salt_rounds
    SECRET_KEY=your_secret_key
4. **Start the server.**
    ```bash
    npm run dev
   
# API Reference 📑
## User Login

### HTTP Request

**POST** `/login`

### Summary

Allows a user to log in using their email and password.

### Tags

- Login

### Request Body

| Field    | Type   | Description            | Example           |
|----------|--------|------------------------|-------------------|
| email    | string | Required. User email   | user@example.com  |
| password | string | Required. User password| your_password     |

### Responses

| Status Code | Description                                  | Schema                                      |
|-------------|----------------------------------------------|---------------------------------------------|
| 200         | Login successful.                          | [Login Successful Response Schema](#login-successful-response-schema) |
| 400         | Bad request.                                | [Error Response Schema](#error-response-schema) |
| 401         | Invalid credentials.                        | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                      | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Login Successful Response Schema

| Field      | Type   | Description                                | Example                       |
|------------|--------|--------------------------------------------|-------------------------------|
| status     | integer| HTTP status code                          | 200                           |
| message    | string | Response message                          | Standard response for successful HTTP requests. |
| data       | object | Contains login details                    |                               |
| └ token    | string | Authentication token                       | your_auth_token               |


## User Sign-Up

### HTTP Request

**POST** `/user/sign-up`

### Summary

Allows a user to create a new account using their first name, last name, email, and password.

### Tags

- User

### Request Body

| Field      | Type   | Description                  | Example            |
|------------|--------|------------------------------|--------------------|
| firstName  | string | Required. User's first name  | John               |
| lastName   | string | Required. User's last name   | Doe                |
| email      | string | Required. User's email       | user@example.com   |
| password   | string | Required. User's password    | your_password      |

### Responses

| Status Code | Description                                  | Schema                                      |
|-------------|----------------------------------------------|---------------------------------------------|
| 201         | User created successfully.                  | [User Created Response Schema](#user-created-response-schema) |
| 400         | Bad request.                                | [Error Response Schema](#error-response-schema) |
| 500         | Internal server error.                      | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas
### User Created Response Schema

| Field      | Type   | Description                                          | Example                     |
|------------|--------|------------------------------------------------------|-----------------------------|
| status     | integer| HTTP status code                                    | 201                         |
| message    | string | Response message                                    | The request has been fulfilled, resulting in the creation of a new resource. |
| data       | object | Contains user details                               |                             |
| └ firstName| string | User's first name                                   | First_name                        |
| └ lastName | string | User's last name                                    | last_name                      |
| └ email    | string | User's email address                                | new_user@gmail.com        |

## Get User Information

### HTTP Request

**GET** `/user`

### Summary

Retrieves the user's information using the provided authorization token.

### Tags

- User

### Parameters

| Name          | In     | Type   | Description                      | Example                 |
|---------------|--------|--------|----------------------------------|-------------------------|
| Authorization | header | string | Bearer token for authorization.  | Bearer your_token_here  |

### Responses

| Status Code | Description                                  | Schema                                      |
|-------------|----------------------------------------------|---------------------------------------------|
| 200         | User information retrieved successfully.    | [User Information Response Schema](#user-information-response-schema) |
| 401         | Invalid credentials.                        | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                      | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### User Information Response Schema

| Field      | Type   | Description                       | Example                  |
|------------|--------|-----------------------------------|--------------------------|
| status     | integer| HTTP status code                 | 200                      |
| message    | string | Response message                 | User found               |
| data       | object | Contains user details            |                          |
| └ user_id  | string | User's unique identifier         | user_123                 |
| └ first_name | string | User's first name               | first_name                     |
| └ last_name | string | User's last name                | last_name                      |
| └ email    | string | User's email address             | user@example.com     |

## Verify Token

### HTTP Request

**POST** `/verify-token`

### Summary

Verifies the provided authorization token.

### Tags

- Verify Token

### Parameters

| Name          | In     | Type   | Description                      | Example                 |
|---------------|--------|--------|----------------------------------|-------------------------|
| Authorization | header | string | Bearer token for verification.   | Bearer your_token_here  |

### Responses

| Status Code | Description                               | Schema                                          |
|-------------|-------------------------------------------|-------------------------------------------------|
| 200         | Token verified successfully.             | [Token Verified Response Schema](#token-verified-response-schema) |
| 401         | Unauthorized. Token has expired.         | [Token Expired Response Schema](#token-expired-response-schema) |
| 500         | Internal server error.                   | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Token Verified Response Schema

| Field      | Type   | Description                             | Example                 |
|------------|--------|-----------------------------------------|-------------------------|
| status     | integer| HTTP status code                       | 200                     |
| message    | string | Response message                       | valid token             |
| data       | object | Contains token validity information     |                         |
| └ validity | boolean| Whether the token is valid              | true     

## Create Website Account

### HTTP Request

**POST** `/websites-accounts`

### Summary

Creates a new website account with the provided details.

### Tags

- Websites-Accounts

### Parameters

| Name       | In    | Type   | Description                     | Example                 |
|------------|-------|--------|---------------------------------|-------------------------|
| Authorization | header | string | Bearer token for authorization. | Bearer your_token_here  |
| body       | body  | object | Account details for creation.   |                         |

### Request Body

| Field       | Type   | Description                      | Example          |
|-------------|--------|----------------------------------|------------------|
| page_name   | string | Name of the page or website      | MyPage           |
| email       | string | Email associated with the account | user@example.com|
| category    | string | Category of the website account  | Blog             |
| commentary  | string | Additional comments              | My first website |
| password    | string | Password for the account         | your_password    |
| user_name   | string | Username for the account         | user123          |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 201         | Website account created successfully.         | [Website Account Created Response Schema](#website-account-created-response-schema) |
| 400         | Bad request.                                  | [Error Response Schema](#error-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Website Account Created Response Schema

| Field       | Type   | Description                         | Example              |
|-------------|--------|-------------------------------------|----------------------|
| status      | integer| HTTP status code                   | 201                  |
| message     | string | Response message                   | The request has been fulfilled, resulting in the creation of a new resource. |
| data        | object | Contains account details            |                      |
| └ page_name | string | Name of the page or website         | MyPage               |
| └ email     | string | Email associated with the account   | user@example.com    |
| └ category  | string | Category of the website account     | Blog                 |
| └ commentary| string | Additional comments                 | My first website     |

## Get Website Account by Page ID

### HTTP Request

**GET** `/websites-accounts/{page_id}`

### Summary

Retrieves the website account associated with the provided page ID.

### Tags

- Websites-Accounts

### Parameters

| Name         | In    | Type   | Description                                | Example                 |
|--------------|-------|--------|--------------------------------------------|-------------------------|
| Authorization| header| string | Bearer token for authorization.            | Bearer your_token_here  |
| page_id      | path  | string | Unique identifier for the website account. | page_123               |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 200         | Website account retrieved successfully.        | [Website Account Retrieved Response Schema](#website-account-retrieved-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Website Account Retrieved Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Website account retrieved successfully. |
| data               | object | Contains details of the website account    |                        |
| └ page_id          | string | Unique identifier for the page/account      | page_123               |
| └ user_id          | string | Unique identifier for the user              | user_456               |
| └ page_name        | string | Name of the page or website                 | MyPage                 |
| └ email            | string | Email associated with the account           | user@example.com      |
| └ category         | string | Category of the website account             | Blog                   |
| └ commentary       | string | Additional comments                         | My first website       |
| └ creation_date    | string | Date and time when the account was created  | 2024-01-01T12:00:00Z |
| └ last_modification | string | Date and time when the account was last modified | 2024-01-10T12:00:00Z |
| └ password         | string | Password for the account                    | your_password          |
| └ user_name        | string | Username for the account                    | user123                |

## Update Website Account by Page ID

### HTTP Request

**PUT** `/websites-accounts/{page_id}`

### Summary

Updates the website account associated with the provided page ID.

### Tags

- Websites-Accounts

### Parameters

| Name         | In    | Type   | Description                                | Example                 |
|--------------|-------|--------|--------------------------------------------|-------------------------|
| Authorization| header| string | Bearer token for authorization.            | Bearer your_token_here  |
| page_id      | path  | string | Unique identifier for the website account. | page_123               |
| body         | body  | object | Details for updating the website account.  |                         |

### Request Body

| Field       | Type   | Description                      | Example          |
|-------------|--------|----------------------------------|------------------|
| page_name   | string | Name of the page or website      | UpdatedPage      |
| email       | string | Email associated with the account | updated@example.com|
| category    | string | Category of the website account  | UpdatedCategory  |
| commentary  | string | Additional comments              | Updated commentary|
| password    | string | Password for the account         | updated_password |
| user_name   | string | Username for the account         | updated_user123  |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 200         | Website account updated successfully.         | [Website Account Updated Response Schema](#website-account-updated-response-schema) |
| 400         | Bad request. No rows matched or changed.      | [Bad Request Response Schema](#bad-request-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Website Account Updated Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Website account updated successfully. |
| data               | object | Contains details about the update operation |                        |
| └ affectedRows     | integer| Number of affected rows                    | 1                      |

## Delete Website Account by Page ID

### HTTP Request

**DELETE** `/websites-accounts/{page_id}`

### Summary

Deletes the website account associated with the provided page ID.

### Tags

- Websites-Accounts

### Parameters

| Name         | In    | Type   | Description                                | Example                 |
|--------------|-------|--------|--------------------------------------------|-------------------------|
| Authorization| header| string | Bearer token for authorization.            | Bearer your_token_here  |
| page_id      | path  | string | Unique identifier for the website account. | page_123               |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 200         | Website account deleted successfully.         | [Website Account Deleted Response Schema](#website-account-deleted-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Website Account Deleted Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Website account deleted successfully. |
| data               | object | Contains details about the delete operation |                        |
| └ affectedRows     | integer| Number of affected rows                    | 1                      |

## Get Total Number of Website Accounts

### HTTP Request

**GET** `/websites-accounts/total`

### Summary

Retrieves the total number of website accounts associated with the authenticated user.

### Tags

- Websites-Accounts

### Parameters

| Name         | In    | Type   | Description                                | Example                 |
|--------------|-------|--------|--------------------------------------------|-------------------------|
| Authorization| header| string | Bearer token for authorization.            | Bearer your_token_here  |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 200         | Total number of website accounts retrieved successfully. | [Total Number Retrieved Response Schema](#total-number-retrieved-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Total Number Retrieved Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Total number of website accounts retrieved successfully. |
| data               | object | Contains the total number of website accounts |                        |
| └ total            | integer| Total number of website accounts           | 42                     |

## Retrieve Cards

### HTTP Request

**GET** `/cards`

### Summary

Retrieves a list of cards associated with the authenticated user.

### Tags

- Cards

### Parameters

| Name         | In    | Type   | Description                                | Example                 |
|--------------|-------|--------|--------------------------------------------|-------------------------|
| Authorization| header| string | Bearer token for authorization.            | Bearer your_token_here  |
| search        | query | string | Search term to filter cards.               | Visa                    |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 200         | Cards retrieved successfully.                  | [Cards Retrieved Response Schema](#cards-retrieved-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Cards Retrieved Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Cards retrieved successfully. |
| data               | array  | List of cards                              |                        |
| └ card_id          | string | Unique identifier for the card             | card_123               |
| └ user_id          | string | Unique identifier for the user             | user_456               |
| └ type             | string | Type of the card (e.g., credit_card, debit_card) | credit_card            |
| └ cardholder_name  | string | Name of the cardholder                     | John Doe               |
| └ expiration_date  | string | Expiration date of the card in ISO 8601 format | 2025-12-31T00:00:00Z   |
| └ cvv              | string | CVV code of the card                        | 123                    |
| └ issuer           | string | Issuer of the card (e.g., bank name)       | Bank of Example        |
| └ commentary       | string | Additional comments                        |                        |
| └ create_date      | string | Date the card was created in ISO 8601 format | 2023-01-01T00:00:00Z   |
| └ last_modification| string | Date the card was last modified in ISO 8601 format | 2023-02-01T00:00:00Z   |

## Create a New Card

### HTTP Request

**POST** `/cards`

### Summary

Creates a new card associated with the authenticated user.

### Tags

- Cards

### Parameters

| Name         | In    | Type   | Description                                | Example                 |
|--------------|-------|--------|--------------------------------------------|-------------------------|
| Authorization| header| string | Bearer token for authorization.            | Bearer your_token_here  |
| body         | body  | object | Details of the card to create.             |                         |

### Request Body Schema

| Field             | Type   | Description                                           | Example                |
|-------------------|--------|-------------------------------------------------------|------------------------|
| type              | string | Type of the card (e.g., credit_card, debit_card)    | credit_card            |
| cardholder_name   | string | Name of the cardholder                               | John Doe               |
| expiration_date   | string | Expiration date of the card in YYYY-MM-DD format     | 2025-12-31             |
| cvv               | string | CVV code of the card                                | 123                    |
| issuer            | string | Issuer of the card (e.g., bank name)                | Bank of Example        |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 201         | Card created successfully.                    | [Card Created Response Schema](#card-created-response-schema) |
| 400         | Bad request                                    | [Bad Request Response Schema](#bad-request-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Card Created Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 201                    |
| message            | string | Response message                           | Card created successfully. |
| data               | object | No additional data returned                | null                   |

## Retrieve Total Number of Cards

### HTTP Request

**GET** `/cards/total`

### Summary

Retrieves the total number of cards associated with the authenticated user.

### Tags

- Cards

### Parameters

| Name         | In    | Type   | Description                                | Example                 |
|--------------|-------|--------|--------------------------------------------|-------------------------|
| Authorization| header| string | Bearer token for authorization.            | Bearer your_token_here  |

### Responses

| Status Code | Description                                    | Schema                                      |
|-------------|------------------------------------------------|---------------------------------------------|
| 200         | Total number of cards retrieved successfully.  | [Total Cards Retrieved Response Schema](#total-cards-retrieved-response-schema) |
| 401         | Invalid credentials.                          | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                        | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Total Cards Retrieved Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Total number of cards retrieved successfully. |
| data               | object | Contains the total number of cards          |                        |
| └ total            | integer| Total number of cards                      | 42                     |

## Update, Retrieve, and Delete a Specific Card

### HTTP Request

**PUT** `/cards/{card_id}`  
**GET** `/cards/{card_id}`  
**DELETE** `/cards/{card_id}`

### Summary

- **PUT**: Updates the details of an existing card associated with the authenticated user.
- **GET**: Retrieves the details of a specific card associated with the authenticated user.
- **DELETE**: Deletes a specific card associated with the authenticated user.

### Tags

- Cards

### Parameters

| Name         | In    | Type   | Description                                    | Example              |
|--------------|-------|--------|------------------------------------------------|----------------------|
| Authorization| header| string | Bearer token for authorization.                | Bearer your_token_here |
| card_id       | path  | string | Unique identifier of the card.                 | 12345                |
| body (for PUT)| body  | object | Card details to be updated.                    | [Card Details Schema](#card-details-schema) |

### Responses

#### PUT - Update Card

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Card updated successfully.              | [Card Updated Response Schema](#card-updated-response-schema) |
| 400         | Bad request                             | [Bad Request Response Schema](#bad-request-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

#### GET - Retrieve Card

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Card retrieved successfully.            | [Card Retrieved Response Schema](#card-retrieved-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

#### DELETE - Delete Card

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Card deleted successfully.              | [Card Deleted Response Schema](#card-deleted-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Card Details Schema (for PUT)

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| type               | string | Type of the card (e.g., credit_card).       | credit_card            |
| cardholder_name    | string | Name of the cardholder.                     | John Doe               |
| expiration_date    | string | Expiration date of the card (YYYY-MM-DD).   | 2025-12-31            |
| cvv                | string | CVV code of the card.                       | 123                    |
| issuer             | string | Issuer of the card (e.g., bank name).       | Example Bank           |

#### Card Updated Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Card updated successfully. |
| data               | object | Contains affected rows information          |                        |
| └ affectedRows     | integer| Number of rows affected by the update      | 1                      |

#### Card Retrieved Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| card_id            | string | Unique identifier of the card.              | 12345                  |
| user_id            | string | Unique identifier of the user.              | user_6789              |
| type               | string | Type of the card (e.g., credit_card).       | credit_card            |
| cardholder_name    | string | Name of the cardholder.                     | John Doe               |
| expiration_date    | string | Expiration date of the card.                | 2025-12-31            |
| cvv                | string | CVV code of the card.                       | 123                    |
| issuer             | string | Issuer of the card (e.g., bank name).       | Example Bank           |
| commentary         | string | Additional notes or commentary.             |                        |
| create_date        | string | Date the card was created.                  | 2023-01-15T10:00:00Z  |
| last_modification  | string | Date the card details were last modified.   | 2024-01-15T10:00:00Z  |

#### Card Deleted Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Card deleted successfully. |
| data               | object | Contains affected rows information          |                        |
| └ affectedRows     | integer| Number of rows affected by the deletion    | 1                      |

## Retrieve All Passports and Create a New Passport

### HTTP Request

**GET** `/passports`  
**POST** `/passports`

### Summary

- **GET**: Retrieves a list of all passports associated with the authenticated user.
- **POST**: Creates a new passport associated with the authenticated user.

### Tags

- Passports

### Parameters

#### GET - Retrieve All Passports

| Name         | In    | Type   | Description                                    | Example              |
|--------------|-------|--------|------------------------------------------------|----------------------|
| Authorization| header| string | Bearer token for authorization.                | Bearer your_token_here |
| search        | query | string | Search term to filter passports.               | "John Doe"           |

#### POST - Create a New Passport

| Name         | In    | Type   | Description                                    | Example              |
|--------------|-------|--------|------------------------------------------------|----------------------|
| Authorization| header| string | Bearer token for authorization.                | Bearer your_token_here |
| body          | body  | object | Passport details to be created.                | [Passport Details Schema](#passport-details-schema) |

### Responses

#### GET - Retrieve All Passports

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Passports retrieved successfully.        | [Passports Retrieved Response Schema](#passports-retrieved-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

#### POST - Create a New Passport

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Passport created successfully.          | [Passport Created Response Schema](#passport-created-response-schema) |
| 400         | Bad request                             | [Bad Request Response Schema](#bad-request-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Passport Details Schema (for POST)

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| first_name         | string | First name of the passport holder.         | John                   |
| last_name          | string | Last name of the passport holder.          | Doe                    |
| passport_number    | string | Unique passport number.                    | A1234567               |
| nationality        | string | Nationality of the passport holder.        | American               |
| date_of_birth      | string | Date of birth of the passport holder (YYYY-MM-DD). | 1990-01-01          |
| issue_date         | string | Date the passport was issued (YYYY-MM-DD). | 2020-01-01            |
| expiration_date    | string | Expiration date of the passport (YYYY-MM-DD). | 2030-01-01            |
| status             | string | Current status of the passport (e.g., valid, expired). | valid                |
| commentary         | string | Additional notes or commentary.            |                        |

#### Passports Retrieved Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Passports retrieved successfully. |
| data               | array  | List of passport objects                    | [Array of Passport Objects](#passport-object-schema) |

#### Passport Object Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| passport_id        | string | Unique identifier of the passport.          | 123456                 |
| user_id            | string | Unique identifier of the user.              | user_7890              |
| first_name         | string | First name of the passport holder.         | John                   |
| last_name          | string | Last name of the passport holder.          | Doe                    |
| passport_number    | string | Passport number.                           | A1234567               |
| nationality        | string | Nationality of the passport holder.        | American               |
| date_of_birth      | string | Date of birth of the passport holder.      | 1990-01-01            |
| issue_date         | string | Date the passport was issued.              | 2020-01-01            |
| expiration_date    | string | Expiration date of the passport.           | 2030-01-01            |
| status             | string | Current status of the passport.            | valid                  |
| commentary         | string | Additional notes or commentary.            |                        |
| create_date        | string | Date the passport record was created.      | 2023-01-15T10:00:00Z  |
| last_modification  | string | Date the passport record was last modified. | 2024-01-15T10:00:00Z  |

#### Passport Created Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Passport created successfully. |
| data               | object | Contains total passports information        |                        |
| └ total            | integer| Total number of passports after creation   | 5                      |

## Retrieve, Update, and Delete a Specific Passport

### HTTP Request

- **GET** `/passports/{passport_id}`
- **PUT** `/passports/{passport_id}`
- **DELETE** `/passports/{passport_id}`

### Summary

- **GET**: Retrieves details of a specific passport associated with the authenticated user.
- **PUT**: Updates the details of an existing passport associated with the authenticated user.
- **DELETE**: Deletes the passport associated with the authenticated user.

### Tags

- Passports

### Parameters

#### GET - Retrieve a Specific Passport

| Name          | In    | Type   | Description                                    | Example              |
|---------------|-------|--------|------------------------------------------------|----------------------|
| Authorization | header| string | Bearer token for authorization.                | Bearer your_token_here |
| passport_id   | path  | string | Unique identifier of the passport to be retrieved. | 123456              |

#### PUT - Update an Existing Passport

| Name          | In    | Type   | Description                                    | Example              |
|---------------|-------|--------|------------------------------------------------|----------------------|
| Authorization | header| string | Bearer token for authorization.                | Bearer your_token_here |
| passport_id   | path  | string | Unique identifier of the passport to be updated. | 123456              |
| body          | body  | object | Updated passport details.                     | [Passport Details Schema](#passport-details-schema) |

#### DELETE - Delete an Existing Passport

| Name          | In    | Type   | Description                                    | Example              |
|---------------|-------|--------|------------------------------------------------|----------------------|
| Authorization | header| string | Bearer token for authorization.                | Bearer your_token_here |
| passport_id   | path  | string | Unique identifier of the passport to be deleted. | 123456              |

### Responses

#### GET - Retrieve a Specific Passport

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Passport retrieved successfully.        | [Passport Retrieved Response Schema](#passport-retrieved-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

#### PUT - Update an Existing Passport

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Passport updated successfully.          | [Passport Updated Response Schema](#passport-updated-response-schema) |
| 400         | Bad request                             | [Bad Request Response Schema](#bad-request-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

#### DELETE - Delete an Existing Passport

| Status Code | Description                             | Schema                                            |
|-------------|-----------------------------------------|---------------------------------------------------|
| 200         | Passport deleted successfully.          | [Passport Deleted Response Schema](#passport-deleted-response-schema) |
| 401         | Invalid credentials.                    | [Invalid Credentials Response Schema](#invalid-credentials-response-schema) |
| 500         | Internal server error.                  | [Internal Server Error Response Schema](#internal-server-error-response-schema) |

### Response Schemas

#### Passport Details Schema (for PUT)

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| first_name         | string | First name of the passport holder.         | John                   |
| last_name          | string | Last name of the passport holder.          | Doe                    |
| passport_number    | string | Unique passport number.                    | A1234567               |
| nationality        | string | Nationality of the passport holder.        | American               |
| date_of_birth      | string | Date of birth of the passport holder (YYYY-MM-DD). | 1990-01-01          |
| issue_date         | string | Date the passport was issued (YYYY-MM-DD). | 2020-01-01            |
| expiration_date    | string | Expiration date of the passport (YYYY-MM-DD). | 2030-01-01            |
| status             | string | Current status of the passport (e.g., valid, expired). | valid                |
| commentary         | string | Additional notes or commentary.            |                        |

#### Passport Retrieved Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Passport retrieved successfully. |
| data               | object | Details of the passport                    | [Passport Object Schema](#passport-object-schema) |

#### Passport Updated Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Passport updated successfully. |
| data               | object | Contains update information                 |                        |
| └ affectedRows     | integer| Number of rows affected by the update.     | 1                      |

#### Passport Deleted Response Schema

| Field              | Type   | Description                                 | Example                |
|--------------------|--------|---------------------------------------------|------------------------|
| status             | integer| HTTP status code                           | 200                    |
| message            | string | Response message                           | Passport deleted successfully. |
| data               | object | Contains deletion information               |                        |
| └ affectedRows     | integer| Number of rows affected by the deletion.   | 1                      |

## Retrieve Total Number of Passports

### HTTP Request

- **GET** `/passports/total`

### Summary

Retrieves the total count of all passports associated with the authenticated user.

### Tags

- Passports

### Parameters

| Name          | In    | Type   | Description                                    | Example              |
|---------------|-------|--------|------------------------------------------------|----------------------|
| Authorization | header| string | Bearer token for authorization.                | Bearer your_token_here |

### Responses

#### 200 - Total Number of Passports Retrieved Successfully

| Field       | Type   | Description                                      | Example   |
|-------------|--------|--------------------------------------------------|-----------|
| status      | integer| HTTP status code                                | 200       |
| message     | string | Response message                                | Total number of passports retrieved successfully. |
| data        | object | Contains the total count of passports           |           |
| └ total     | integer| Total number of passports associated with the user. | 5         |

