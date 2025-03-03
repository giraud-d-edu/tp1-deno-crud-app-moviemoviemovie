# Deno REST API for Movies, Actors, and Ratings

## Project Overview

This project is a RESTful API developed using Deno, designed to manage movies, actors, and ratings. It adheres to best
practices in API development, including entity relationships, DTO usage, MVC architecture, and appropriate HTTP status
codes.

## Features

-   **Entity Relationships**:

    -   **Movie**: Contains an ID, title, release year, list of actors, and list of ratings.
    -   **Actor**: Contains an ID, name, and birth year.
    -   **Rating**: Associated with a user and a movie, with a score ranging from 0 to 10.
    -   **Justification**: The model choices reflect real-world relationships and ensure data integrity.

-   **DTOs (Data Transfer Objects)**:

    -   DTOs are used for all API interactions.
    -   Clear separation between DTOs (`dtos/`) and models (`models/`).
    -   Conversion functions between Models and DTOs are implemented in the Services layer.

-   **MVC Architecture**:

    -   The code is structured into Models, Controllers, Services, and Repositories.
    -   Each layer has a distinct role, ensuring maintainability and scalability.

-   **HTTP Status Codes**:

    -   Utilizes relevant HTTP codes: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error.
    -   Comments are added to explain the usage of each code.

-   **Tools and Technologies**:
    -   Developed with Deno and Oak for route management.
    -   Data is stored in memory using `Map()`, with an abstraction layer for future database integration.
    -   A `routes.ts` file consolidates all routes.

## Project Structure

```
/controllers
/services
/models
/dtos
/repositories
/routes
```

-   **controllers/**: Handles incoming requests and responses.
-   **services/**: Contains business logic and data processing.
-   **models/**: Defines data structures for Movies, Actors, and Ratings.
-   **dtos/**: Contains Data Transfer Objects for API communication.
-   **repositories/**: Manages data storage and retrieval.
-   **routes/**: Defines API endpoints.

## Getting Started

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    ```

2. **Run the server**:
    ```bash
    deno run --allow-net server.ts
    ```

## Explanation

The main file, `server.ts`, initializes the server and sets up routing. It serves as the entry point for the
application, ensuring all components are correctly integrated.
