import React from 'react';
import Progress from 'react-progress';

const progressBar = page => page => {
  console.log(page);
  if (page === 1) {
    return (
        <Progress percent={33} height={5} />
    )
  } else if (page === 2) {
    return (
      <div className='progBar'>
        <Progress percent={66} height={5} />
      </div>
    )
  } else {
    return <Progress precent={100} height={5} />
  }
}

const namePage = page => {
  if (page === 1 || page === 2)
    return `Signup`;
  else
    return `Thank you!`;
}

const ScrollHeader = (props) => {
  return (
    <div>
      <Progress percent={props.page * 33.333} height={5} />
      {props.page}
      {namePage}
      {progressBar(props.page)}
    </div>
  )
}

export default ScrollHeader;
