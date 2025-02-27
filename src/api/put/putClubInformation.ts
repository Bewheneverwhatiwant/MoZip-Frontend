// 폼데이터
import axiosInstance from "../axiosInstance";

interface Request {
    name: string;
    image: File | string;
}

interface Response {
    club_id: string;
    name: string;
    image: string;
}

export default async function putClubInformation(club_id: string, data: Request): Promise<Response> {
    try{
        const formData = new FormData();
        formData.append('name', data.name);
        if (data.image instanceof File) {
            formData.append('image', data.image);
        } else {
            formData.append('image', data.image);
        }

        const response = await axiosInstance.put(`api/clubs/${club_id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log("동아리 정보 수정 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("동아리 정보 수정 실패: ", error);
        throw error;
    }
}