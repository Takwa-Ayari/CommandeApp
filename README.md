## Frontend Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation
1. Install project dependencies using Yarn.
    ```bash
    yarn install
    ```

2. Build and run the frontend application.
    ```bash
    npm run dev
    ```

## Backend Setup

### Prerequisites
- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/) or your preferred database

### Installation
1. Add a `.env` file in the root directory with your database configuration and other settings. You can use `.env.example` as a template.
   
2. Install Laravel dependencies using Composer.
    ```bash
    composer install
    ```

3. Generate the application key.
    ```bash
    php artisan key:generate
    ```

4. Run database migrations to create tables.
    ```bash
    php artisan migrate
    ```

5. Start the Laravel development server.
    ```bash
    php artisan serve
    ```

The application should now be accessible at `http://localhost:5173`.

