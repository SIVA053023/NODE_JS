import http from 'http';
import path from 'path';
import express from 'express';

const web = express();

web.get('*', (req, resp) => {
    const requestedUrl = req.url;

    let filePath = '';
    if (requestedUrl === '/' || requestedUrl === '/index.html') {
        filePath = path.join(process.cwd(), 'html', 'index.html');
    } else if (requestedUrl === '/about.html') {
        filePath = path.join(process.cwd(), 'html', 'about.html');
    } else if (requestedUrl === '/services.html') {
        filePath = path.join(process.cwd(), 'html', 'services.html');
    } else if (requestedUrl === '/contact.html') {
        filePath = path.join(process.cwd(), 'html', 'contact.html');
    } else {
        resp.status(404).send('Page not found');
        return;
    }

    resp.sendFile(filePath, (err) => {
        if (err) throw err;
    });
});

web.listen(2580, '127.0.0.1', (err) => {
    if (err) throw err;
    console.log(`Server is running at http://localhost:2580/`);
});