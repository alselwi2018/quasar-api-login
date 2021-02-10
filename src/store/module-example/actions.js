import axios from 'axios';
export default function  (/* context */) {
    const actions = {
        async fetchImages({commit}){
           
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            commit('setImages',response.data);
            
        }
       
    };

}
