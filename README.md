# Ping Me Meals — Full Project (Option A)

This is the complete project (frontend + backend) ready to upload to GitHub and deploy on Render.

## How to use
1. Download and unzip this folder.
2. Upload the folder contents to your GitHub repository root.
3. In Render dashboard, delete any existing services created by older blueprints (if you see errors about changing service type).
4. Sync the Blueprint or create new services using render.yaml.
5. Set env vars for backend service on Render:
   - DATABASE_URL (provided by Render DB or your own)
   - ADMIN_TOKEN (choose a secret string)
   - FRONTEND_URL (optional)
6. Deploy and check the frontend/admin pages.

Admin login: visit /admin on the frontend and enter the ADMIN_TOKEN.
