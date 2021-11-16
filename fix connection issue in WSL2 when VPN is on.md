1. Create a file: `sudo nano /etc/wsl.conf`
2. Put the following lines in the file in order to ensure the your DNS changes do not get blown away

```bash
[network]
generateResolvConf = false
```

3. In a cmd window, run `wsl --shutdown`
4. Restart WSL2
5. Create a file: `sudo nano /etc/resolv.conf`. If it exists, replace existing one with this new file.
6. Put the following line in the file

```bash
nameserver 1.1.1.1 # Or use your DNS server by running ipconfig /all
```

7. `sudo chattr +i /etc/resolv.conf` so that file don't get blown away too.
8. Repeat step 3 and 4. You will see git working fine now.

[source](https://gist.github.com/coltenkrauter/608cfe02319ce60facd76373249b8ca6)
