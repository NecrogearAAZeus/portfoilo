import './App.css';

function App() {
  return (
    <div className="App">
      <div className='quickbar'>
      <div className='page1Warpper'>
        <div className='topRight grid'>
            <div></div>
            <div className='10col col-1'>
              <ul className='categories'>
                <li>Design</li>
                <li>Development</li>
                <li className='contact'>
                  Contact
                </li>
                <li className='lab'>
                  Lab
                </li>
              </ul>
            </div>
            <div className='subcategories 1col col-1'>
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

              </ul>
              
            </div>
            
        </div>
        <div className='name'>
          <div className='grid2'>
            <div>
            </div>
            <div>
              YUHAN KIM
            </div>
            <div>  
            </div>
          </div>
        </div>
      </div>
      <div className='page2warpper'>
        <div className='page2Space'>
          <div className='page2Grid1'>
          </div>
          <div className='page2Grid2'>
            <div className='page2Space2'>
              <div className='page2Box1 imgBox'>
                <div className='img1 imgAsset'>
                  <img src="images/farm.png" alt='img1'></img>
                </div>
                <div className='underBar1 underBarType1'></div>
                <div className='Title1 TitleType1'>대산농장</div>
                <div className='subTitle1 subTitleType1'>웹 디자인</div>
              </div>
              <div className='page2Box2 imgBox'>
                <div className='img2 imgAsset'>
                  <img src="images/treasure.png" alt='img2'></img>
                </div>
                <div className='underBar1 underBarType1'></div>
                <div className='Title2 TitleType1'>보물 도우미</div>
                <div className='subTitle2 subTitleType1'>웹 디자인</div>
              </div>
              <div className='page2Box3 imgBox'>
                <div className='img3 imgAsset'>
                  <img src="images/jobGuide.png" alt='img3'></img>
                </div>
                <div className='underBar1 underBarType1'></div>
                <div className='Title3 TitleType1'>직업 가이드</div>
                <div className='subTitle3 subTitleType1'>웹 디자인</div>
              </div>
              <div className='page2Box4 imgBox'>
                <div className='img4 imgAsset '>
                  <img src="images/tea.png" alt='img4'></img>
                </div>
                <div className='underBar1 underBarType1'></div>
                <div className='Title4 TitleType1'>꽃이랑 차랑</div>
                <div className='subTitle4 subTitleType1'>로고 디자인</div> 
              </div>
              <div className='page2Box5 imgBox'>
                <div className='img5 imgAsset'>
                  <img src="images/yHoney.png" alt='img5'></img>
                </div>
                <div className='underBar1 underBarType1'></div>
                <div className='Title5 TitleType2'>Y - HONEY</div>
                <div className='subTitle5 subTitleType1'>패키지 디자인</div> 
              </div>
              <div className='page2Box6 imgBox'>
                <div className='img6 imgAsset'>
                  <img src="images/patchWorkImg.png" alt='img6'></img>
                </div>
                <div className='underBar1 underBarType1'></div>
                <div className='Title6 TitleType1'>기타 작업물</div>
                <div className='subTitle6 subTitleType1'>기타</div> 
              </div>
            </div>  
          </div>
          <div className='page2Grid3'>
          </div>
    
        </div>
      </div>
      <div className='page3warpper'>
        <div className='page3Space'>
          <div className='page3Flex1'>
            <div className='page3Text'>
                <div></div>
                <div>Thanks For Watching</div>
                <div></div>
            </div>
            <div className='page3Name'>
              <span className='page3NameEN'>
                Yuhan Kim
              </span>
              <span className='page3NameKR'>
                김유한
              </span>
            </div>
          </div>
          <div className='page3Absolute'>
            <div className='page3Contents'>
              <div> 
              </div>
              <div>
                Contact
              </div>
              <div>
                <img className='emailImg' src='/images/email.png' alt='img7'></img>
                yuhan6653@gmail.com
              </div>
              <div className='page3Lab'>
                <img className='labImg' src='/images/lab.png' alt='img8'></img>
                Lab
              </div>
              <div>  
              </div>
            </div>
            <div className='page3Contents2'>
              본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
            </div>
          </div>

        </div>
      </div>
      {/* 서브페이지 시작 */}
      <div className='subpageWarpper'>
        <div className='subpageSpace'>
          <div className='subpageImg1Warpper'>
            <div></div>
            <div>
              <img src='/images/farm.png' className='subpageImg1'></img>
            </div>
            <div></div>
          </div>
          <div className='underBarType2Warpper'>
            <div></div>
            <div>
              <div className='underBarType2'></div>
              <div className='subpageTitle'>
                대산농장
              </div>
              <div className='subpageSubtitle'>
                웹 디자인
              </div>
              <div className='subpageContents'>
                지인에게서 외주 받은 농장 사이트입니다. 아직 농장을 정식적으로 오픈하지 않아, 임의의 사진과 글로 채워 넣었습니다.
                농장이 정식 오픈할 시 즉시 수정할 수 있게 템플릿을 짜놓았습니다. 모바일과 pc 양측의 사용 환경을 고려하여 반응형으로 제작하였습니다. Git Hub을 통한 파일 관리를 처음으로 시작한 프로젝트입니다.
              </div>
              <div className='subpageLink'>
                <a href='#'>웹 사이트 바로가기</a>
              </div>
              <div className='subpageGrid'>
                <img className='subpageImg2' src='/images/farm2.png'></img>
              </div>
              <div className='subpageGrid2'>
                <div>
                  <img className='subpageImg3' src='/images/farm3.png'></img>
                </div>
                <div>
                  <img className='subpageImg4' src='/images/farm4.png'></img>
                </div>
              </div>    
            </div>

            <div></div>
          </div>
        </div>
      </div>
      {/* 서브페이지 끝*/}

      </div>
    </div>
  );
}

export default App;
