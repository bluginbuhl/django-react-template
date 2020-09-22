# Template for Django/React project

Ready-to-develop application using a Django backend with a Postgresql database and a ReactJS frontend.

Run `docker-compose up -d --build` and wait for containers to build. When finished, you can view the frontend application at [http://localhost:3000](http://localhost:3000).

The relevant "secret" settings have been extracted from `backend.config.settings.py` using the `django-environ` approach (secrets are stored in `/backend/config/.env`). See the `/backend/config/.env.example` file for a template of what this file looks like.