## BUY BUY BUY BUY BUY

1. Buy a domain name at [namecheap](https://namecheap.com). Cheaper there.

## Setup domain name at your VPS

2. Create a domain in Linode. [GUIDE](https://www.linode.com/docs/guides/dns-manager#add-a-domain)
3. If you have a Nodejs server hosted in a VPS like Linode, make them to be your 'DNS provider' - replace with linode's name servers in Namecheap dashboard. [GUIDE](https://www.linode.com/docs/guides/dns-manager/#use-linodes-name-servers-with-your-domain)
4. Create a `A/AAAA` record with **Hostname** as `api`, **IP Address** as your Linode's server IP address. Repeat for IPV6 too.

## Setup domain name at Netlify

You are hosting your static sites/SPA in Netlify.

5. Back in your **Linode** > **Domains** dasboard, create two DNS records

- `A/AAAA` record - **Hostname** as `@`, **IP Address** as Netlify's load balancer's IP address - `75.2.60.5` [GUIDE](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-an-apex-domain)
- `CNAME` record - **Hostname** as `www`, **Alias to** as your provided netlify-domain url e.g. `silly-rosalind.a21212.netlify.app`

6. Now go to your **Netlify** dashboard, **Add Custom Domains**:

- `www.sampurr.com` as your **primary** domain.
- Netlify will automatically create 'apex' domain - `sampurr.com` - for you.

7. At this point, Netlify should take care the rest - 'HTTPS', CDN etc.

### Guides

- [https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-a-records/](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-a-records/)
- [https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/)

That's it really!
