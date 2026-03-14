const axios = require("axios");

const analyzeEmotion = async (text) => {

    const prompt = `
Analyze the emotion in this journal entry.

Return JSON only.

Journal:
"${text}"

Format:
{
 "emotion": "",
 "keywords": [],
 "summary": ""
}
`;

    const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            model: "llama3-8b-8192",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`
            }
        }
    );

    const content = response.data.choices[0].message.content;

    return JSON.parse(content);
};

module.exports = analyzeEmotion;