# Set up
Create an .env file in the root of the project.
Add a database_path.

# use pm2 to run nextjs
```
npm install pm2 -g

pm2 start npm --name "nextjs" -- start
or
pm2 start npm --name "nextjs" -- run dev

pm2 list
pm2 stop my-app
``` 