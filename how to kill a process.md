## Kill a process
1. `npx kill-port 8080`

### Linux
1. See which port it says is in used. e.g. `8080`
2. `lsof -i TCP:8080 | grep LISTEN`
3. Grab the value in second column:
```
node    2464 murari   21u  IPv6 4392639      0t0  TCP *:http-alt
```
4. `kill -9 2464`
