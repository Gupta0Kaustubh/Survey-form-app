import axios from 'axios';

const baseUrl="http://localhost:3000"


// const getAllToDo = (setToDo) => {
//     axios.get(baseUrl).then(({ data }) => {
//       console.log('data ---> ', data);
//       setToDo(data);
//     });
//   };

  const addSurvey = (response) => {
    console.log(response[0])
    axios
      .post(`${baseUrl}/add`, response[0] )
      .then((data) => {
        console.log(data);
        // setText('');
        // getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
  };

  
export {addSurvey};