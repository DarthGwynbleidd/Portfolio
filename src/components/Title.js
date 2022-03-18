import React from 'react';

const About = () => {
    return (
        <div className='title'>
            <h1 aria-label='Full Stack Developer' className='title__blast-root'>
                <span aria-hidden='true'>Full</span>
                <br />
                <span aria-hidden='true'>Stack</span>
                <br />
                <div className='stack'>
                    <span className='stack0' aria-hidden='true'>Developer</span>
                    <span className='stack1' aria-hidden='true'>Developer</span>
                    <span className='stack2' aria-hidden='true'>Developer</span>
                </div>
            </h1>
        </div>
    );
};

export default About;