import axios from 'axios';

export const PredictLoan = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'http://146.148.50.49//loan_predicted_value',
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