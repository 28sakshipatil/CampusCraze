import React from 'react';
import './About.css';
import styled from 'styled-components';
function About () {
    const Container = styled.div`
  display: flex;
  height: 500px;
`;

const   
 SectionLeft = styled.div`
  flex: 1;
  
  padding: 20px;
`;

const SectionRight = styled.div`
  flex: 1;
  
  padding: 20px;
`;
    return ( 
        <div id='bodyy'>
<div >
       <div id='cover' className="fira-sans-black-italic">
        <div className='head'>
            <center>
            <h1>ABOUT  <br/>
            CAMPUS-CRAZE</h1> 
            </center>
        </div>
       </div>
<div>
<Container>
      <SectionLeft>
        {/* Content for the left section */}
        Labore cillum eu enim occaecat magna laboris dolore amet dolore cillum reprehenderit consequat sit. Incididunt aute excepteur ad laboris ullamco aliqua non laborum minim laboris ea. Proident consequat sint qui irure reprehenderit dolor. Excepteur sint tempor mollit ullamco excepteur fugiat dolore reprehenderit laborum elit proident voluptate ea. Et sint culpa nostrud duis irure labore. Ea aliqua anim irure labore pariatur aliquip pariatur esse adipisicing.Ullamco pariatur duis do exercitation laborum. Commodo ex exercitation dolore mollit. Anim non pariatur amet magna nulla cupidatat non eiusmod enim irure velit do pariatur. Exercitation voluptate nostrud ullamco magna adipisicing magna aliquip et nulla officia sint anim laboris Lorem. Velit irure voluptate aliqua consectetur eiusmod commodo sunt duis culpa magna aliqua nulla labore qui. Sunt nostrud fugiat labore enim ea esse culpa.
      </SectionLeft>
      <SectionRight>
        {/* Content for the right section */}
        Est do elit nulla ullamco. Id elit commodo ea consequat aute pariatur. Officia fugiat incididunt ea reprehenderit laborum fugiat elit enim magna eu non. Officia do reprehenderit tempor exercitation in incididunt excepteur dolor proident. Veniam ut Lorem non ad veniam sint anim officia voluptate incididunt ipsum. Qui reprehenderit deserunt quis nisi.Qui exercitation est pariatur amet ut incididunt do dolor pariatur labore. Adipisicing exercitation reprehenderit aliquip non nulla sit. Ipsum reprehenderit labore nulla non magna pariatur anim sunt consequat aute. Tempor dolor anim id eu fugiat nisi labore veniam. Adipisicing eu Lorem deserunt eu non cupidatat reprehenderit et ullamco.
        hii
      </SectionRight>
    </Container>
</div>

    </div>
        </div>
    
 
    );
          
}

export default About ;