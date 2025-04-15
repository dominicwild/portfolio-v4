# Portfolio V4

This site went through many iterations that weren't finished due to one reason or another. **V2** improved many things
by using a *React SPA* rather than a *PHP server*, making it *cheaper to deploy* and *easier to develop*. **V3**
introduced using `.md` files to store project descriptions. There were other improvements, but those were the main ones.

This brings us to **V4**. The main problem I wanted to solve, starting from **V1**, was *easier hosting*. The old PHP
server required *manual SSL certificate renewal*, keeping the server running, and had *no CI/CD pipeline*. To overcome
all this, I decided to host **V4** on *Vercel* and develop it using `Next.js`, utilising *React Server Components (
RSC)*. This came with additional benefits: *better performance*, *lower cost* (it's now *serverless*), and improved
*search engine visibility* (since SPAs aren't search engine friendly).

All my choices were made to *optimize feature development* and *avoid the complexity* of managing infrastructure.
*Vercel* also provides a pipeline and *automatically deploys my website*—all without costing me a penny.
