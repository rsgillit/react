import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



const App = function () {
    return (
        <div className="ui container comments">


            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:55PM"
                    comment="Nice!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    comment="well done!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="yesterday at 5:00PM"
                    comment="wow!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <div>
                        <h4>Warning!</h4>
                </div>
                Are you sure you want to do this ?
            </ApprovalCard>


        </div>
    );

};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);