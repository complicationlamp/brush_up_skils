import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = ()=> {
	return (
		<div className="ui container comments">
		<ApprovalCard>
			<div>
				<h4>
					Warning!
				</h4>
				Are you sure
			</div>
		</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 4:50 pm" 
					comment="Maga man" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Steve" 
					timeAgo="Today at 7:50 pm" 
					comment="Berni Bro" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Thom" 
					timeAgo="Yesterday at 7:00 am" 
					comment="GO TEAM" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));