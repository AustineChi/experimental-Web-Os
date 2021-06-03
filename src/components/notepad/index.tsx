import React, { useState } from "react";
import moment from "moment";
import uuid from "react-uuid";
import { ToolbarAppModel } from "../../models/toolbar-app.interface";
import Modal from "../modal";
import {
	Container,
	COntrolBox,
	ListNotes,
	TextArea,
	Wrapper,
	CreateIcon,
	TrashIcon,
	SearchBox,
	Text,
} from "./notepad.styles";
import { NotesModel } from "../../models/notes.interface";

const NotePad: React.FC<ToolbarAppModel> = ({
	show,
	hideModal,
	fade,
	setNotes,
	notes,
}) => {
	const [activeNote, setActiveNote] = useState<string>(notes[0]?.id || null);
	const [searchValue, setSearchValue] = useState<string>("");

	const addNote = (): void => {
		const id = uuid();
		const data = {
			id,
			date: moment().format("ddd D MMM h:mm A"),
			text: "",
		};
		setActiveNote(id);
		setNotes((prev) => [data, ...prev]);
	};

	const updateNote = (val: string): void => {
		const data = [...notes].map((item) => {
			if (item.id === activeNote) {
				item.text = val;
			}
			return item;
		});
		setNotes([...data]);
	};

	const deleteNote = (): void => {
		const position = notes.findIndex((note) => note.id === activeNote);
		const data = [...notes].filter((note) => note.id !== activeNote);
		setNotes(data);
		setActiveNote(data[position - 1]?.id || null);
	};


	return (
		<Container>
			<Modal show={show} handleClose={hideModal} fade={fade} specialPad>
				<COntrolBox>
					<CreateIcon
						onClick={addNote}
						disabled={notes[0]?.text === ""}
					/>
					<TrashIcon
						disabled={!notes.length || !!!activeNote}
						onClick={deleteNote}
					/>
					<SearchBox
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</COntrolBox>
				<Wrapper>
					<ListNotes>
						{notes &&
							notes
								.filter((note) =>
									note.text.includes(searchValue)
								)
								.map((note) => (
									<Text
										key={note.id}
										active={note.id === activeNote}
										onClick={() => setActiveNote(note.id)}
									>
										<h5>{note.text || "New Note"}</h5>
										<p>{note.date}</p>
									</Text>
								))}
					</ListNotes>
					<TextArea
						placeholder={"type here"}
						value={
							activeNote
								? notes[
										notes.findIndex(
											(note: NotesModel) =>
												note.id === activeNote
										)
								  ]?.text
								: ""
						}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							updateNote(e.target.value)
						}
						onClick={notes[0]?.text !== "" && addNote}
					/>
				</Wrapper>
			</Modal>
		</Container>
	);
};

export default NotePad;