import axios from 'axios';

export const getHelpdeskdata = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://openai80.p.rapidapi.com/chat/completions',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'bbee906ed2msh30dd86ba49db288p1fc026jsn9908c40d1f88',
          'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${inputData}"}]}`
      };

      let response = await axios(options);
    //   console.log (response.data.choices[0].message.content);

    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};