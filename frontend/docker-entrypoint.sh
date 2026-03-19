#!/bin/sh
set -e

: "${API_BASE_URL:=/api}"
export API_BASE_URL

envsubst '${API_BASE_URL}' < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js

exec nginx -g "daemon off;"
