const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async () => {
    try {
        const url = 'https://leetcode.com/druv_kotwani';
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        // Perform scraping or data extraction

        //Profile Data
        const username = $('div.text-label-3.text-xs').first().text().trim();
        const fullName = $('div.text-label-1.break-all.text-base.font-semibold').first().text().trim();
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
        const easyBeasts = $('span.font-medium.text-label-2').eq(0).text().trim();
        const mediumBeasts = $('span.font-medium.text-label-2').eq(1).text().trim();
        const hardBeats = $('span.font-medium.text-label-2').eq(2).text().trim();

        // Creating a data object to structure the extracted information
        const profileData = {
            fullName,
            username,
            badgeImg: badgeImg ? `https://leetcode.com${badgeImg}` : undefined,
            rank,
        };

        const totalQuestions = parseInt(easyTotal) + parseInt(mediumTotal) + parseInt(hardTotal);
        const totalSolved = parseInt(easySolved) + parseInt(mediumSolved) + parseInt(hardSolved);

        const questionData = {
            easySolved,
            easyTotal,
            easyBeasts,
            mediumSolved,
            mediumTotal,
            mediumBeasts,
            hardSolved,
            hardTotal,
            hardBeats,
            totalSolved,
            totalQuestions,
        }

        // Display data in the console
        console.log('Profile:', profileData);
        console.log('Data:', questionData);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();