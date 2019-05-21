import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from './CommentDetail';



const App = function () {
    return (
        <div className="ui container comments">
           <CommentDetail
               author="Sam"
               timeAgo="Today at 4:55PM"
               comment="Nice!"
               image={faker.image.avatar()}
           />
           <CommentDetail
               author="Alex"
               timeAgo="Today at 2:00AM"
               comment="well done!"
               image={faker.image.avatar()}
           />
           <CommentDetail
               author="Jane"
               timeAgo="yesterday at 5:00PM"
               comment="wow!"
               image={faker.image.avatar()}
           />
        </div>
    );

};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);