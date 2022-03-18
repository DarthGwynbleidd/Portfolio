import React, { useEffect, useState } from 'react';

const Time = () => {
    const date = new Date()
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [time, setTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date()
            const addZero = (number) => {
                let str = ''
                if (number < 10){
                    str = `0` + number
                }
                else
                    str = number
                return str
            }
            const tmpHours = addZero(date.getHours())
            const tmpMinutes = addZero(date.getMinutes())
            const tmpSeconds = addZero(date.getSeconds())
            
            setTime(
                {
                    hours: tmpHours,
                    minutes: tmpMinutes,
                    seconds: tmpSeconds
                })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className='time'>
            <div className='time__clock'>{time.hours}:{time.minutes}:{time.seconds}</div>
            <div className='time__zone'>{timezone}</div>
        </div>
    );
};

export default Time;