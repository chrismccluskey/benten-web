Benten Web Interface
--------------------

Benten is a music library management solution with agents written in Golang coordinating with one another and orchestrated by a web interface. This repository is for the web interface itself

### Project Status

At this stage, there isn't much to look at. This project is mostly conceptual at this stage. There is absolutely nothing for an end-user of this application to do, it is not useful for them yet.

### Development

As of right now there are no dev / build tools to automate everything in this repo. Soon, there will be a fully dockerized environment for both frontend and backend including server dependencies.

For now, you can start the development server with:

```
cd frontend
npm run dev
```

Once running, visit [http://localhost:9000](http://localhost:9000)

### Building

For now you can build the frontend into a build folder for deployment with:

```
cd frontend
npm run build
```

### Related Projects

Benten is a collection of repositories, each with their own purpose.

- [benten-docs](https://github.com/chrismccluskey/benten-docs) Documentation
- [benten-web](https://github.com/chrismccluskey/benten-web) Web Interface
- [benten-serato](https://github.com/chrismccluskey/benten-serato) Serato Plugin
- [benten-tagreader](https://github.com/chrismccluskey/benten-tagreader) Audio tag reader
- benten-agent (future)