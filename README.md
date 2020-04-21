# SpotiFine

## Provide following needed parameters in *.env* file :

````
SF_BACKEND_ADDR_DEV='localhost' #USED FOR CYPRESS TESTING PURPOSE
SF_BACKEND_ADDR_PROD="EXAMPLE.COM" #USED FOR FRONTEND DEPLOYMENT (PROD)
SF_BACKEND_PORT=12345 #USED FOR FRONTEND DEPLOYMENT (PROD)
SF_FRONTEND_PORT=8100
SF_FRONTEND_ADDR_DEV=localhost
SPOTIFY_CLIENT_ID='MY_SPOTIFY_CLIENT_ID' # SPOTIFY FOR DEVELOPERS CID
SPOTIFY_CLIENT_SECRET='MY_SPOTIFY_CLIENT_SECRET' # SPOTIFY FOR DEVELOPERS CSECRET
SPOTIFY_API_URI='https://api.spotify.com/v1' #SPOTIFY API URI
SPOTIFY_ACCOUNTS_URI=accounts.spotify.com
````

## Useful commmands
## Start backend server (dev mode)
- `npm run back:dev`
## Start frontend (dev mode)
- `npm run front:dev`
## Clean all builds and dependencies
- `npm run clean:all`
