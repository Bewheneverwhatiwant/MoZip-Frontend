"use client";

import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import CustomButton from "@/components/CustomButton";
import CustomDivider from "@/components/CustomDivider";

// 담당자: 현아
// Figma : 홈 > [ 모집 ] 탭 클릭 시 나타나는 컴포넌트입니다.
// 모집에 대한 설명을 작성하는 컴포넌트 파일입니다.

export default function Mozip() {

	return (

		<CustomColumn $width="100%" $alignitems="center" $justifycontent="center">
            모집 페이지
			{/* <CustomDivider $width="100%" $height="1px" $backgroundcolor="#D8D8D8" />

			<CustomColumn $width="100%" $alignitems="flex-start" $justifycontent="center" $gap="0.5rem">
				<CustomRow $width="100%" $justifycontent="flex-start">
					<CustomFont $color='red' $font='1rem' $fontweight="bold">*</CustomFont>
					<CustomFont $color='black' $font='1rem' $fontweight="bold">모집 제목</CustomFont>
				</CustomRow>
				<MozipBlockInput
					$placeholder="Text"
					$highlightcolor="#8BB9FF"
					$width="100%"
					$height="3rem"
				/>
			</CustomColumn>

			<CustomColumn $width="100%" $alignitems="flex-start" $justifycontent="center" $gap="0.5rem">
				<CustomRow $width="100%" $justifycontent="flex-start">
					<CustomFont $color='red' $font='1rem' $fontweight="bold">*</CustomFont>
					<CustomFont $color='black' $font='1rem' $fontweight="bold">모집 설명</CustomFont>
				</CustomRow>
				<MozipBlockTextarea
					$placeholder="내용을 입력해 주세요."
					$highlightcolor="#8BB9FF"
					$width="100%"
					$height="20rem"
					maxLength={1000}
				/>
			</CustomColumn>

			<CustomRow $width="100%" $alignitems="center" $justifycontent="flex-end">
				<CustomButton $width="5rem" $backgroundColor="#5296FF" $padding="1rem">
					<CustomFont $color="white" $font="1rem">
						다음
					</CustomFont>
				</CustomButton>
			</CustomRow> */}
		</CustomColumn>

	);
}
