"use client";

// 담당자: 현아
// Figma : 홈 > 상단 두개의 탭을 관리하는 파일입니다.
// /homepage의 page.tsx에서 현재 표시하고 있는 컴포넌트의 옆에 파란별을 띄워 표시합니다.

import styled from "styled-components";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import { IoIosArrowForward } from "react-icons/io";
import CustomColumn from "@/components/CustomColumn";
import CustomDivider from "@/components/CustomDivider";

const CustomTabs = styled(CustomRow)`
  padding-top: 3rem;
`;

// activeTab의 타입을 string으로, setActiveTab의 타입을 React.Dispatch로 지정
interface MozipTabsProps {
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function HomeTabs({ activeTab, setActiveTab }: MozipTabsProps) {

	return (
		<CustomColumn $width='80%' $gap='1rem' $alignitems="center" $justifycontent="center">
			<CustomTabs $width="100%" $alignitems="center" $justifycontent="flex-start" $gap="1rem">

				<CustomRow $width="auto" $alignitems="center" $justifycontent="center" $gap="0.5rem">
					<CustomFont $color='black' $font="1.2rem" $fontweight="bold">동아리</CustomFont>
					{activeTab === "동아리" && <StyledImg src={'/icon_TabStar.png'} $width='1rem' $height="1rem" />}
				</CustomRow>

				<IoIosArrowForward />

				<CustomRow $width="auto" $alignitems="center" $justifycontent="center" $gap="0.5rem">
					<CustomFont $color='black' $font="1.2rem" $fontweight="bold">모집</CustomFont>
					{activeTab === "모집" && <StyledImg src={'/icon_TabStar.png'} $width='1rem' $height="1rem" />}
				</CustomRow>

			</CustomTabs>

			<CustomDivider $width='100%' $height='1px' $backgroundcolor="#D8D8D8" />
		</CustomColumn>
	);
}
