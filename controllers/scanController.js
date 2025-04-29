const scanWebsite = async (req, res) => {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ message: 'URL is required.' });
    }
  
    // Fake accessibility scan result (normally use Lighthouse or Pa11y)
    const report = {
      url,
      issues: [
        { type: 'Contrast Error', description: 'Low contrast text detected.' },
        { type: 'Missing Alt', description: 'Image without alt text found.' }
      ],
      scannedAt: new Date()
    };
  
    res.status(200).json(report);
  };

  module.exports = { scanWebsite };
  