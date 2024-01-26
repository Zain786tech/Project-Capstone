import React, {useState} from "react";

const BookingForm =(props) => {
     const [date, setDate] = useState ("");
     const [Time, setTime] = useState ("");
     const [guests, setGuests] = useState ("");
     const [occasion, setOccasions] = useState ("");

         const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
     }

    const handleChange = (e) => {

     }

    return (
        <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <div>
                    <label htmlFor='book-date'>
                    Choose Date
                    </label>
                    <input id='book-date' value={date} onChange={(e)=> handleChange(e.target.value)} type='date' required/>
                </div>
                {/* for time selection */}
                <div>
                <label htmlFor='book-time'>
                    Choose time
                    </label>
                    <select id="book-time" value={Time} onChange={(e)=>setTime(e.target.value)}>
                   <option value= "">Select a time</option>
                   {
                      props.availableTime.availableTime.map(availableTime => {return <option key={availableTime}>{availableTime}</option>})

                   }
                   </select>
                   </div>
                {/*for number of guests */}
                  <div>
                        <label htmlFor="book-guests">Number of Guests: </label>
                          <input id='book-guests' min='1' value= {guests} onChange={(e) => setGuests(e.target.value)}/>
                  </div>
                    {/* Ocassions */}
                    <div>
                    <label htmlFor="book-occasion">Ocassions: </label>
                          <select id='book-occasion' key={occasion} value= {occasion} onChange={(e) => setOccasions(e.target.value)}>
                 <option>Birthday</option>
                 <option>Anniversary</option>
                 </select>
                  </div>
                {/* submit buttom */}

                 <div>
                    <input aria-label="on Click" type='submit' value={"Make Your Reservation"}/>
                 </div>
                </fieldset>

            </form>
        </section>
        </header>
    );
};

export default BookingForm;