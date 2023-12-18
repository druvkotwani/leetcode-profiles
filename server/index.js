const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors'); // Import the cors package


const app = express();
const port = 8000;
// Use the cors middleware
app.use(cors({
    origin: 'https://leetcode-profiles.vercel.app', // Replace with your frontend's domain
}));

app.get('/:username', async (req, res) => {
    try {
        const username = req.params.username; // Retrieve the username parameter from the URL

        // Use the username in your scraping logic...
        const url = 'https://leetcode.com/' + username + '/';
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        // Extract data (same logic as before)
        // Perform scraping or data extraction

        //Profile Data
        const fullName = $('div.text-label-1.break-all.text-base.font-semibold').first().text().trim();

        const image = $('div.relative.flex.h-20.w-20.shrink-0 img').attr('src');
        const imageUrl = $('div.relative.flex.h-20.w-20.shrink-0 img').attr('src');
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');

        const badgeImg = $('div.ml-1 img').attr('src');
        const rank = $('span.ttext-label-1.font-medium').text();

        //Solved Data
        const easySolved = $('span.text-base.font-medium.text-label-1').eq(0).text().trim();
        const mediumSolved = $('span.text-base.font-medium.text-label-1').eq(1).text().trim();
        const hardSolved = $('span.text-base.font-medium.text-label-1').eq(2).text().trim();

        //Total Data
        const easyTotal = $('span.text-xs.font-medium.text-label-4').text().trim().split('/')[1].trim();
        const mediumTotal = $('span.text-xs.font-medium.text-label-4').text().trim().split('/')[2].trim();
        const hardTotal = $('span.text-xs.font-medium.text-label-4').text().trim().split('/')[3].trim();

        //Beats Data
        const easyBeats = $('span.font-medium.text-label-2').eq(0).text().trim();
        const mediumBeats = $('span.font-medium.text-label-2').eq(1).text().trim();
        const hardBeats = $('span.font-medium.text-label-2').eq(2).text().trim();

        //About us
        const aboutUs = [];
        $('div.text-label-2 a').each((index, element) => {
            const link = $(element).attr('href');
            const text = $(element).find('.truncate').text().trim();

            aboutUs.push({ link, text });
        });

        //Format aboutUs Data
        // Initialize empty objects for different categories
        let linkedin = {};
        let twitter = {};
        let github = {};
        let website = {};

        // Loop through the links array
        aboutUs.forEach(item => {
            if (item.link.includes('linkedin')) {
                linkedin = { link: item.link, text: item.text };
            }
            else if (item.link.includes('twitter')) {
                twitter = { link: item.link, text: item.text };
            }
            else if (item.link.includes('github')) {
                github = { link: item.link, text: item.text };
            }
            else {
                website = { link: item.link, text: item.text };
            }
        });

        // Creating a data object to structure the extracted information
        const profileData = {
            fullName,
            username,
            badgeImg: badgeImg ? `${badgeImg}` : undefined,
            rank,
            image: `data:image/jpeg;base64,${imageBuffer}`,
        };

        const totalQuestions = parseInt(easyTotal) + parseInt(mediumTotal) + parseInt(hardTotal);
        const totalSolved = parseInt(easySolved) + parseInt(mediumSolved) + parseInt(hardSolved);

        const questionData = {
            easySolved,
            easyTotal,
            easyBeats,
            mediumSolved,
            mediumTotal,
            mediumBeats,
            hardSolved,
            hardTotal,
            hardBeats,
            totalSolved,
            totalQuestions,
        }

        const aboutData = {
            linkedin,
            twitter,
            github,
            website,
        }


        // res.json({ profileData, questionData }); // Sending the scraped data as a JSON response
        res.json({ profileData, questionData, aboutData });

    } catch (error) {
        console.error('Axios Error:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


