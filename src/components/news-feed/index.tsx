import React from "react";
import { NewsFeedModel } from "../../models/newsfeed.interface";

import { Container, NewsItem, TrashIcon } from "./newsfeed.styles";

interface NewsFeedProps {
	news: NewsFeedModel[];
	setNewsFeed: any;
}
const NewsFeed: React.FC<NewsFeedProps> = ({ news, setNewsFeed }) => {
	return (
		<Container>
			{news &&
				news.map((item) => (
					<NewsItem key={item.id}>
						<TrashIcon
							onClick={() =>
								setNewsFeed((prev) =>
									prev.filter((data) => data.id !== item.id)
								)
							}
						/>
						<h5>{item.name}</h5>
						<p>{item.body}</p>
					</NewsItem>
				))}
		</Container>
	);
};

export default NewsFeed;
