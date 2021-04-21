/*
  ---Purpose---
  Adds event notification if date is less than 5 days or if date was passed
  ---eventNotification---
  1.Loops htrough the eventObject(It is a 2d array)
  2.grabs and stores the events
  3.gets the unfilterd date (Tuesday April 5th) for example
  4.Make a date object based on the current index of he array
  5. Use it to call the getMonthFromString function which returns the diffrence between date (int)
  6.Detemrine if the date passed
    If date did not pass(time_between_dates is in rage of 0 to 5)
      Check to make sure it was not aldready displayed
        If it was not then send notificaion about events
        then we check if they have a subject on this date by calling findPeople reffer to sendRequests.js
     If date passed (time_between_dates between -5 and 0 exclusive)
        Alert event passed
*/

  function getMonthFromString(month) {
    var d = Date.parse(month + "1, 2012");
    if (!isNaN(d)) {
      return new Date(d).getMonth() + 1;
    }
    return -1;
  }

  function diffrence(d1){
    // https://www.delftstack.com/howto/javascript/javascript-subtract-dates/
    const cDate = Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate())
    const evDate = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate())
    const day = 1000 * 60 * 60 * 24;
    return (evDate - cDate) / day
  }

  async function eventNotification(eventObject){
    for(let i = 0; i<eventObject.length;i++){
        let evnt = eventObject[i].slice(-1)[0]
        let date_raw = eventObject[i][0]
        var read = eventObject[i][2]
        const date = new Date(`${eventObject[i][1]}-${getMonthFromString(date_raw.split(" ")[1])}-${date_raw.split(" ").slice(-1)[0].replace(/\D/g, '')}`)
        var time_between_dates = diffrence(date)
        //Get all the notes from the notificaion panel
        var notes = [...document.querySelectorAll('.notification')].map(x => x = x.querySelector('.id').innerText)
        //Get all the dates form the notificaion panel
        var note_date = [...document.querySelectorAll('.notification')].map(x => x = x.querySelector('.description').innerText.split(" ").splice(-3).join(" "))
        if (time_between_dates >= 0 && time_between_dates <= 5){
          if(notes.indexOf(evnt) == -1 && notes.indexOf(date_raw) == -1){
              addNotification(`Event: ${evnt} is on ${date_raw}`, 'Date Nearing!',evnt,false,'event')
              if(!read){
              for(let s = 0; s<subject.length;s++){
                if(evnt.toLowerCase().includes(subject[s].toLowerCase())){
                  findPeople(subject[s], i)
                }
              }
            }
          }
        }
        else if(time_between_dates >= -5 && time_between_dates < 0){
          if(notes.indexOf(evnt) == -1 && notes.indexOf(date_raw) == -1){
              addNotification(`Event: ${evnt} was on ${date_raw}`, 'Date passed!',evnt,false,'event')
          }
        }
    }
  }
