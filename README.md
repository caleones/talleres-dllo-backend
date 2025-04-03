# Taller 4 - 3 de abril de 2025

# GET /users/hobby
curl "http://localhost:3000/users/hobby?hobby=lectura"

# GET /users/exists
curl "http://localhost:3000/users/exists?codigo=200096042"

# GET /users/hobby/count
curl "http://localhost:3000/users/hobby/count?hobby=programar"

# GET /users/is-free
curl "http://localhost:3000/users/is-free"

# POST /users/suggest
curl -X POST "http://localhost:3000/users/suggest" \
     -H "Content-Type: application/json" \
     -d '{
           "codigo": "200096042",
           "hobby": "cocinar"
         }'

# POST /users
curl -X POST "http://localhost:3000/users" \
     -H "Content-Type: application/json" \
     -d '{
           "codigo": "200171902",
           "nombre": "Edison",
           "apellido": "Pacheco",
           "hobbies": ["estudiar", "carnavalear", "ir a cine"]
         }'

# POST /users/random
curl -X POST "http://localhost:3000/users/random"
