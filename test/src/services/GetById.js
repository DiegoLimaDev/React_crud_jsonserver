import { data } from './data';

// const GetDataById = (id) => {
//   const [dataID, setDataID] = useState([]);

//   axios.get('http://localhost:3010/data').then((response) => {
//     setDataID(response.data);
//   });

//   return dataID.find((dataID) => dataID.id === id);
// };

// export default GetDataById;

export const GetDataById = (id) => {
  return data.filter((data) => data.id === id);
};
