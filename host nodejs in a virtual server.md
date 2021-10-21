## Step 0 - Choose a VPS provider

Choose Linode https://www.linode.com/digitalocean-vs-linode/ .

Don't miss the free $ credit when signing up.

## Step 1 - Replace domain nameservers

Utilize Linode's nameservers in your domain hosting provider like Namecheap:

```

```

## Step 2 - https://www.linode.com/docs/guides/getting-started/

## Step 2.1 - `Hosts` file and `hostname`

`sudo nano /etc/hosts`
then add this two lines - IPV4 and IPV6 each

```
23.92.16.46 api.sampurr.com sampurr
2600:3c03::f03c:92ff:fe43:5b17 api.sampurr.com sampurr
```

Note,

- `api.sampurr.com` is your 'FQDN'. It's your main URL.
- `sampurr` is your `hostname`. It can be anything. Doesn't have to be an URL. Once set, it appears in your CLI - `kilgarenone@sampurr:/var/www$`

## Step 3 - https://www.linode.com/docs/guides/securing-your-server/

## Step 4 - Firewall stuff

Use `ufw`. Forget about 'Linode Cloud Firewall'.

- `sudo ufw allow OpenSSH`
- `sudo ufw allow 'Nginx Full'` - Enable both HTTP and HTTPS
- `sudo ufw enable`. Type `y`. `ENTER`.
- `sudo ufw status`:

```
To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
OpenSSH                    ALLOW       Anywhere
Nginx Full                 ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx Full (v6)            ALLOW       Anywhere (v6)
```

### Setup `fail2ban`

https://www.linode.com/docs/security/using-fail2ban-to-secure-your-server-a-tutorial/

- Just install and go with the defaults.
- I skipped `sendmail` - too complicated. No need.

## Step 5 - Nginx

https://www.linode.com/docs/guides/how-to-install-nodejs-and-nginx-on-ubuntu-18-04/

### /etc/nginx/sites-available/api.sampurr.com

```
# Rate limiting - only allow 1 request every 100ms(10 requests/second)
# $binary_remote_addr is user ip address in binary. More efficient than alternatives.
# https://www.nginx.com/blog/rate-limiting-nginx/
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {

    server_name api.sampurr.com;
    root        /var/www/api.sampurr.com;
    index       index.html;

    # tuning nginx https://www.nginx.com/blog/tuning-nginx/
    access_log  off;
    sendfile    on;

    location / {
        limit_req zone=mylimit;

        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-XSS-Protection "1; mode=block";
}
```

#### Note

- `proxy_pass http://localhost:4000;` is the key to redirect traffic to `api.sampurr.com` to our NodeJS server running at `localhost:4000` in this case.
- Make sure the port - here `4000` - is the one set in your NodeJS server listening to.
- `server_name` is your domain name you gonna hit - `api.sampurr.com`
- If just building a api server, you can skip setting up the `/var/www/example.com/index.html`.

## Step 6 - Test a dummy NodeJS server is proxied by Nginx

See if your Nginx is acting as a proxy - hitting `http://api.sampurr.com` in your **browser** will contact your NodeJS server and output `Hello world`.

```
cd ~
nano hello.js
```

`hello.js`:

```
const http = require('http');

const hostname = 'localhost';
const port = 4000; // the same port in 'proxy_pass' above

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Run it,

```
node hello.js
```

Soft test it,

```
curl http://localhost:3000
```

You should see 'Hello world!'.

Now hit your domain in your browser 'http://api.sampurr.com'.

You should be greeted with 'Hello world!' as well. Nice.
