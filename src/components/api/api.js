import axios from 'axios'; 


  export const fetchUsData = async () => {
      try {
          const data = await axios.get('https://corona.lmao.ninja/v2/countries/USA');   

          return(data["data"]);
          
        } catch (error) { 
          return error; 
        } 
  }

  export const fetchUsMoreData = async () => {
      try {
          const data = await axios.get('https://covidtracking.com/api/v1/us/current.json');   
          return(data["data"][0]);

        } catch (error) { 
          return error; 
        } 
  }


export const fetchStatedData = async () => {
      try {
          const data = await axios.get('https://covidtracking.com/api/v1/states/current.json');  
          
          return data["data"]

        } catch (error) { 
          return error; 
        } 
  }


export const fetchHistoryData = async () => {
      try {
          const historyData = await axios ('https://covidtracking.com/api/us/daily');   

          return historyData["data"].map(({ 
                positiveIncrease, totalTestResultsIncrease, date: date 
              }) => ({ 
                    positiveIncrease: positiveIncrease, 
                    totalTestResultsIncrease: totalTestResultsIncrease, 
                    date 
              })); 
          } catch (error) { 
            return error; 
          } 
    }

export const fetchWorldData = async () => {
      try {
          const data = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats');  

          return data["data"]["data"]

        } catch (error) { 
          return error; 
        } 
}

export const fetchContinentData = async () => {
      try {
          const data = await axios.get('https://corona.lmao.ninja/v2/continents');  
          console.log(data["data"])
          return data["data"].map(({
            updated, cases, continent, recovered
          }) => ({
                updated: updated,
                cases: cases,
                continent: continent,
                recovered: recovered
          }));
          // return data["data"]["data"]

        } catch (error) { 
          return error; 
        } 
}





