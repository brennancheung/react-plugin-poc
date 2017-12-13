# react-plugin-poc

# Notes

If you are running the dev server locally and want to connect ot a DU you will need to change the
nginx config to allow from your `localhost:3000`.  The problem is that blocks the old UI (`localhost:4000`).
To get around this just allow from all origins.

    add_header 'Access-Control-Allow-Origin' "$http_origin" always;

This file can be found at `/etc/nginx/conf.d/pf9/cors.conf`

Also, you will need to add:

    add_header 'Access-Control-Expose-Headers' 'X-Subject-Token';
