const downloaderTikTokNew = require('./index');

async function runTest() {
  try {
    const downloader = new downloaderTikTokNew();

    // Test URL TikTok
    const testUrl = 'URL_TIKTOK';
    
    console.log('🔍 Downloading TikTok Video...');
    const result = await downloader.download(testUrl);
    
    console.log('✅ Download Successful!');
    console.log('Video Results:');
    result.forEach((item, index) => {
      console.log(`${index + 1}. ${item.type}: ${item.url}`);
    });

  } catch (error) {
    console.error('❌ Test Failed:', error.message);
  }
}

runTest();