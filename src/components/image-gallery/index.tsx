import React, { useEffect, useState } from "react";
import { fetchImages } from "../../Api";
import { ToolbarAppModel } from "../../models/toolbar-app.interface";
import Modal from "../modal";
import { LightboxTarget, LightboxClose } from "../../style/main.styles";
import {
	ControlContainer,
	NextButton,
	PrevButton,
} from "../../style/main.styles";
import { Container, ImageWrapper, ImageBox } from "./imageGallery.styles";

const ImageGallery: React.FC<ToolbarAppModel> = ({ show, hideModal, fade }) => {
	const [start, setStart] = useState<number>(0);
	const [data, setData] = useState([]);
	const [selectedPhoto, setSelectedPhoto] = useState<string>(null);
	const nextPage = () => setStart((prev) => prev + 20);
	const prevPage = () => setStart((prev) => prev !== 0 && start - 20);

	useEffect(() => {
		async function fetchData() {
			const apiResponse = await fetchImages(start);
			setData(apiResponse);
		}
		fetchData();
	}, [start]);

	return (
		<>
			<Container>
				<Modal show={show} handleClose={hideModal} fade={fade}>
					<ControlContainer>
						{start !== 0 && <PrevButton onClick={prevPage} />}
						<NextButton onClick={nextPage} />
					</ControlContainer>
					<ImageWrapper>
						{data &&
							data.map((item, id) => (
								<ImageBox
									key={id}
									onClick={() => setSelectedPhoto(item.url)}
								>
									<img
										alt={item.title}
										src={item.thumbnailUrl}
									/>
									<div>{item.title}</div>
								</ImageBox>
							))}
					</ImageWrapper>
				</Modal>
			</Container>
			{selectedPhoto && (
				<LightboxTarget>
					<img src={selectedPhoto} alt="selectedimage" />
					<LightboxClose onClick={() => setSelectedPhoto(null)} />
				</LightboxTarget>
			)}
		</>
	);
};

export default ImageGallery;
