import React, { useState, useEffect } from "react";
import moment from "moment";

import {
	Container,
	WifiIcon,
	ImageIcon,
	BatteryContainer,
	BatteryLevel,
	Date,
} from "./NavHeader.style";
import batteryIcon from "../../images/battery-icon.svg";

const NavHeader: () => JSX.Element = () => {
	const [time, setTime] = useState<string>(
		moment().format("ddd D MMM h:mm A")
	);
	const [batteryLevel, setBatteryLevel] = useState<number>(90);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setTime(moment().format("ddd D MMM h:mm A"));
		}, 1000);
		return () => {
			window.clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		let navigator: any;
		navigator = window.navigator;
		const batteryLife = window.setInterval(() => {
			navigator.getBattery().then((battery) => {
				const showBatteryLeve = () => {
					let level: number = Math.floor(battery.level * 100);
					setBatteryLevel(level);
				};
				showBatteryLeve();
				battery.ondischargingtimechange = () => {
					showBatteryLeve();
				};

				battery.onchargingtimechange = () => {
					showBatteryLeve();
				};
			});
		}, 1000);

		return () => {
			window.clearInterval(batteryLife);
		};
	}, []);

	return (
		<Container>
			<WifiIcon />
			<BatteryContainer>
				<BatteryLevel>{`${batteryLevel}%`}</BatteryLevel>
				<ImageIcon src={batteryIcon} />
			</BatteryContainer>
			<Date>{time}</Date>
		</Container>
	);
};

export default NavHeader;
