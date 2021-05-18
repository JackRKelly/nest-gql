# Nest-GQL
A NestJS back-end with GraphQL and TypeORM.

Install dependencies
```
yarn
```

Build the PostgreSQL docker image
```
yarn db:build
```

Start the PostgreSQL docker image
```
yarn db:start
```

Start the development server
```
yarn start:dev
```

You may now visit http://localhost:3000/graphql for the playground to enter the following queries, of you may use an API testing tool such as Postman.

Make a POST request to the /graphql endpoint with the following body:
``` 
mutation {
  createUser(
    address: "12345 S Street"
    email: "email@email.com"
    name: "First Last"
    phone: "1231231234"
  ) {
    name,
    address,
    email,
    phone,
    id
  }
}
```

Then make another POST request to the /graphql endpoint with the following body:
``` 
query {
  users {
    name,
    address,
    email,
    phone,
    id
  }
}
```