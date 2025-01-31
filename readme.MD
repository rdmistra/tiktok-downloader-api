
# TikTok Video Downloader

## Description
A simple TikTok downloader library based on API, super lightweight and fast, and if any issues arise, you don't need to update the library.

## Features
- Download TikTok videos from URLs
- Support for multiple media types
- Simple and intuitive API

## Installation
```bash
npm install tiktok-downloader-new
```

## Basic Usage
```javascript
const TikTokDownloader = require('tiktok-downloader-new');

async function downloadTikTokVideo() {
  try {
    const downloader = new TikTokDownloader();
    const videoUrl = 'https://www.tiktok.com/@username/video/videoID';
    
    const result = await downloader.download(videoUrl);
    console.log('Video download results:', result);
  } catch (error) {
    console.error('Download failed:', error.message);
  }
}

downloadTikTokVideo();
```

## Example Response:
```javascript
1. video_hd: https://v16m-default.akamaized.net/xxxxx

2. video_watermark: https://v16m-default.akamaized.net/xxxxx

3. audio: https://sf16-ies-music-va.tiktokcdn.com/xxxxx
```

## Performance
- Lightweight and fast
- Minimal dependencies
- Efficient API request mechanism

## Note
If an error occurs, please create an issue on GitHub so I can fix the API.

## License
This project is licensed under the MIT License.

