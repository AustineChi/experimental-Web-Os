import React, { useRef, useState } from "react";
import { ToolbarAppModel } from "../../models/toolbar-app.interface";

import Modal from "../modal";
import { LightboxTarget, LightboxClose } from "../../style/main.styles";
import {
	Container,
	FlexContainer,
	FlexItem,
	CameraBOX,
	Capture,
	Image,
	Scroll,
} from "./cameraApp.styles";

const CameraApp: React.FC<ToolbarAppModel> = ({
	show,
	hideModal,
	fade,
	photos,
	setPhotos,
}) => {
	const webcamRef = useRef<any>(null);
	const [selectedPhoto, setSelectedPhoto] = useState<string>(null);

	const capture = (): void => {
		const imageSrc = webcamRef.current.getScreenshot();
		setPhotos((prev) => [...prev, imageSrc]);
	};

	return (
		<>
			<Container>
				<Modal show={show} handleClose={hideModal} fade={fade}>
					<FlexContainer direction={"row"}>
						<FlexItem>
							<CameraBOX
								audio={false}
								ref={webcamRef}
								screenshotFormat="image/jpeg"
							/>
							<Capture onClick={capture}>Capture photo</Capture>
						</FlexItem>

						<Scroll>
							<FlexContainer>
								{photos &&
									photos.map((photo, id) => (
										<Image
											alt="camera"
											key={id}
											src={photo}
											onClick={() =>
												setSelectedPhoto(photo)
											}
										/>
									))}
							</FlexContainer>
						</Scroll>
					</FlexContainer>
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

export default CameraApp;
