import axios from 'axios';

export const PredictCrop = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://agroinone.post.rohankm.live//get_selected_value',
        headers: {
          'content-type': 'application/json',
        },
        data:inputData
    };


      let response = await axios(options);
      return response.data;


  } catch (error) {
    console.error(error.response.data); 
  }
};