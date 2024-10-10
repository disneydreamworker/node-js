const axios = require("axios"); // axios import


async function fetchData() {

    const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

    try {
        const result = await axios.get(url);

        const {data} = result;


        if (!articleList || articleList.length === 0) {
            throw new Error("데이터가 없습니다.");
        }

        const results = articleList.map((article, idx) => ({
            title: article.title,
            rank: idx + 1
        }));

        for (let movieInfo of results) {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }

    } catch (error) {
        throw new Error(error);
    }
}

fetchData();