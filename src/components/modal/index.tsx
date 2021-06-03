import React, { useState } from "react";
import { ModalModel } from "../../models/modal.interface";
import {
	ModalContainer,
	ModalMain,
	COntrolBox,
	CancelIcon,
	MaximizeIcon,
} from "./modal.styles";

const Modal: React.FC<ModalModel> = ({
	handleClose,
	show,
	fade,
	children,
	specialPad,
}) => {
	const [maximize, setMaximize] = useState<boolean>(false);
	return (
		<ModalContainer show={show} fade={fade}>
			<ModalMain maximize={maximize} fade={fade} specialPad={specialPad}>
				<COntrolBox>
					<MaximizeIcon
						onClick={() => setMaximize((prev) => !prev)}
					/>
					<CancelIcon
						onClick={() => {
							handleClose();
							setMaximize(false);
						}}
					/>
				</COntrolBox>

				{children}
			</ModalMain>
		</ModalContainer>
	);
};

export default Modal;
