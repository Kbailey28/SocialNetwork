import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';


export const Quiz = () => {

    const choices = [
        {
          choice: "Trusting",
          value: 1
        },
        {
          choice: "Indecisive",
          value: 1
        },
          {
          choice: "Fearful",
          value: 1
        },
          {
          choice: "Anxious",
          value: 1
        },
          {
          choice: "Dependent",
          value: 1
        },
          {
          choice: "Nonconfrontational",
          value: 1
        },
          {
          choice: "Powerless",
          value: 1
        },
          {
          choice: "Repressing",
          value: 1
        },
          {
          choice: "Security",
          value: 1
        },
        {
            choice: "Blame",
            value: 2
          },
          {
            choice: "Emotional",
            value: 2
          },
          {
            choice: "Melancholy",
            value: 2
          },
          {
            choice: "Angry",
            value: 2
          },
          {
            choice: "Irresponsible",
            value: 2
          },
          {
            choice: "Rescue",
            value: 2
          },
          {
            choice: "Resentful",
            value: 2
          },
          {
            choice: "Unforgiving",
            value: 2
          },
          {
            choice: "Addictive",
            value: 2
          },
          {
            choice: "Self-fulfilling",
            value: 2
          },
          {
            choice: "Powerless",
            value: 2
          },
          {
            choice: "Powerful",
            value: 3
          },          {
            choice: "Driven",
            value: 3
          },          {
            choice: "Loyal",
            value: 3
          },          {
            choice: "Competitive",
            value: 3
          },          {
            choice: "Diciplined",
            value: 3
          },          {
            choice: "Goal-oriented",
            value: 3
          },          {
            choice: "Successful",
            value: 3
          },          {
            choice: "Confident",
            value: 3
          },          {
            choice: "Calculating",
            value: 3
          },          {
            choice: "Generous",
            value: 3
          },          {
            choice: "Wise",
            value: 3
          },          {
            choice: "Discerning",
            value: 3
          },  
          {
            choice: "Controlling",
            value: 4
          },
          {
            choice: "Unappreciated",
            value: 4
          },
          {
            choice: "Long-Suffering",
            value: 4
          },
          {
            choice: "Caretaker",
            value: 4
          },
          {
            choice: "Self-sacrificing",
            value: 4
          },
          {
            choice: "Disappointed",
            value: 4
          },
          {
            choice: "Rescuer",
            value: 4
          },
          {
            choice: "Perfectionist",
            value: 4
          },
          {
            choice: "Resentful",
            value: 4
          },
          {
            choice: "Passive-aggressive",
            value: 4
          },
          {
            choice: "Compassionate",
            value: 4
          },
          {
            choice: "Wise",
            value: 4
          },  
          {
            choice: "Restless",
            value: 5
          },
          {
            choice: "Undisciplined",
            value: 5
          },
          {
            choice: "Impetuous",
            value: 5
          },
          {
            choice: "Overly Generous",
            value: 5
          },
          {
            choice: "Happy-Go-Lucky",
            value: 5
          },
          {
            choice: "Adventurous",
            value: 5
          },
          {
            choice: "Live for today",
            value: 5
          },
          {
            choice: "Artistic",
            value: 6
          },
          {
            choice: "Spiritual",
            value: 6
          },
          {
            choice: "Passive",
            value: 6
          },
          {
            choice: "Motivated",
            value: 2
          },
          {
            choice: "Detached",
            value: 6
          },
          {
            choice: "Non-materialistic",
            value: 6
          },
          {
            choice: "Visionary",
            value: 6
          },
          {
            choice: "Truth",
            value: 6
          }, 
          {
            choice: "Controlling",
            value: 7
          },
          {
            choice: "Rigid",
            value: 7
          },
          {
            choice: "Manipulative",
            value: 7
          },
          {
            choice: "Fearful",
            value: 7
          },
          {
            choice: "Oppressive",
            value: 7
          },
          {
            choice: "Rage",
            value: 7
          },
          {
            choice: "Violence",
            value: 7
          },
          {
            choice: "Critical",
            value: 7
          },
          {
            choice: "Judgemental",
            value: 7
          },
          {
            choice: "Aggressive",
            value: 7
          },
          {
            choice: "Unforgiving",
            value: 7
          },
          {
            choice: "Secretive",
            value: 7
          },
          {
            choice: "Materialistic",
            value: 7
          },
          {
            choice: "Spritiual",
            value: 8
          },
          {
            choice: "Conscious",
            value: 8
          },
          {
            choice: "Vibrant",
            value: 8
          },
          {
            choice: "Trusting",
            value: 8
          },
          {
            choice: "Generous",
            value: 8
          },
          {
            choice: "Generous",
            value: 8
          },
          {
            choice: "Loving",
            value: 8
          },
          {
            choice: "Fluid",
            value: 8
          },
          {
            choice: "Compassionate",
            value: 8
          },
          {
            choice: "Detached",
            value: 8
          },
          {
            choice: "Balanced",
            value: 8
          },
          {
            choice: "Truth",
            value: 8
          },              
    ];


    let total = 0;
    // let answer = 0;
    let checkedArray = [];
    const [checked, setChecked] = useState(false);
    const [answer, setAnswer] = useState(0);
    
    const quizChoices = choices.map((choice) =>(
        <ul>
        <li key={choice.choice}><input type="checkbox" onClick={() => {checkedArray.push(choice.value)}} /> {choice.choice}</li>
        </ul>
    ));


    let math = () => {
        
        for (let i = 0; i < checkedArray.length; i++) {
            total += checkedArray[i];   
           
        }
        console.log(total);
        console.log(checkedArray);
        setAnswer(Math.floor(total / checkedArray.length)) 

    };
    

  
  
    return (
       <Fragment>
           <h1>Financial Quiz</h1>
           <ul className='choiceList'>{quizChoices}</ul>
           <button onClick={() => {math()}}>
            Submit
         </button>
         <div>
         {answer === 1 && (
         <div className='quizButtons'>
             <div className='x-large'>Your money type is The Innocent </div>
             <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
        </div>)}
         </div>
         <div>
         {answer === 2 && (
         <div className='quizButtons'>
         <div className='x-large'>Your money type is The Victim </div>
         <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
         </div>)}
         </div>
         <div>
         {answer === 3 && (
         <div className='quizButtons'>
         <div className='x-large'> Your money type is The Warrior</div>
         <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
         </div>)}
         </div>
         <div>
         {answer === 4 && (
         <div className='quizButtons'>
         <div className='x-large'> Your money type is The Martyr </div>
         <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
         </div>)}
         </div>
         <div>
         {answer === 5 && (
         <div className='quizButtons'>
         <div className='x-large'> Your money type is The Fool </div>
         <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
         </div>)}
         </div>
         <div>
         {answer === 6 && (
         <div className='quizButtons'>
         <div className='x-large'> Your money type is The Creator/Artist </div>
         <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
         </div>)}
         </div>
         <div>
         {answer === 7 && (
         <div className='quizButtons'>
         <div className='x-large'> Your money type is The Tyrant </div>
         <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
         </div>)}
         </div>
         <div>
         {answer === 8 && (
         <div className='quizButtons'>
         <div className='x-large'> Your money type is The Magician </div>
         <div className='buttons'>
              <Link to='/QuizInfo' className='btn btn-primary'>
                For more information on your money type click here!
              </Link>
            </div>
         </div>)}
         </div>
       </Fragment>
    )
}

export default Quiz;