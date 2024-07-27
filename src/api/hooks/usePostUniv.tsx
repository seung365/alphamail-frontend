import { useMutation } from '@tanstack/react-query';
import { mailSend, mailResponseData } from '@/types';
import { BASE_URL } from '..';
import apiClient from '../apiClient';
export const postUnivPath = () => `${BASE_URL}/api/mails/univ`;

export const postUniv = async ({
  sender,
  content,
  department,
  studentId,
  subject,
  receiver,
}: mailSend): Promise<mailResponseData> => {
  const response = await apiClient.post(postUnivPath(), {
    sender,
    content,
    department,
    studentId,
    subject,
    receiver,
  });
  return response.data;
};

export const usePostUniv = () => {
  const mutation = useMutation<mailResponseData, Error, mailSend>({
    mutationFn: postUniv,
  });

  return mutation;
};
