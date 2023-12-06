import './App.css';

function App() {
  return (
    <div className="App">
      <div className='page1Warpper'>
        <div className='topRight grid'>
            <div className='10col col-1'>
              <ul className='categories'>
                <li>Design</li>
                <li>Development</li>
              </ul>
            </div>
            <div className='subcategories 1col col-1 opacity8'>
              <ul>
                <li className='design'>
                  <ul>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                  </ul>
                </li>
                <li className='development'>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Jquery</li>
                    <li>Javascrpit</li>
                    <li>React</li>
                    <li>Git Hub</li>
                  </ul>
                </li>
                <li className='contact'>
                  Contact
                </li>
                <li className='lab'>
                  Lab
                </li>
              </ul>
              
            </div>
            
        </div>
        <div className='name'>
          <div className='grid2'>
            YUHAN KIM
          </div>
        </div>
      </div>
      <div className='quickbar'>
        <div className='subQuickbar'>
          <div className='subQuickbar2'>
            <div className='circle1 circle'>
            </div>
            <div className='circle2 circle'>
            </div>
            <div className='circle3 circle'>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
