# Node JS

>Install Node js on local VM.

```
~ curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
~ sudo apt-get install -y nodejs
```

>Create 2 API's running on ports 6080 and 7080 with messages "Hello Node JS" and "Node JS installed successfully" respectively.

First Create directory for the apis and initialize the node application

```
~ mkdir lf_intern
~ cd lf_intern
~ npm init
```

![Initialize](screenshots/Screenshot%202021-11-16%20090630.png)

Now to create 2 apis, 2 js files are created, **ap1.js** and **api2.js** 

### api1.js

```
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello Node JS');
}).listen(6080);
console.log('Server started on localhost:6080; press Ctrl-C to terminate...!');
```

### api2.js

```
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Node JS installed seccessfully');
}).listen(7080);
console.log('Server started on localhost:7080; press Ctrl-C to terminate...!');
```


>Install pm2 tool and create 4 clusters of both Node's.

To install pm2:

```
~ npm install -g pm2
```

![pm2 Install](screenshots/Screenshot%202021-11-16%20095042.png)

To start a node application, we can use node or npm, pm2 can also be used as such

```
~ pm2 start api1.js
```
![Cluster](screenshots/Screenshot%202021-11-16%20095419.png)

To create cluster of 4 of each of the node applications we can use the command

```
~ pm2 start api1.js api2.js -i 4
```

![Cluster](screenshots/Screenshot%202021-11-16%20100000.png)

 
>Delete all 4 clusters one-by-one

To delete pm2 instances we can use delete command from pm2 as such:

```
~ pm2 delete 0
```
 
![Delete](screenshots/Screenshot%202021-11-16%20100126.png)

In Similar way we can do it for all the processes

```
~ pm2 delete 1
~ pm2 delete 2
~ pm2 delete 3
~ pm2 delete 4
~ pm2 delete 5
~ pm2 delete 6
~ pm2 delete 7
````

We can also kill all the process as once as such:

```
~ pm2 kill 
```

![Kill](screenshots/Screenshot%202021-11-16%20101138.png)
