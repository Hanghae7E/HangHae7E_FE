/* eslint-disable no-tabs */
import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import postApi from '../../../Api/postApi';
import { ITag } from '../../../TypeInterface/postType';

function useUpdateRecruitMutation(
  postId : string | undefined,
  hashTag:Array<ITag> | undefined,
  startDate:string | undefined,
  endDate:string | undefined,
  dueDate:string | undefined,
  imgName:File | undefined,
) {
  const nav = useNavigate();
  return useMutation((form: FieldValues) => postApi.updateRecruitPost(
    form,
    postId,
    hashTag,
    startDate,
    endDate,
    dueDate,
    imgName,
  ), {
    onSuccess: () => {
      nav('/');
    },
  });
}

export default useUpdateRecruitMutation;
