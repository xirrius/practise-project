import axios from 'axios';

export const getStats = async () => {
    const res = await axios.get("stat")
    .catch((err) => console.log(err))
    if(res.status !== 200) {
        return console.log("No data found.");
    }
    const data = await res.data;
    return data;
} 

export const getTestimonials = async () => {
    const res = await axios.get("test")
    .catch((err) => console.log(err))
    if(res.status !== 200) {
        return console.log("No data found.");
    }
    const data = await res.data;
    return data;
}