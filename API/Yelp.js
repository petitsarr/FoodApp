import axios from 'axios';

export default axios.create({
    // l'url de Base
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
         'Bearer KOZC7CIgUyVWm28BSlu8u6XpazjZcbnZMH3qhEhbmbxtsKkTOydnNjOd0Cu_mABMbz3LimDjabOqcWn37Ncp2NyVxZXAJS--iM8ts0AQpRAUF_gKa_UFOYDnI95HX3Yx '
    }
   
});  
