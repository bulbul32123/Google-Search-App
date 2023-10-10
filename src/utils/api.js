import axios from "axios";

const Base_Url = 'https://www.googleapis.com/customsearch/v1';
const params = {
    key: 'AIzaSyAxVPrmsbau7rtsFlWRteOFUBq_FUAAxhs',
    cx : '428c7b3a823e04534'
}

export const fetchDataFromApi = async(payload) => {
    const { data } = await axios.get(Base_Url,{params:{...params,...payload}})
    return data
};
