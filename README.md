# Flavor-and-Cuisine
Developed by Eduardo Savian De Oliveira, Marcos Augusto Fehlauer Pereira, Yuri Rodrigues

## Objective:
- Create the Flavor and Kitchen app backend;

- Must contain API endpoints of at least 3 CRUDs;

- It must have data persistence (relational or non-relational);

- Use any WEB programming language;

- Implement JWT in protected API requests;

- Export JSON from “Postman” or “Thunder Client” with all requests to validate the endpoints created;

- Implement documentation via Swagger.

## Installation and Usage

1. Set up the virtual env:

* Windows
```
python -m venv flavor-and-cuisine-env and flavor-and-cuisine-env\Scripts\activate.bat
```

* Linux, OSX and other Unix-like
```
python3 -m venv flavor-and-cuisine-env && source flavor-and-cuisine-env/bin/activate
```

2. Install the dependencies with pip: 
```
pip install fastapi sqlalchemy pydantic uvicorn PyJWT python-decouple
```

3. Run the application:
```
cd application ; uvicorn app:app
```

## Documentation

- Use http://127.0.0.1:8000/docs to see the Swagger documentation

Useful links:

- FastApi: https://fastapi.tiangolo.com/

- SQLAlchemy: https://www.sqlalchemy.org/

## Why is `.env` here?

The authors of the project are well aware that you should **not** commit `.env`, however, this server is for educational purposes, the presence of `.env` makes it easier to get started.
