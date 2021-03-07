import jwt_decode from "jwt-decode";

export default {
    getProfileIcon: () => {
        return 'local storage'
    },
    hasUnreadMessages: () => {
        return false
    },
    getToken: (token) => {
        return jwt_decode(token);
    },
    dateToObject: (date) => {
        let month = []
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        return {
            day: date.getDate(),
            month: month[date.getMonth()],
            year: date.getFullYear()
        }
    },
    dateToString: (date) => {
        return `${date.day}/${date.month}/${date.year}`
    },
    toGrid: (arr) => {
        let grid = []
      
        for (let i = 0; i < arr.length; i += 3) {
          let row = []
      
          if (arr[i]) {
            row[0] = arr[i]
          }
          if (arr[i + 1]) {
            row[1] = arr[i + 1]
          }
          if (arr[i + 2]) {
            row[2] = arr[i + 2]
          }
      
      
          if (row.length == 1) {
            row[1] = ""
            row[2] = ""
          }
      
          if (row.length == 2) {
            row[2] = ""
          }
      
          grid[i] = row
        }
      
       
        return grid
      }
}