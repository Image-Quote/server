# server
Server Image To Quote


list of routes users :

| Route                 |  HTTP  | Desription                   |
| --------------------- |:------:| ---------------------------- |
| /users/register       | POST   | body: name, email, password  |
| /users/login          | POST   | body: email, password        |

example /users/register : 
```
body: name, email, password
http://localhost:3000/users/register

output: 
{
    message: 'Berhasil Daftar'
}
```

example /users/login :
```
body: email, password
http://localhost:3000/users/login

output:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViOWEzNjllNTMwODZmNzcxYzcxOTQ1MSIsIm5hbWUiOiJqb2huIiwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsImlhdCI6MTUzNjgzNDE4NH0.sFjSRXGErPr6JFimtCdNYMENOiTMcZSsoirvbnY6dyM"
}
```
