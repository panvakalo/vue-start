# vue-start

### Description
This is a repository for any VueJS starting project, with the following technologies implemented:
- Vue-router
- Custom Mock API Server

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run end-to-end tests
```
npm run test:e2e
```

### Run unit tests
```
npm run test:unit
```

# Developer's notes
### Login
I have used Mockable's (https://www.mockable.io) mock API server to simulate the authentication while user tries to 
Login. The response is always 200 no matter the credentials, otherwise I could use a GET call with some comparing, which 
kinda seemed too cumbersome and I wanted to simulate as much as possible a POST request.
