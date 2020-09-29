# redis-node-cache
Weekly Project to give a overview on redis cache and how using cache could speed up your requests to server 

# Steps to start the project 
Step 1: Clone the repo to yor local 
Step 2: Get a package manager, here I used brew 
Step 3: Install redis `brew install redis`
Step 4: Install node for npm package manager
Step 5: Spin the redis `redis-server`
Step 6: Spin local instance `npm run start` || `npm start`
Step 7: Go to browser `localhost:5000/repos/uvagopisrinivas`
Step 8: In the browser network tab observer the time taken for the request to visiualize performance using redis cache

# Commands description
`npm run start` - To spin server on the given port 
`redis-server` - To start redis server 

# Redis cli commands 
`redis-cli` - To open redis command line interface 
`set key value` - To set a key value pair using redis cli 
`get key` - To get the value for the key, stored inside redis cache 
`flushall` - Removes everything in redis cache 
