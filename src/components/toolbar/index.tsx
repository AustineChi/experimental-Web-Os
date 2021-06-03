import React, { useState, useEffect } from "react";
import CameraApp from "../camera-app";
import ImageGalleryApp from "../image-gallery";
import NotePad from "../notepad";
import NewsFeed from "../news-feed";

import { Container, IconProcessor } from "./toolbar.styles";

import { NotesModel } from "../../models/notes.interface";
import { NewsFeedModel } from "../../models/newsfeed.interface";

import { fetchLatestNews } from "../../Api";

import cameraIcon from "../../images/camera.svg";
import logoutIcon from "../../images/logout.svg";
import imageGallery from "../../images/image-gallery.svg";
import noteIcon from "../../images/notes.svg";

const ToolBar: ({ setToken }: { setToken: any }) => JSX.Element = ({
	setToken,
}) => {
	const [notes, setNotes] = useState<NotesModel[]>([]);
	const [photos, setPhotos] = useState<string[]>([]);
	const [newsfeed, setNewsFeed] = useState<NewsFeedModel[]>([]);

	const [showCameraApp, setShowCameraApp] = useState<boolean>(false);
	const [showNotePad, setShowNotePad] = useState<boolean>(false);
	const [showImageGalleryApp, setShowImageGalleryApp] = useState<boolean>(
		false
	);

	const [modals, setModal] = useState<string[]>([]);

	const toggleModal = (func: any, state: boolean, type: string) => {
		!state && setModal((prev) => [...prev, type]);
		state && setModal((prev) => [...prev.filter((item) => item !== type)]);

		func((prev) => !prev);
	};

	useEffect(() => {
		async function fetchData() {
			const apiResponse = await fetchLatestNews();
			setNewsFeed(apiResponse);
		}
		fetchData();
	}, []);

	return (
		<Container>
			<Container direction={"column"}>
				<IconProcessor
					src={cameraIcon}
					onClick={() =>
						toggleModal(setShowCameraApp, showCameraApp, "camera")
					}
				/>
				<IconProcessor
					src={imageGallery}
					onClick={() =>
						toggleModal(
							setShowImageGalleryApp,
							showImageGalleryApp,
							"image-gallery"
						)
					}
				/>
				<IconProcessor
					src={noteIcon}
					onClick={() =>
						toggleModal(setShowNotePad, showNotePad, "notepad")
					}
				/>

				<IconProcessor
					src={logoutIcon}
					onClick={() => setToken(false)}
				/>
			</Container>
			<Container left>
				<NewsFeed news={newsfeed} setNewsFeed={setNewsFeed} />
			</Container>
			{showCameraApp && (
				<CameraApp
					setPhotos={setPhotos}
					photos={photos}
					hideModal={() =>
						toggleModal(setShowCameraApp, showCameraApp, "camera")
					}
					show={showCameraApp}
					fade={modals[modals?.length - 1] !== "camera"}
				/>
			)}

			{showNotePad && (
				<NotePad
					hideModal={() =>
						toggleModal(setShowNotePad, showNotePad, "notepad")
					}
					show={showNotePad}
					fade={modals[modals?.length - 1] !== "notepad"}
					setNotes={setNotes}
					notes={notes}
				/>
			)}

			{showImageGalleryApp && (
				<ImageGalleryApp
					hideModal={() =>
						toggleModal(
							setShowImageGalleryApp,
							showImageGalleryApp,
							"image-gallery"
						)
					}
					show={showImageGalleryApp}
					fade={modals[modals?.length - 1] !== "image-gallery"}
				/>
			)}
		</Container>
	);
};

export default ToolBar;
